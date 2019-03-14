import {encrypt} from "./encrypt.function";

describe("secret", () => {
    it("should return encrypted input", async () => {
        // GIVEN
        const key = "C9HikSYQW/K+ZvRphxEuSw==";
        const input = "Can you keep a secret?";

        // WHEN

        // THEN
        await expect(() => encrypt(input, key)).not.toThrow();
    });
});
