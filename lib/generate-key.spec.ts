import {Algorithm} from "./algorithm.const";
import {generateKey, getKeyLength} from "./generate-key";

describe("getKeyLength", () => {
    it("should return 16 byte for AES128", () => {
        // GIVEN
        const algorithm = Algorithm.AES128CBC;

        // WHEN

        // THEN
        expect(getKeyLength(algorithm)).toEqual({keyLength: 16});
    });

    it("should 32 byte for AES256", () => {
        // GIVEN
        const algorithm = Algorithm.AES256CBC;

        // WHEN

        // THEN
        expect(getKeyLength(algorithm)).toEqual({keyLength: 32});
    });
});

describe("generateKey", () => {
    it("should return a 16 byte random key for AES128", async () => {
        // GIVEN
        const algorithm = Algorithm.AES128CBC;

        // WHEN
        const key = await generateKey(algorithm);
        const keyBuffer = Buffer.from(key, "base64");

        // THEN
        expect(keyBuffer.length).toBe(16);
    });

    it("should 32 byte for AES256", async () => {
        // GIVEN
        const algorithm = Algorithm.AES256CBC;

        // WHEN
        const key = await generateKey(algorithm);
        const keyBuffer = Buffer.from(key, "base64");

        // THEN
        expect(keyBuffer.length).toBe(32);
    });
});
