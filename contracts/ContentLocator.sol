pragma solidity ^0.4.2;

contract ContentLocator {
    mapping(address => address[]) private locator;

    address[] private locations;

    // function ContentLocator(address[] locs) public {
    //     addLocations(locs);
    // }  

    function addLocations(address[] locs) public {
        //Copy the input ContentStores to the locations list

        for (uint i = 0; i < locs.length; i++) {
            if(locs[i]!=address(0)) {
                locations.push(locs[i]);
            }
        }
    }

    function shardContent(address user, bytes32 content) public returns (bool) {
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
}

contract ContentStore {
    function saveData(address user, bytes8 shard) public returns(bool);
    function getData(address user) public view returns(bytes8);
}