import {Algorithm} from "./algorithm.enum";
import {decrypt} from "./decrypt.function";

describe("secret", () => {
    it("should return encrypted input", async () => {
        // GIVEN
        const key = "C9HikSYQW/K+ZvRphxEuSw==";
        const input = "LAe8iDYgcIu/TUFaRSeJibKRE7L0gV2Bd8QC976qRqgSQ+cvPoXG/dU+6aS5+tXC";
        const expected = "Can you keep a secret?";

        // THEN
        await expect(decrypt(input, key, Algorithm.AES128CBC)).resolves.toBe(expected);
    });

    it("should throw an error when IV size is invalid", async () => {
        // GIVEN
        const key = "C9HikSYQW/K+ZvRphxEuSw==";
        const input = "Zm9vCg==";

        // THEN
        await expect(decrypt(input, key, Algorithm.AES128CBC))
            .rejects.toThrowError("Invalid IV size. Size of 16 byte required.");
    });
});
