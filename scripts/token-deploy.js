const hre = require("hardhat");

async function main() {

    const MetaVasToken = await hre.ethers.getContractFactory("MetaVasToken");
    await MetaVasToken.deployed();
    console.log("MetaVas Token successfully deployed:", MetaVasToken.address);

}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
