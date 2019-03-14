import {generateRandom} from "./random.function";

describe("generateIV", () => {
    it("should generate random output with specified byte length", async () => {
        // GIVEN
        const byteLength = 16;

        // WHEN
        const iv = await generateRandom({byteLength});

        // THEN
        expect(iv.length).toBe(byteLength);
    });
});
