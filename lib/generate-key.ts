import {Algorithm} from "./algorithm.enum";
import {generateRandom} from "./random.function";

export const getKeyLength = (algorithm: Algorithm): { keyLength: number } => {
    switch (algorithm) {
        case Algorithm.AES128CBC:
        case Algorithm.AES128ECB:
            return ({
                keyLength: 16,
            });
        case Algorithm.AES256CBC:
        case Algorithm.AES256ECB:
            return ({
                keyLength: 32,
            });
    }
    throw new Error("Not (yet) supported algorithm: " + algorithm);
};

export const generateKey = async (algorithm: Algorithm): Promise<string> => {
    const keyLength = getKeyLength(algorithm);

    const randomKey = await generateRandom({byteLength: keyLength.keyLength});
    return randomKey.toString("base64");
};
