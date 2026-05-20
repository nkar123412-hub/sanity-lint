---
'@sanity-labs/prettier-plugin-groq': major
'@sanity-labs/eslint-plugin': major
'@sanity-labs/schema-lint': major
'@sanity-labs/groq-lint': major
'@sanity-labs/groq-wasm': major
'prettier-test': major
'@sanity-labs/groq-lsp': major
'groq-lint-playground': major
'@sanity-labs/lint-core': major
---

BREAKING CHANGE: Minimum Node.js version is now v22.3.0.

BREAKING CHANGE: Explicit CommonJS builds have been dropped. All supported Node.js versions provide transparent CommonJS/ESM interop, so consumers can `require()` the published ESM directly.

BREAKING CHANGE: WASM initialization is now handled automatically at import time, so the explicit init/availability APIs have been removed:

- `@sanity-labs/groq-wasm`: removed `initWasm`, `isInitialized`, `lintAsync`, and `formatAsync`. Use `lint` and `format` directly.
- `@sanity-labs/groq-lint`: removed `initLinter` and `isWasmAvailable`.
- `@sanity-labs/prettier-plugin-groq`: removed `initWasmFormatter`, `isWasmFormatterAvailable`, and `createGroqPrinter`. The plugin can be used immediately after import with no async bootstrap.
