// import { default as web3} from 'web3';
// import { default as contract } from 'truffle-contract';
import * as helper from './helper.js';

export function adminTest() {
    //var contract = helper.createContractInstance();
    //deployContract();
    //deployContract();
    addLocatorLocations();
}

export function deployContract() {
    var byteCode = document.getElementById('bytecode').value;
    var abiDef = document.getElementById('abidefinition').value;
    var gas = 1000000;
    
    helper.deployContract(abiDef, byteCode, gas);
}

export function createContractInstance() {
    var abiDef = document.getElementById('abidefinition').value;
    var address = document.getElementById('contractaddress').value;

    return helper.createContractInstance(abiDef, address);
}

export function shardData() {
    var instance = createContractInstance();
    var content;
    var user = web3.eth.coinbase;

    instance.shardContent(user, content, function(error, result) {
        if(!error) {
            console.warn(result);
        }    
        else {
            console.log(error);
        }
    });
}

export function addLocatorLocations() {
    var instance = createContractInstance();
    var address = document.getElementById('contractaddress').value;
    var addressList = address.split(',');

    instance.addLocations(addressList, function(error, result) {
        if(!error) {
            console.warn("Success");
        }
        else {
            console.log("Error");
        }
    });
}

