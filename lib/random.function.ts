import {randomBytes} from "crypto";

export const generateRandom = (params: { byteLength: number } = {
    byteLength: 16,
}): Promise<Buffer> => {
    return new Promise((resolve, reject) => {
        randomBytes(params.byteLength, (err, buffer) => {
            if (err) {
                reject(err);
            } else {
                resolve(buffer);
            }
        });
    });
};
