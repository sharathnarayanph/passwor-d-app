pragma solidity ^0.4.2;

contract ContentStore {
    mapping (address => bytes8) private store;
    mapping (string => string) private stringTest;

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

    function setTest(string key, string value) public payable returns(bool) {
        stringTest[key] = value;
    }

    function getTest(string key) public view returns(string) {
        return stringTest[key];
    }

    function() public payable {

    }
}