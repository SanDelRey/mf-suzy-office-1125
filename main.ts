import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const line: string = "Our open-plan office was designed for teamwork, which is why I now recognise the exact sigh each coworker makes when their lunch is missing."
const gate = line.length >= 1 && line.length <= 200
if (!gate) throw new Error("entry must be 1..200 characters")

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "."
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, "entry.txt"), line, "utf8")
