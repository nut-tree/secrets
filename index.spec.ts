import {Algorithm, secret} from "./index";

describe("AES/CBC with IV", () => {
    it("should return the initial input when passing encrypt to decrypt", async () => {
        // GIVEN
        const key = "C9HikSYQW/K+ZvRphxEuSw==";
        const input = "Can you keep a secret?";

        // WHEN
        const encrypted = await secret.encrypt(input, key, Algorithm.AES128CBC);
        const output = await secret.decrypt(encrypted, key, Algorithm.AES128CBC);

        // THEN
        expect(output).toBe(input);
    });

    it("should return the initial input when passing encrypt to decrypt with generated key for AES128CBC", async () => {
        // GIVEN
        const key = await secret.generateKey(Algorithm.AES128CBC);
        const input = "Can you keep a secret?";

        // WHEN
        const encrypted = await secret.encrypt(input, key, Algorithm.AES128CBC);
        const output = await secret.decrypt(encrypted, key, Algorithm.AES128CBC);

        // THEN
        expect(output).toBe(input);
    });

    it("should return the initial input when passing encrypt to decrypt with generated key for AES256CBC", async () => {
        // GIVEN
        const key = await secret.generateKey(Algorithm.AES256CBC);
        const input = "Can you keep a secret?";

        // WHEN
        const encrypted = await secret.encrypt(input, key, Algorithm.AES256CBC);
        const output = await secret.decrypt(encrypted, key, Algorithm.AES256CBC);

        // THEN
        expect(output).toBe(input);
    });
});

describe("AES/CBC without IV", () => {
    it("should return the initial input when passing encrypt to decrypt", async () => {
        // GIVEN
        const key = "C9HikSYQW/K+ZvRphxEuSw==";
        const input = "Can you keep a secret?";

        // WHEN
        const encrypted = await secret.encrypt(input, key, Algorithm.AES128CBC, false);
        const output = await secret.decrypt(encrypted, key, Algorithm.AES128CBC, false);

        // THEN
        expect(output).toBe(input);
    });

    it("should return the initial input when passing encrypt to decrypt with generated key for AES128CBC", async () => {
        // GIVEN
        const key = await secret.generateKey(Algorithm.AES128CBC);
        const input = "Can you keep a secret?";

        // WHEN
        const encrypted = await secret.encrypt(input, key, Algorithm.AES128CBC, false);
        const output = await secret.decrypt(encrypted, key, Algorithm.AES128CBC, false);

        // THEN
        expect(output).toBe(input);
    });

    it("should return the initial input when passing encrypt to decrypt with generated key for AES256CBC", async () => {
        // GIVEN
        const key = await secret.generateKey(Algorithm.AES256CBC);
        const input = "Can you keep a secret?";

        // WHEN
        const encrypted = await secret.encrypt(input, key, Algorithm.AES256CBC, false);
        const output = await secret.decrypt(encrypted, key, Algorithm.AES256CBC, false);

        // THEN
        expect(output).toBe(input);
    });
});

describe("AES/ECB with IV", () => {
    it("should return the initial input when passing encrypt to decrypt", async () => {
        // GIVEN
        const key = "C9HikSYQW/K+ZvRphxEuSw==";
        const input = "Can you keep a secret?";

        // WHEN
        const encrypted = await secret.encrypt(input, key, Algorithm.AES128ECB);
        const output = await secret.decrypt(encrypted, key, Algorithm.AES128ECB);

        // THEN
        expect(output).toBe(input);
    });

    it("should return the initial input when passing encrypt to decrypt with generated key for AES128ECB", async () => {
        // GIVEN
        const key = await secret.generateKey(Algorithm.AES128ECB);
        const input = "Can you keep a secret?";

        // WHEN
        const encrypted = await secret.encrypt(input, key, Algorithm.AES128ECB);
        const output = await secret.decrypt(encrypted, key, Algorithm.AES128ECB);

        // THEN
        expect(output).toBe(input);
    });

    it("should return the initial input when passing encrypt to decrypt with generated key for AES256ECB", async () => {
        // GIVEN
        const key = await secret.generateKey(Algorithm.AES256ECB);
        const input = "Can you keep a secret?";

        // WHEN
        const encrypted = await secret.encrypt(input, key, Algorithm.AES256ECB);
        const output = await secret.decrypt(encrypted, key, Algorithm.AES256ECB);

        // THEN
        expect(output).toBe(input);
    });
});

describe("AES/ECB without IV", () => {
    it("should return the initial input when passing encrypt to decrypt", async () => {
        // GIVEN
        const key = "C9HikSYQW/K+ZvRphxEuSw==";
        const input = "Can you keep a secret?";

        // WHEN
        const encrypted = await secret.encrypt(input, key, Algorithm.AES128ECB, false);
        const output = await secret.decrypt(encrypted, key, Algorithm.AES128ECB, false);

        // THEN
        expect(output).toBe(input);
    });

    it("should return the initial input when passing encrypt to decrypt with generated key for AES128ECB", async () => {
        // GIVEN
        const key = await secret.generateKey(Algorithm.AES128ECB);
        const input = "Can you keep a secret?";

        // WHEN
        const encrypted = await secret.encrypt(input, key, Algorithm.AES128ECB, false);
        const output = await secret.decrypt(encrypted, key, Algorithm.AES128ECB, false);

        // THEN
        expect(output).toBe(input);
    });

    it("should return the initial input when passing encrypt to decrypt with generated key for AES256ECB", async () => {
        // GIVEN
        const key = await secret.generateKey(Algorithm.AES256ECB);
        const input = "Can you keep a secret?";

        // WHEN
        const encrypted = await secret.encrypt(input, key, Algorithm.AES256ECB, false);
        const output = await secret.decrypt(encrypted, key, Algorithm.AES256ECB, false);

        // THEN
        expect(output).toBe(input);
    });
});
