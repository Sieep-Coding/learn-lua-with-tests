// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeGalaxy()],
      title: 'Learn Lua With Tests',
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/sieep-coding/learn-lua-with-tests',
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Install Lua', slug: 'getting-started-with-lua/install-lua' },
            { label: 'Hello, World', slug: 'getting-started-with-lua/hello-world' },
            // { label: 'Setting Up LuaUnit', slug: 'getting-started-with-lua/setup-luaunit' },
            // { label: 'Setting Up Check Your Lua', slug: 'getting-started-with-lua/setup-check-your-lua' },
          ],
        },
        // {
        //   label: 'Lua Fundamentals',
        //   items: [
        //     { label: 'Variables and Types', slug: 'lua-fundamentals/variables-and-types' },
        //     { label: 'Strings', slug: 'lua-fundamentals/strings' },
        //     { label: 'Numbers and Math', slug: 'lua-fundamentals/numbers-and-math' },
        //     { label: 'Booleans and Nil', slug: 'lua-fundamentals/booleans-and-nil' },
        //   ],
        // },
        // {
        //   label: 'Control Flow',
        //   items: [
        //     { label: 'If / Else', slug: 'control-flow/if-else' },
        //     { label: 'Loops', slug: 'control-flow/loops' },
        //     { label: 'Repeat Until', slug: 'control-flow/repeat-until' },
        //     { label: 'Break and Return', slug: 'control-flow/break-and-return' },
        //   ],
        // },
        // {
        //   label: 'Functions',
        //   items: [
        //     { label: 'Defining Functions', slug: 'functions/defining-functions' },
        //     { label: 'Multiple Return Values', slug: 'functions/multiple-return-values' },
        //     { label: 'Variadic Functions', slug: 'functions/variadic-functions' },
        //     { label: 'Closures', slug: 'functions/closures' },
        //     { label: 'Recursion', slug: 'functions/recursion' },
        //   ],
        // },
        // {
        //   label: 'Tables',
        //   items: [
        //     { label: 'Table Basics', slug: 'tables/table-basics' },
        //     { label: 'Arrays and Sequences', slug: 'tables/arrays-and-sequences' },
        //     { label: 'Hash Maps', slug: 'tables/hash-maps' },
        //     { label: 'Nested Tables', slug: 'tables/nested-tables' },
        //     { label: 'Table Manipulation', slug: 'tables/table-manipulation' },
        //   ],
        // },
        // {
        //   label: 'Object-Oriented Lua',
        //   items: [
        //     { label: 'Metatables', slug: 'object-oriented/metatables' },
        //     { label: 'Metamethods', slug: 'object-oriented/metamethods' },
        //     { label: 'Classes and Inheritance', slug: 'object-oriented/classes-and-inheritance' },
        //     { label: 'Mixins and Composition', slug: 'object-oriented/mixins-and-composition' },
        //   ],
        // },
        // {
        //   label: 'Error Handling',
        //   items: [
        //     { label: 'pcall and xpcall', slug: 'error-handling/pcall-and-xpcall' },
        //     { label: 'Error Objects', slug: 'error-handling/error-objects' },
        //     { label: 'Testing for Errors', slug: 'error-handling/testing-for-errors' },
        //   ],
        // },
        // {
        //   label: 'Modules and Scope',
        //   items: [
        //     { label: 'Lexical Scoping', slug: 'modules-and-scope/lexical-scoping' },
        //     { label: 'Writing Modules', slug: 'modules-and-scope/writing-modules' },
        //     { label: 'require and package', slug: 'modules-and-scope/require-and-package' },
        //   ],
        // },
        // {
        //   label: 'Concurrency',
        //   items: [
        //     { label: 'Coroutines', slug: 'concurrency/coroutines' },
        //     { label: 'Producers and Consumers', slug: 'concurrency/producers-and-consumers' },
        //     { label: 'Coroutine Pipelines', slug: 'concurrency/coroutine-pipelines' },
        //   ],
        // },
        // {
        //   label: 'Standard Library',
        //   items: [
        //     { label: 'String Library', slug: 'standard-library/string-library' },
        //     { label: 'Table Library', slug: 'standard-library/table-library' },
        //     { label: 'Math Library', slug: 'standard-library/math-library' },
        //     { label: 'IO Library', slug: 'standard-library/io-library' },
        //     { label: 'OS Library', slug: 'standard-library/os-library' },
        //   ],
        // },
        // {
        //   label: 'Testing Patterns',
        //   items: [
        //     { label: 'Test Organization', slug: 'testing-patterns/test-organization' },
        //     { label: 'Mocks and Stubs', slug: 'testing-patterns/mocks-and-stubs' },
        //     { label: 'Table-Driven Tests', slug: 'testing-patterns/table-driven-tests' },
        //     { label: 'Testing Async Code', slug: 'testing-patterns/testing-async-code' },
        //   ],
        // },
        // {
        //   label: 'Real-World Projects',
        //   items: [
        //     { label: 'Building a CLI Tool', slug: 'real-world/building-a-cli-tool' },
        //     { label: 'Lua in Neovim Plugins', slug: 'real-world/lua-in-neovim-plugins' },
        //     { label: 'Scripting with LÖVE2D', slug: 'real-world/scripting-with-love2d' },
        //   ],
        // },
        {
          label: 'Reference',
          items: [{ autogenerate: { directory: 'reference' } }],
        },
      ],
    }),
  ],
});
