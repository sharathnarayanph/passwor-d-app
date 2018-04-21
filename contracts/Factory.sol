pragma solidity ^0.4.2;

import "./common/Killable.sol";
import "./ContentLocator.sol";

contract Factory is Killable {
    struct User {
        bytes32 name;
        bytes32 email;
        bytes32 password;
        address location;
    }

    mapping (address => User) private users;
    address[] private locations;

    modifier validCreds(bytes32 name, bytes32 email, bytes32 password) {
        // Must be valid credentials

        require(!(name == 0x0));
        require(!(email == 0x0));
        require(!(password == 0x0));
        _;
    }

    modifier onlyExistingUser {
        // Check if user exists or terminate

        require(!(users[msg.sender].name == 0x0));
        _;
    }

    function signUp(bytes32 name, bytes32 email, bytes32 password)
    public
    payable
    validCreds(name, email, password)
    returns (bytes32) {
        //Add users name to the hash map

        require(users[msg.sender].name == 0x0);

        users[msg.sender].name = name;
        users[msg.sender].password = password;
        users[msg.sender].email = email;

        //Pick a random location for managing this user
        users[msg.sender].location = locations[0];

        return (users[msg.sender].name);        
    }

    function update(bytes32 name, bytes32 email, bytes32 password)
    public
    payable
    validCreds(name, email, password)
    onlyExistingUser
    returns (bytes32) {
        // Update user credentials

        if (users[msg.sender].name != 0x0) {
            users[msg.sender].name = name;
        }

        if (users[msg.sender].email != 0x0) {
            users[msg.sender].email = email;
        }

        if (users[msg.sender].password != 0x0) {
            users[msg.sender].password = password;
        }
    }

    function login(bytes32 password) constant
    public
    returns (bytes32) {

        return (users[msg.sender].name);
    }

    function savePassword(bytes32[1000] keys, bytes32[1000] values, uint keyCount) 
    public
    onlyExistingUser 
    returns (bool) {
        ContentLocator locator = ContentLocator(users[msg.sender].location);
        locator.shardContent(keys, values, keyCount);
        return true;
    }

    function addLocations(address[] locs) public {
        //Copy the input ContentStores to the locations list

        for (uint i = 0; i < locs.length; i++) {
            if(locs[i]!=address(0)) {
                locations.push(locs[i]);
            }
        }
    }

    //Fallback function for loading with ether
    function() public payable {

    }
}
