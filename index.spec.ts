import {decrypt} from "./lib/decrypt.function";
import {encrypt} from "./lib/encrypt.function";

describe("secret", () => {
    it("should return the initial input when passing encrypt to decrytp", async () => {
        // GIVEN
        const key = "C9HikSYQW/K+ZvRphxEuSw==";
        const input = "Can you keep a secret?";

        // WHEN
        const encrypted = await encrypt(input, key);
        const output = await decrypt(encrypted, key);

        // THEN
        expect(output).toBe(input);
    });
});