pragma solidity ^0.4.2;

import "./ContentStore.sol";

contract ContentLocator {
    mapping(address => address[]) private locator;

    address[] private locations;

    function addLocations(address[] locs)
    public 
    payable
    returns(bool) {
        //Copy the input ContentStores to the locations list

        for (uint i = 0; i < locs.length; i++) {
            if(locs[i]!=address(0)) {
                locations.push(locs[i]);
            }
        }

        return true;
    }

    function shardContent(address user, bytes32 content)
    public
    payable
    returns (bool) {
        //Shard the content to multiple smart contracts

        bytes8[4] memory shards = [bytes8(0), 0, 0, 0];
        assembly {
            mstore(shards, content)
            mstore(add(shards, 8), content)
            mstore(add(shards, 16), content)
            mstore(add(shards, 24), content)
        }

        require(locator[user][0] != 0x0);

        address[] memory targets = locator[user];

        for (uint i = 0; i < 4; i++) {
            ContentStore store = ContentStore(targets[i]);
            store.saveData(user, shards[i]);
        }

        return true;
    }


    function getLocationsCount() public view returns(uint) {
        return locations.length;
    }

    function setPassword(bytes32 key, bytes32 value) public payable returns(bool) {
        ContentStore store = ContentStore(locations[0]);
        store.setTest(key, value);
        return true;
    }

    // function setPassword(int key) public payable returns(int) {
    //     ContentStore store = ContentStore(locations[0]);
    //     //store.setTest(key);
    //     return store.getTest();
    // }

    function() public payable {

    }
}

// contract IContentStore {
//     function saveData(address user, bytes8 shard) public returns(bool);
//     function getData(address user) public view returns(bytes8);
//     function setTest(int key) public payable returns(bool);
//     function getTest() public view returns(int);
// }