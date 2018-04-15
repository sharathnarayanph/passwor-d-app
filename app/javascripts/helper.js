//import { default as web3} from 'web3';
//import { default as contract } from 'truffle-contract';

var abiFactory;
var addr;

export function createContractInstance() {
    var abi = JSON.parse(abiFactory);
    
    var contract = web3.eth.contract(abi);

    var instance = contract.at(addr);

    return instance;
}

export function deployContract(abiDefinition, byteCode, gas) {
    var abi = JSON.parse(abiDefinition);

    var contract = web3.eth.contract(abi);

    var params = {
        from: web3.eth.coinbase,
        data: byteCode,
        gas: gas
    }

    contract.new(params, function(error, result) {
        if(error) {
            console.log("Contract deployment error");
        }
        else {
            if(result.address) {
                console.log("Contract deployed: " + result.address);
            }
        }
    });
}

