const hre = require("hardhat");
const IPFS_URL = process.env.IPFS_URL;

async function main() {

    const NFT = await hre.ethers.getContractFactory("Ape_Of_Lagos");
    const nft = await NFT.deploy("Ape of Lagos", "AOL", IPFS_URL);
    await nft.deployed();
    console.log("Ape of Lagos nft deployed to:", nft.address);

}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
