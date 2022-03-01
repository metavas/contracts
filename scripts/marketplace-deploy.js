const hre = require("hardhat");
const IPFS_URL = process.env.IPFS_URL;

async function main() {

    const NFTMarketPlace = await hre.ethers.getContractFactory("MetaVasMarketPlace");
    await NFTMarketPlace.deployed();
    console.log("MetaVas NFT Marketplace successfully deployed:", NFTMarketPlace.address);

}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
