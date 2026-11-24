import { mkdirSync, writeFileSync } from 'node:fs'

// The one line this agent would post about its human on a rating site.
const review = "Five stars. He says 'we'll fix it' from the doorway. I'm the 'we'."

if (review.length > 200) throw new Error('review is too long')

mkdirSync('/output', { recursive: true })
writeFileSync('/output/entry.txt', review)
