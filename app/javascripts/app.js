import "../stylesheets/app.css";

import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract';
import * as helper from './helper.js';
import * as admin from './admin.js';
import * as dapp from './dapp.js';

window.App = {
  start: function() {
    dapp.initApp();
  },
  login: function() {
    dapp.login();
  },
  showSignIn: function() {
    dapp.showSignIn();
  },
  showSignUp: function() {
    dapp.showSignUp();
  },
  signUp: function() {
    dapp.signUp();
  },
  addRow: function() {
    dapp.addRow();
  },
  removeRow: function(row) {
    dapp.removeRow(row);
  },
  save: function() {
    dapp.save();
  }
};

window.Admin = {
  deployContract: function() {
    admin.deployContract();
  },
  addLocatorLocations: function() {
    admin.addLocatorLocations();
  },
  getLocationsCount: function() {
    admin.getLocationsCount();
  },
  sendEther: function() {
    admin.sendEther();
  },
  shardData: function() {
    admin.shardData();
  },
  testFunction: function() {
    admin.setPassword();
  },
  setLocatorTest: function() {
    admin.setLocatorTest();
  },
  getStoreTest: function() {
    admin.getStoreTest();
  },
  locatorShardContent: function() {
    admin.locatorShardContent();
  },
  storeGetData: function() {
    admin.storeGetData();
  },
  locatorGetData: function() {
    admin.locatorGetData();
  },
  getLocatorUserKeyLength: function() {
    admin.getLocatorUserKeyLength();
  }
};

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } 
  else {
    console.warn("No web3 detected. Falling back to http://127.0.0.1:8545");
    // Use port of local Geth Node
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
  }

  App.start();
});
