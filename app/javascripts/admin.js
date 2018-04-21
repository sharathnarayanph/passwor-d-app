import * as helper from './helper.js';

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
    var content = document.getElementById('contractaddress').value;
    var user = web3.eth.coinbase;

    var events = instance.allEvents({fromBlock: 0, toBlock: 'latest'});

    events.watch(function(error, result){
        if(!error) {
            console.warn(result);
        }
        else {
            console.log('Error');
        }
     });


    instance.shardContent.call(user, content, function(error, result) {
        if(!error) {
            console.warn(result);
        }    
        else {
            console.log(error);
        }
    });

    events.stopWatching();
}

export function addLocatorLocations() {
    var instance = createContractInstance();
    var address = document.getElementById('contractaddresslist').value;
    var addressList = address.split(',');
    var estimatedGas = 3000000;

    var txnObject = {
        from: web3.eth.coinbase,
        gas: estimatedGas
    }

    instance.addLocations.sendTransaction(addressList, txnObject, function(error, result) {
        if(!error) {
            console.warn("Success");
        }
        else {
            console.log("Error");
        }
    });
}

export function getLocationsCount() {
    var instance = createContractInstance();

    instance.getLocationsCount.call(function(error,result) {
        if(!error) {
            console.log(result);
        }
        else {
            console.log('Error');
        }
    });
}

export function setPassword() {
    var instance = createContractInstance();
    var password = 66;
    var estimatedGas = 3000000;

    // var txnObject = {
    //     from: web3.eth.coinbase,
    //     gas: estimatedGas
    // }

    instance.setPassword.call(password, function(error, result) {
        if(!error) {
            console.warn(result);
        }
        else {
            console.log("Error");
        }
    });
}

export function sendEther() {
    var address = document.getElementById('contractaddress').value;

    var txnObject = {
        from: web3.eth.coinbase,
        to: address,
        value: web3.toWei(5,'ether')
    }

    web3.eth.sendTransaction(txnObject, function(error, result) {
        if(!error) {
            console.warn('Success');
        }
        else {
            console.log('Error');
        }
    });
}

export function setLocatorTest() {
    var instance = createContractInstance();
    var key = "Sharath";
    var value = "Vegeta";
    var estimatedGas = 3000000;

    var txnObject = {
        from: web3.eth.coinbase,
        gas: estimatedGas
    }

    instance.setPassword.sendTransaction(key, value, txnObject, function(error, result) {
        if(!error) {
            console.warn(result);
        }
        else {
            console.log("Error");
        }
    });
}

export function getStoreTest() {
    var instance = createContractInstance();
    var key = "Vegeta";
    instance.getTest.call(key,function(error,result) {
        if(!error) {
            console.log(result);
        }
        else {
            console.log('Error');
        }
    });
}

export function locatorShardContent() {
    var instance = createContractInstance();
    var keys = ["Vegeta", "Piccolo", "Trunks"];
    var values = ["Password1", "Password2", "Password3"];
    var length = 3;
    var estimatedGas = 6654755;

    var txnObject = {
        from: web3.eth.coinbase,
        gas: estimatedGas
    }

    instance.shardContent.sendTransaction(keys, values, length, txnObject, function(error, result) {
        if(!error) {
            console.warn(result);
        }
        else {
            console.log("Error");
        }
    });
}

export function storeGetData() {
    var instance = createContractInstance();
    var key = "Vegeta";
    instance.getData.call(web3.eth.coinbase, key,function(error,result) {
        if(!error) {
            console.log(result);
        }
        else {
            console.log('Error');
        }
    });
}

export function locatorGetData() {
    var instance = createContractInstance();
    var estimatedGas = 6654755;

    // var txnObject = {
    //     from: web3.eth.coinbase,
    //     gas: estimatedGas
    // }

    instance.getData.call(function(error,result) {
        if(!error) {
            console.log(result);
        }
        else {
            console.log('Error');
        }
    });
}

export function getLocatorUserKeyLength() {
    var instance = createContractInstance();

    instance.getLocatorLength.call(function(error,result) {
        if(!error) {
            console.log(result);
        }
        else {
            console.log('Error');
        }
    });
}


