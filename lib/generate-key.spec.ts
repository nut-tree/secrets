import {Algorithm} from "./algorithm.enum";
import {generateKey, getKeyLength} from "./generate-key";

describe("getKeyLength", () => {
    it("should return 16 byte for AES128CBC", () => {
        // GIVEN
        const algorithm = Algorithm.AES128CBC;

        // WHEN

        // THEN
        expect(getKeyLength(algorithm)).toEqual({keyLength: 16});
    });

    it("should 32 byte for AES256CBC", () => {
        // GIVEN
        const algorithm = Algorithm.AES256CBC;

        // WHEN

        // THEN
        expect(getKeyLength(algorithm)).toEqual({keyLength: 32});
    });

    it("should return 16 byte for AES128ECB", () => {
        // GIVEN
        const algorithm = Algorithm.AES128ECB;

        // WHEN

        // THEN
        expect(getKeyLength(algorithm)).toEqual({keyLength: 16});
    });

    it("should 32 byte for AES256ECB", () => {
        // GIVEN
        const algorithm = Algorithm.AES256ECB;

        // WHEN

        // THEN
        expect(getKeyLength(algorithm)).toEqual({keyLength: 32});
    });
});

describe("generateKey", () => {
    it("should return a 16 byte random key for AES128CBC", async () => {
        // GIVEN
        const algorithm = Algorithm.AES128CBC;

        // WHEN
        const key = await generateKey(algorithm);
        const keyBuffer = Buffer.from(key, "base64");

        // THEN
        expect(keyBuffer.length).toBe(16);
    });

    it("should return a 32 byte random key for AES256CBC", async () => {
        // GIVEN
        const algorithm = Algorithm.AES256CBC;

        // WHEN
        const key = await generateKey(algorithm);
        const keyBuffer = Buffer.from(key, "base64");

        // THEN
        expect(keyBuffer.length).toBe(32);
    });

    it("should return a 16 byte random key for AES128ECB", async () => {
        // GIVEN
        const algorithm = Algorithm.AES128ECB;

        // WHEN
        const key = await generateKey(algorithm);
        const keyBuffer = Buffer.from(key, "base64");

        // THEN
        expect(keyBuffer.length).toBe(16);
    });

    it("should return a 32 byte random key for AES256ECB", async () => {
        // GIVEN
        const algorithm = Algorithm.AES256ECB;

        // WHEN
        const key = await generateKey(algorithm);
        const keyBuffer = Buffer.from(key, "base64");

        // THEN
        expect(keyBuffer.length).toBe(32);
    });
});
