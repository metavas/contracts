const hre = require("hardhat");

async function main() {

    const DAO = await hre.ethers.getContractFactory("MetaVasDao");
    const dao = await DAO.deploy();
    await dao.deployed();
    console.log("MetaVas Dao deployed to:", dao.address);

}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
