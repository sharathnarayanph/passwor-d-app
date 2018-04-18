pragma solidity ^0.4.2;

contract ContentStore {
    mapping (address => bytes8) private store;
    mapping (bytes32 => bytes32) private stringTest;

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

    function setTest(bytes32 key, bytes32 value) public payable returns(bool) {
        stringTest[key] = value;
    }

    function getTest(bytes32 key) public view returns(bytes32) {
        return stringTest[key];
    }

    // function setTest(int key) public payable returns(bool) {
    //     storeTest = key;
    // }

    // function getTest() public view returns(int) {
    //     return 99;
    // }

    function() public payable {

    }
}