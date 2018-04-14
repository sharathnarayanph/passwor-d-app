pragma solidity ^0.4.2;

contract ContentLocator {
    mapping(address => address[]) private locator;

    address[] private locations;

    function ContentLocator(address[] locs) public {
        addLocations(locs);
    }  

    function addLocations(address[] locs) private {
        //Copy the input ContentStores to the locations list

        for (uint i = 0; i < locs.length; i++) {
            if(locs[i]!=address(0)) {
                locations.push(locs[i]);
            }
        }
    }

    function shardContent(address user, bytes32 content) returns (bool) {
        //Shard the content to multiple smart contracts

        bytes8[4] memory shards = [bytes8(0), 0];
        assembly {
            mstore(shards, content)
            mstore(add(shards, 8), content)
            mstore(add(shards, 16), content)
            mstore(add(shards, 24), content)
        }
    }
}