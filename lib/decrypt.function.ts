import {createDecipher, createDecipheriv, Decipher} from "crypto";
import {Algorithm} from "./algorithm.enum";
import {base64EncodedBufferFromString} from "./buffer.function";
import {CipherSpec, getCipherSpec} from "./get-cipher-spec.function";

interface DecryptInput {
    iv: Buffer;
    content: Buffer;
}

const sliceInput = (plainInput: Buffer, cipherSpec: CipherSpec): DecryptInput => {
    const iv = plainInput.slice(0, cipherSpec.blockSize);
    const content = plainInput.slice(cipherSpec.blockSize);

    return ({
        content,
        iv
    });
};

export const decrypt = async (encrypted: string, secret: string, algorithm: Algorithm, useIV: boolean = true) => {
    const cipherSpec = getCipherSpec(algorithm);
    const key = base64EncodedBufferFromString(secret);
    const plainInput = base64EncodedBufferFromString(encrypted);

    if (useIV && plainInput.length < cipherSpec.blockSize) {
        throw new Error(`Invalid IV size. Size of ${cipherSpec.blockSize} byte required.`);
    }

    let decipher: Decipher;
    let data: DecryptInput;
    if (useIV) {
        data = sliceInput(plainInput, cipherSpec);

        decipher = createDecipheriv(
            algorithm,
            key,
            data.iv
        );
    } else {
        data = {iv: Buffer.alloc(0), content: plainInput};
        decipher = createDecipher(
            algorithm,
            key
        );
    }
    const part = decipher.update(data.content).toString("utf8");
    return part + decipher.final("utf8");
};
