import * as crypto from "crypto";
import {base64EncodedBufferFromString} from "./buffer.function";
import {getAlgorithm} from "./get-algorithm.function";
import {generateRandom} from "./random.function";

export const encrypt = async (plainText: string, keyBase64: string): Promise<string> => {
    const cipherSpec = getAlgorithm(keyBase64);
    const key = base64EncodedBufferFromString(keyBase64);
    const iv = await generateRandom({
        byteLength: cipherSpec.blockSize,
    });

    const cipher = crypto.createCipheriv(cipherSpec.cipher, key, iv);
    const part = cipher.update(plainText);
    return Buffer.concat([iv, part, cipher.final()]).toString("base64");
};
