pragma solidity ^0.4.2;

contract ContentStore {
    mapping (address => bytes8) private store;

    function saveData(address user, bytes8 shard)
    public
    payable
    returns(bool) {
        //Save the shard data to the correspoding user's record

        store[user] = shard;
        return true;
    }

    function getData(address user) public view returns(bytes8) {
        require(store[user] != 0x0);
        return store[user];
    }

    function() public payable {

    }
}