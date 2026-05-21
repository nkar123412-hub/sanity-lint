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
    const output = wasmFormat(source, { width })
    // Ensure standalone .groq files end with a newline, matching Prettier's
    // default behavior for every other file type. When this printer is invoked
    // through `textToDoc` for embedded GROQ, Prettier strips the trailing
    // newline via `stripTrailingHardline`, so embed output is unaffected.
    return output.endsWith('\n') ? output : `${output}\n`
  },
}
