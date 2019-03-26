import {Algorithm} from "./algorithm.enum";

export const getAlgorithm = (keyBase64: string): { cipher: string, blockSize: number } => {
    const key = Buffer.from(keyBase64, "base64");
    switch (key.length) {
        case 16:
            return ({
                blockSize: 16,
                cipher: Algorithm.AES128CBC,
            });
        case 32:
            return ({
                blockSize: 16,
                cipher: Algorithm.AES256CBC,
            });
    }
    throw new Error("Invalid key length: " + key.length);
};
