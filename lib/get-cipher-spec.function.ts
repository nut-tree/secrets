import {Algorithm} from "./algorithm.enum";

export interface CipherSpec {
    blockSize: number;
}

export const getCipherSpec = (algorithm: Algorithm): CipherSpec => {
    switch (algorithm) {
        case Algorithm.AES128ECB:
        case Algorithm.AES256ECB:
            return ({
                blockSize: 0,
            });
        case Algorithm.AES128CBC:
            return ({
                blockSize: 16,
            });
        case Algorithm.AES256CBC:
            return ({
                blockSize: 16,
            });
    }
    throw new Error(`Invalid algorithm: ${algorithm}`);
};
