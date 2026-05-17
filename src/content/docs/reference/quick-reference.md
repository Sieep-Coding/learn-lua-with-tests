---
title: Check Your Lua Reference
description: Comprehensive API reference and configuration details for the Check Your Lua (CYL) testing framework.
---

Check Your Lua (CYL) is a minimal, zero-dependency testing framework designed to stay out of your way while providing robust BDD-style assertions, lifecycle hooks, and flexible configuration options.

---

## Installation

Install the stable release directly from the official repository via LuaRocks:

```bash
luarocks install checkyour
```

Alternatively, download `checkyour.lua` directly and drop it into your project folder.

---

## Library Setup

Initialize your test file by importing the required components and parsing terminal input flags.

```lua
local cyl = require('checkyour')
local describe, it, expect = cyl.describe, cyl.it, cyl.expect

-- Automatically map command-line switches to the runner configuration
cyl.parseargs() 

-- [Your test suites go here...]

-- Conclude execution by generating metrics and terminating with a proper status code
cyl.report()
cyl.exit() 
```

---

## Test Organization

### Suites & Contexts
Group test suites logically via `describe`. These blocks can be nested to map complex contextual workflows.

```lua
describe("user authentication", function()
  describe("password validation", function()
    it("accepts complex passwords", function()
      -- Assertions here
    end)
  end)
end)
```

### Lifecycle Hooks
Isolate common setups and state cleanups using scoped execution hooks. They execute relative to the specific `describe` block they are declared in.

```lua
describe("database transactions", function()
  local session
  
  -- Runs immediately before each individual test ('it' block)
  cyl.before(function() 
    session = connect_test_db() 
  end)
  
  -- Runs immediately after each individual test ('it' block)
  cyl.after(function() 
    session:close() 
  end)

  it("updates balance", function() 
    expect.exist(session) 
  end)
end)
```

### Skipping Tests
Pass a literal `false` as an optional third argument to temporarily disable a test without deleting the implementation code block.

```lua
it("wip performance optimization", function()
  expect.equal(heavy_computation(), true)
end, false)
```

---

## Assertions API Reference

The `expect` object exposes global matchers designed to evaluate runtime states. Deep tables are safely traversed and compared automatically.

| Matcher | Description |
| :--- | :--- |
| `expect.exist(value)` | Passes if `value` is not `nil`. |
| `expect.not_exist(value)` | Passes if `value` evaluates explicitly to `nil`. |
| `expect.truthy(value)` | Passes if `value` is not `nil` and not `false` (standard Lua logic). |
| `expect.falsy(value)` | Passes if `value` is either `nil` or `false`. |
| `expect.equal(a, b)` | Performs deep structural and type comparison (handles arrays and nested tables). |
| `expect.not_equal(a, b)` | Passes if `a` and `b` structurally differ in values, types, or shapes. |
| `expect.type(value, type_str)` | Matches type against a string (e.g., `"table"`, `"function"`, `"number"`). |
| `expect.near(a, b, [delta])` | Asserts float values `a` and `b` are within an absolute variance (`delta` defaults to `1e-9`). |
| `expect.contains(target, value)` | Searches sequences linearly for an item, or tests string matching for plain substrings. |
| `expect.length(target, size)` | Asserts that string length or table sequence counts match exactly (`#target == size`). |
| `expect.matches(str, pattern)` | Validates that target string `str` satisfies the standard Lua regex `pattern`. |
| `expect.not_matches(str, pat)`| Validates that target string `str` does not satisfy Lua regex `pattern`. |
| `expect.fail(func, [substring])`| Asserts that calling `func` throws an error. Optional parameter verifies error text. |
| `expect.not_fail(func)` | Asserts that executing `func` wraps and resolves cleanly without exceptions. |

---

## Configuration Variables

Toggle behavioral changes globally using system environment variables or command-line flags.

| Environment Variable | Command-Line Flag | Default | Description |
| :--- | :--- | :--- | :--- |
| `CYL_QUIET` | `--quiet` | `false` | Compact processing mode. Drops headers and renders progress dots. |
| `CYL_STOP_ON_FAIL` | `--stop-on-fail` | `false` | Instantly interrupts execution and terminates on the first failure. |
| `CYL_COLOR` | `--no-color` | `true` | Enables or disables ANSI color escape character generation in terminals. |
| `CYL_FILTER` | `--filter="pattern"` | `""` | Restricts running cases to descriptions containing a literal or regex string. |
| `CYL_SHOW_TRACEBACK` | `--no-show-traceback`| `true` | Generates a full traceback code trace report down to line numbers on failure. |
| `CYL_SHOW_ERROR` | `--no-show-error` | `true` | Prints out raw evaluation mismatch data underneath failing blocks. |
| `CYL_UTF8TERM` | `--no-utf8term` | Auto | Toggles formatting style using high-density Unicode indicator characters. |

```bash
# Pre-runtime injection execution styles:
CYL_QUIET=true lua project_test.lua
lua project_test.lua --filter="auth" --stop-on-fail
```

---

## Exit Diagnostics

The module explicitly surfaces process codes intended to link directly with continuous integration tasks:
* `0`: All matching tests completed smoothly and successfully.
* `1`: One or more execution branches encountered structural failures or assertion violations.