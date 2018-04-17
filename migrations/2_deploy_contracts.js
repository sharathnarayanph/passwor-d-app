var Ownable = artifacts.require("./common/Ownable.sol");
var Killable = artifacts.require("./common/Killable.sol");
var Factory = artifacts.require("./Factory.sol");
var ContentLocator = artifacts.require("./ContentLocator.sol");
var ContentStore = artifacts.require("./ContentStore.sol");

module.exports = function(deployer) {
  deployer.deploy(Ownable);
  deployer.link(Ownable, Killable);
  deployer.deploy(Killable);
  deployer.link(Killable, Factory);
  deployer.deploy(Factory);
  deployer.deploy(ContentStore);
  deployer.link(ContentStore, ContentLocator);
  deployer.deploy(ContentLocator);
};
