pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Factory.sol";

contract TestFactory {

    function testUserExists() {
        Factory factory = Factory(DeployedAddresses.Factory());

        string expected = "Name";

        Assert.equal(factory.signUp("Name", "Email", "Password"), expected, 
            "The user account is created and the user name is returned as result");
    }
}
