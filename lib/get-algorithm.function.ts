export const getAlgorithm = (keyBase64: string): { cipher: string, blockSize: number } => {
    const key = Buffer.from(keyBase64, "base64");
    switch (key.length) {
        case 16:
            return ({
                blockSize: 16,
                cipher: "aes-128-cbc",
            });
        case 32:
            return ({
                blockSize: 16,
                cipher: "aes-256-cbc",
            });
    }
    throw new Error("Invalid key length: " + key.length);
};
