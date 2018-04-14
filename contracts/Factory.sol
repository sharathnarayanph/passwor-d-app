pragma solidity ^0.4.17;

import "./common/Killable.sol";

contract Factory is Killable {
    struct User {
        bytes32 name;
        bytes32 email;
        bytes32 password;
    }

    mapping (address => User) private users;

    modifier validName(bytes32 name) {
        // Must be a valid user address

        require(!(name == 0x0));
        _;
    }

    function signUp(bytes32 name, bytes32 email, bytes32 password)
    public
    payable
    validName(name)
    returns (bytes32) {
        //Add users name to the hash map

        require(users[msg.sender].name == 0x0);

        users[msg.sender].name = name;
        users[msg.sender].password = password;
        users[msg.sender].email = email;

        return (users[msg.sender].name);        
    }
}
