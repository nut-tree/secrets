import {Algorithm} from "./algorithm.const";
import {getAlgorithm} from "./get-algorithm.function";

describe("get-algorithm", () => {
    it("should return aes-128-cbc for 16 bytes keylength", () => {
        // GIVEN
        const base64Key = "MTIzNDU2Nzg5MTAxMTEyCg==";

        // WHEN
        const result = getAlgorithm(base64Key);

        // THEN
        expect(result.cipher).toBe(Algorithm.AES128CBC);
    });

    it("should return aes-256-cbc for 32 bytes keylength", () => {
        // GIVEN
        const base64Key = "MTIzNDU2Nzg5MTAxMTEyMTEyMzQ1Njc4OTEwMTExMgo=";

        // WHEN
        const result = getAlgorithm(base64Key);

        // THEN
        expect(result.cipher).toBe(Algorithm.AES256CBC);
    });
});
