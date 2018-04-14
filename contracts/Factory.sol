pragma solidity ^0.4.2;

import "./common/Killable.sol";

contract Factory is Killable {
    struct User {
        bytes32 name;
        bytes32 email;
        bytes32 password;
    }

    mapping (address => User) private users;

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
}
