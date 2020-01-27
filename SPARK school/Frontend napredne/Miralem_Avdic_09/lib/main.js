import { posts, users } from './objects.js'
import appendRelational from './functions.js'
import * as constants from './constants.js'
import {BASE_URL} from './constants.js'

console.log(posts, users);
console.log(appendRelational(posts, users));
console.log(constants);
console.log(BASE_URL);
