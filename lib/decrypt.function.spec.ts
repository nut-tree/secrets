import {decrypt} from "./decrypt.function";

describe("secret", () => {
    it("should return encrypted input", async () => {
        // GIVEN
        const key = "C9HikSYQW/K+ZvRphxEuSw==";
        const input = "LAe8iDYgcIu/TUFaRSeJibKRE7L0gV2Bd8QC976qRqgSQ+cvPoXG/dU+6aS5+tXC";
        const expected = "Can you keep a secret?";

        // WHEN
        const output = await decrypt(input, key);

        // THEN
        expect(output).toBe(expected);
    });
});
