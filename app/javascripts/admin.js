// import { default as web3} from 'web3';
// import { default as contract } from 'truffle-contract';
import * as helper from './helper.js';

export function adminTest() {
    //var contract = helper.createContractInstance();
    deployContract();
}

function deployContract() {
    var byteCode = document.getElementById('bytecode').value;
    var abiDef = document.getElementById('abidefinition').value;
    var gas = 1000000;
    
    helper.deployContract(abiDef, byteCode, gas);
}