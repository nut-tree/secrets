export {Algorithm} from "./lib/algorithm.const";
import {decrypt} from "./lib/decrypt.function";
import {encrypt} from "./lib/encrypt.function";
import {generateKey} from "./lib/generate-key";

export const secret = {
    decrypt,
    encrypt,
    generateKey
};
