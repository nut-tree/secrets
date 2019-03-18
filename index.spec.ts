import {Algorithm} from "./lib/algorithm.const";
import {decrypt} from "./lib/decrypt.function";
import {encrypt} from "./lib/encrypt.function";
import {generateKey} from "./lib/generate-key";

describe("secret", () => {
    it("should return the initial input when passing encrypt to decrypt", async () => {
        // GIVEN
        const key = "C9HikSYQW/K+ZvRphxEuSw==";
        const input = "Can you keep a secret?";

        // WHEN
        const encrypted = await encrypt(input, key);
        const output = await decrypt(encrypted, key);

        // THEN
        expect(output).toBe(input);
    });

    it("should return the initial input when passing encrypt to decrypt with generated key for AES128CBC", async () => {
        // GIVEN
        const key = await generateKey(Algorithm.AES128CBC);
        const input = "Can you keep a secret?";

        // WHEN
        const encrypted = await encrypt(input, key);
        const output = await decrypt(encrypted, key);

        // THEN
        expect(output).toBe(input);
    });

    it("should return the initial input when passing encrypt to decrypt with generated key for AES256CBC", async () => {
        // GIVEN
        const key = await generateKey(Algorithm.AES256CBC);
        const input = "Can you keep a secret?";

        // WHEN
        const encrypted = await encrypt(input, key);
        const output = await decrypt(encrypted, key);

        // THEN
        expect(output).toBe(input);
    });
});
