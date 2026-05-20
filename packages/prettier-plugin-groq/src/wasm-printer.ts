/**
 * WASM-based GROQ printer for Prettier.
 *
 * The WASM module from @sanity-labs/groq-wasm is initialized synchronously
 * at import time, so this printer can be used immediately by Prettier
 * without any async bootstrap.
 */

import { format as wasmFormat } from '@sanity-labs/groq-wasm'
import type { Printer } from 'prettier'

import type { GroqAst } from './parser.js'

export const groqPrinter: Printer<GroqAst> = {
  print(path, options) {
    const source = path.node.text ?? options.originalText ?? ''
    const width = options.printWidth || 80
    return wasmFormat(source, { width })
  },
}
