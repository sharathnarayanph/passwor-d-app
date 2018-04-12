var Ownable = artifacts.require("./common/Ownable.sol");
var Killable = artifacts.require("./common/Killable.sol");
var Killable = artifacts.require("./Factory.sol");

module.exports = function(deployer) {
  deployer.deploy(Ownable);
  deployer.link(Ownable, Killable);
  deployer.deploy(Killable);
  deployer.link(Killable, Factory);
  deployer.deploy(Factory);
};
