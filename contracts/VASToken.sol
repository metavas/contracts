// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VASToken is ERC20 {

    uint256 private _totalSupply;
    uint8 private _decimals;

    constructor() ERC20("MetaVas", "VAS") {
        _decimals = 18;
        _totalSupply = 1000000000 * 10 ** _decimals;
        _mint(msg.sender, _totalSupply);
    }
}