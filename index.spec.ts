import {secret} from "./index";
import {Algorithm} from "./lib/algorithm.const";

describe("secret", () => {
    it("should return the initial input when passing encrypt to decrypt", async () => {
        // GIVEN
        const key = "C9HikSYQW/K+ZvRphxEuSw==";
        const input = "Can you keep a secret?";

        // WHEN
        const encrypted = await secret.encrypt(input, key);
        const output = await secret.decrypt(encrypted, key);

        // THEN
        expect(output).toBe(input);
    });

    it("should return the initial input when passing encrypt to decrypt with generated key for AES128CBC", async () => {
        // GIVEN
        const key = await secret.generateKey(Algorithm.AES128CBC);
        const input = "Can you keep a secret?";

        // WHEN
        const encrypted = await secret.encrypt(input, key);
        const output = await secret.decrypt(encrypted, key);

        // THEN
        expect(output).toBe(input);
    });

    it("should return the initial input when passing encrypt to decrypt with generated key for AES256CBC", async () => {
        // GIVEN
        const key = await secret.generateKey(Algorithm.AES256CBC);
        const input = "Can you keep a secret?";

        // WHEN
        const encrypted = await secret.encrypt(input, key);
        const output = await secret.decrypt(encrypted, key);

        // THEN
        expect(output).toBe(input);
    });
});
