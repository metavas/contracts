const hre = require("hardhat");

async function main() {

    const MetaVasToken = await hre.ethers.getContractFactory("MetaVasToken");
    const metavas = await MetaVasToken.deploy();
    await metavas.deployed();
    console.log("MetaVas Token successfully deployed:", metavas.address);

}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
