// SPDX-License-Identifier: MIT

pragma solidity ^0.8.14;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract PerseusToken is ERC20Capped, ERC20Burnable {
    address payable public owner;
    uint256 public blockReward;

    constructor(uint256 cap, uint256 reward) ERC20("PerseusToken", "PER") ERC20Capped(cap*(10** decimals())) {
        owner = payable(msg.sender);
        _mint(owner, 10000000 * (10 ** decimals()));
        blockReward = reward * (10 **decimals());
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Only the owner can call this function");
    }

    function setBlockReward(uint256 _blockReward) public onlyOwner {
        blockReward = _blockReward * (10 ** decimals());
    }

    function mintMinerReward() internal {
        _mint(block.coinbase, blockReward);
    }
}