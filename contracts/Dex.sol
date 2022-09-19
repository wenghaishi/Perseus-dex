// SPDX-License-Identifier: MIT

pragma solidity ^0.8.14;

contract Dex {
    string public TokenName;
    uint256 public TokenId;
    mapping(address => uint256) balances;
    mapping(address => mapping (address => uint256)) allowed;

    function swapToken(uint256 _tokenId, uint256 _tokenAmount) public payable {
        require(msg.value = _tokenAmount, "wrong amount");

    }

}