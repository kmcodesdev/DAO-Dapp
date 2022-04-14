import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xE3947F0cc42a886909f37e7036318e4e8eEd90A8");

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "crystal",
                description: "This NFT will give you access to Illuviun DAO!",
                image: readFileSync("scripts/assets/crystal.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();

