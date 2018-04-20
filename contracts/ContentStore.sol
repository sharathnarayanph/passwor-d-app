pragma solidity ^0.4.2;

contract ContentStore {
    mapping(address => mapping(bytes32 => bytes32)) private store;

    function saveData(address user, bytes32 key, bytes32 value)
    public
    payable
    returns(bool) {
        //Save the shard data to the correspoding user's record

        store[user][key] = value;
        return true;
    }

    function getData(address user, bytes32 key) public view returns(bytes32) {

        require(store[user][key] != bytes32(0));
        
        return store[user][key];
    }

    function() public payable {

    }
}