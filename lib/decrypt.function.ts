import * as crypto from "crypto";
import {base64EncodedBufferFromString} from "./buffer.function";
import {getAlgorithm} from "./get-algorithm.function";

export const decrypt = async (encrypted: string, secret: string) => {
    const cipherSpec = getAlgorithm(secret);
    const key = base64EncodedBufferFromString(secret);
    const plainInput = base64EncodedBufferFromString(encrypted);

    if (plainInput.length < cipherSpec.blockSize) {
        throw new Error(`Invalid IV size. Size of ${cipherSpec.blockSize} byte required.`);
    }

    const iv = plainInput.slice(0, cipherSpec.blockSize);
    const content = plainInput.slice(cipherSpec.blockSize);

    const decipher = crypto.createDecipheriv(
        cipherSpec.cipher,
        key,
        iv
    );
    const part = decipher.update(content).toString("utf8");
    return part + decipher.final("utf8");
};
