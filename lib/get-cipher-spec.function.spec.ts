import {Algorithm} from "./algorithm.enum";
import {getCipherSpec} from "./get-cipher-spec.function";

describe("getCipherSpec", () => {
    it("should return 16 bytes blocksize for AES128CBC", () => {
        // GIVEN

        // WHEN
        const result = getCipherSpec(Algorithm.AES128CBC);

        // THEN
        expect(result.blockSize).toBe(16);
    });

    it("should return 16 bytes blocksize for AES256CBC", () => {
        // GIVEN

        // WHEN
        const result = getCipherSpec(Algorithm.AES256CBC);

        // THEN
        expect(result.blockSize).toBe(16);
    });

    it("should return 16 bytes blocksize for AES128ECB", () => {
        // GIVEN

        // WHEN
        const result = getCipherSpec(Algorithm.AES128ECB);

        // THEN
        expect(result.blockSize).toBe(0);
    });

    it("should return 16 bytes blocksize for AES256ECB", () => {
        // GIVEN

        // WHEN
        const result = getCipherSpec(Algorithm.AES256ECB);

        // THEN
        expect(result.blockSize).toBe(0);
    });
});
