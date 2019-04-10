import {Algorithm} from "./algorithm.enum";
import {encrypt} from "./encrypt.function";

describe("secret", () => {
    it("should return encrypted input", async () => {
        // GIVEN
        const key = "C9HikSYQW/K+ZvRphxEuSw==";
        const input = "Can you keep a secret?";

        // WHEN

        // THEN
        await expect(() => encrypt(input, key, Algorithm.AES128CBC)).not.toThrow();
    });
});

describe("AES/ECB", () => {
    it("should return the correct value for key 'x'", async () => {
        // GIVEN
        const keyBuffer = Buffer.alloc(16);
        Buffer.from("x").copy(keyBuffer);
        const key = keyBuffer.toString("base64");
        const input = "Secret text to encrypt";

        // WHEN
        const encrypted = await encrypt(input, key, Algorithm.AES128ECB);

        // THEN
        expect(encrypted).toBe("dGxoOqphwaGflpwEstig7SjWzofc65ZJeK7wmTEaeOQ=");
    });

    it("should return the correct value for key 'encryptor_secret_key'", async () => {
        // GIVEN
        const keyBuffer = Buffer.alloc(16);
        Buffer.from("encryptor_secret_key").copy(keyBuffer);
        const key = keyBuffer.toString("base64");
        const input = "Secret text to encrypt";

        // WHEN
        const encrypted = await encrypt(input, key, Algorithm.AES128ECB);

        // THEN
        expect(encrypted).toBe("NCC64tvdrOdDJRTAIWOYEz9o2KqukmdFC3eaa7lfqMc=");
    });
});
