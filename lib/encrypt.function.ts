import * as crypto from "crypto";
import {Algorithm} from "./algorithm.enum";
import {base64EncodedBufferFromString} from "./buffer.function";
import {getCipherSpec} from "./get-cipher-spec.function";
import {generateRandom} from "./random.function";

export const encrypt = async (
    plainText: string,
    keyBase64: string,
    algorithm: Algorithm,
    useIV: boolean = true): Promise<string> => {
    const cipherSpec = getCipherSpec(algorithm);
    const key = base64EncodedBufferFromString(keyBase64);

    if (useIV) {
        const iv = await generateRandom({
            byteLength: cipherSpec.blockSize,
        });
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        const part = cipher.update(plainText);
        return Buffer.concat([iv, part, cipher.final()]).toString("base64");
    } else {
        const cipher = crypto.createCipher(algorithm, key);
        const part = cipher.update(plainText);
        return Buffer.concat([part, cipher.final()]).toString("base64");
    }
};
