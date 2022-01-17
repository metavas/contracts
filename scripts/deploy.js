const hre = require("hardhat");
const IPFS_URL = process.env.IPFS_URL;

async function main() {

    const NFTMarketPlace = await hre.ethers.getContractFactory("NFTMarketPlace");
    await NFTMarketPlace.deployed();
    console.log("MetaVas NFT Marketplace successfully deployed:", nft.address);

}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
