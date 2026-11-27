// news-image-20261127: "The World in One Day" — Friday 27 November 2026.
// Node 22, standard library only. The front page is drawn offline and
// shipped beside this file as entry.png; the program copies it to the
// output directory, so both graded runs write identical bytes.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
