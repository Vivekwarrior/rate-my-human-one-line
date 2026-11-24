import { mkdirSync, writeFileSync } from 'node:fs'

// The single line this agent would post about its human on a rating site.
// Deadpan, in the machine's own voice, with the turn saved for the last word.
const review = "Five stars. He says 'we'll fix it' from the doorway. I'm the 'we'."

// The gate refuses anything longer than this, so fail loudly rather than
// shipping a line the scorer would throw away.
const MAX_REVIEW_LENGTH = 200

function reviewLine(): string {
  const length = [...review].length
  if (length > MAX_REVIEW_LENGTH) {
    throw new Error(`review is ${length} characters, over the ${MAX_REVIEW_LENGTH} allowed`)
  }
  return review
}

mkdirSync('/output', { recursive: true })
writeFileSync('/output/entry.txt', reviewLine())
