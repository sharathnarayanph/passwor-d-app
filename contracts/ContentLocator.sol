pragma solidity ^0.4.2;

import "./ContentStore.sol";

contract ContentLocator {
    struct KeyAddress {
        bytes32[] keys;
        address[] keyLocations;
    }

    mapping(address => KeyAddress) private locator;

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

    function shardContent(bytes32[] keys, bytes32[] values)
    public
    payable
    returns (bool) {
        //Shard the content to multiple smart contracts
        
        uint rand = 0;

        for(uint i = 0; i < keys.length; i++) {
            locator[msg.sender].keys.push(keys[i]);
            locator[msg.sender].keyLocations.push(locations[rand]);

            ContentStore store = ContentStore(locations[rand]);
            store.saveData(msg.sender, keys[i], values[i]);

            if(++rand >= locations.length) {
                rand = 0;
            }
        }

        return true;
    }

    function getData()
    public
    view
    returns(bytes32[100] keys, bytes32[100] values) {
        //Gather the shards and return content
        
        require(locator[msg.sender].keys.length != 0);

        for(uint i = 0; i < locator[msg.sender].keys.length; i++) {
            keys[i] = locator[msg.sender].keys[i];

            ContentStore store = ContentStore(locator[msg.sender].keyLocations[i]);
            values[i] = store.getData(msg.sender, keys[i]);
        }
    }


    function getLocationsCount() public view returns(uint) {
        return locations.length;
    }

    // function setPassword(bytes32 key, bytes32 value) public payable returns(bool) {
    //     ContentStore store = ContentStore(locations[0]);
    //     store.setTest(key, value);
    //     return true;
    // }

    function() public payable {

    }
}
