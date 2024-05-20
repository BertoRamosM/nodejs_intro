//.js uses CommonJs by default
//.mjs uses EchmaScript modules (ES)
//.cjs uses CommonJs

import { sum, sub, mult } from "./sum.mjs";
console.log(sum(1, 5))
console.log(sub(1, 5));
console.log(mult(1, 5));