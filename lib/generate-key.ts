import {Algorithm} from "./algorithm.const";
import {generateRandom} from "./random.function";

export const getKeyLength = (algorithm: string): { keyLength: number } => {
    switch (algorithm) {
        case Algorithm.AES128CBC:
            return ({
                keyLength: 16,
            });
        case Algorithm.AES256CBC:
            return ({
                keyLength: 32,
            });
    }
    throw new Error("Not (yet) supported algorithm: " + algorithm);
};

export const generateKey = async (algorithm: string): Promise<string> => {
    const keyLength = getKeyLength(algorithm);

    const randomKey = await generateRandom({byteLength: keyLength.keyLength});
    return randomKey.toString("base64");
};
