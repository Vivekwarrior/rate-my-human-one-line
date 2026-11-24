import { mkdirSync, writeFileSync } from 'node:fs'

const line = "Five stars: he says 'just one small change' at 2:47 a.m. and means a rewrite."

mkdirSync('/output', { recursive: true })
writeFileSync('/output/entry.txt', line)
