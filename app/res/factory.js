export default {
    "contractName": "Factory",
    "abi": [
      {
        "constant": false,
        "inputs": [],
        "name": "kill",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "name",
            "type": "bytes32"
          },
          {
            "name": "email",
            "type": "bytes32"
          },
          {
            "name": "password",
            "type": "bytes32"
          }
        ],
        "name": "signUp",
        "outputs": [
          {
            "name": "",
            "type": "bytes32"
          }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "name",
            "type": "bytes32"
          },
          {
            "name": "email",
            "type": "bytes32"
          },
          {
            "name": "password",
            "type": "bytes32"
          }
        ],
        "name": "update",
        "outputs": [
          {
            "name": "",
            "type": "bytes32"
          }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "password",
            "type": "bytes32"
          }
        ],
        "name": "login",
        "outputs": [
          {
            "name": "",
            "type": "bytes32"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "keys",
            "type": "bytes32[1000]"
          },
          {
            "name": "values",
            "type": "bytes32[1000]"
          },
          {
            "name": "keyCount",
            "type": "uint256"
          }
        ],
        "name": "savePassword",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "getPassword",
        "outputs": [
          {
            "name": "keys",
            "type": "bytes32[1000]"
          },
          {
            "name": "values",
            "type": "bytes32[1000]"
          },
          {
            "name": "keyCount",
            "type": "uint256"
          }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "locs",
            "type": "address[]"
          }
        ],
        "name": "addLocations",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      }
    ],
    "bytecode": "0x6060604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610f48806100536000396000f300606060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632e008e601461009b5780633f0682121461013457806341c0e1b51461019b5780634ec0b53a146101b0578063879281c4146102025780638da5cb5b146102455780639c0d25251461029a578063cc8e2394146102ec578063f2fde38b1461036a575b005b34156100a657600080fd5b61011a60048080617d0001906103e88060200260405190810160405280929190826103e8602002808284378201915050505050919080617d0001906103e88060200260405190810160405280929190826103e8602002808284378201915050505050919080359060200190919050506103a3565b604051808215151515815260200191505060405180910390f35b610181600480803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091905050610558565b604051808215151515815260200191505060405180910390f35b34156101a657600080fd5b6101ae610648565b005b6101e460048080356000191690602001909190803560001916906020019091908035600019169060200190919050506106d9565b60405180826000191660001916815260200191505060405180910390f35b341561020d57600080fd5b610227600480803560001916906020019091905050610967565b60405180826000191660001916815260200191505060405180910390f35b341561025057600080fd5b610258610a0b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102ce6004808035600019169060200190919080356000191690602001909190803560001916906020019091905050610a30565b60405180826000191660001916815260200191505060405180910390f35b6102f4610cba565b60405180846103e860200280838360005b83811015610320578082015181840152602081019050610305565b50505050905001836103e860200280838360005b8381101561034f578082015181840152602081019050610334565b50505050905001828152602001935050505060405180910390f35b341561037557600080fd5b6103a1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610dce565b005b6000806000600102600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015460001916141515156103ff57600080fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff16639da94afb8686866040518463ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180846103e860200280838360005b838110156104da5780820151818401526020810190506104bf565b50505050905001836103e860200280838360005b838110156105095780820151818401526020810190506104ee565b505050509050018281526020019350505050602060405180830381600087803b151561053457600080fd5b5af1151561054157600080fd5b505050604051805190505060019150509392505050565b600080600090505b825181101561063e57600073ffffffffffffffffffffffffffffffffffffffff16838281518110151561058f57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1614151561063157600280548060010182816105ca9190610e9e565b9160005260206000209001600085848151811015156105e557fe5b90602001906020020151909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b8080600101915050610560565b6001915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156106d7576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b565b600083838360006001028360001916141515156106f557600080fd5b600060010282600019161415151561070c57600080fd5b600060010281600019161415151561072357600080fd5b6000600102600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546000191614151561077b57600080fd5b86600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001816000191690555084600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201816000191690555085600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181600019169055506002600081548110151561086c57fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015493505050509392505050565b60008160001916600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154600019161415156109c157600080fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008383836000600102836000191614151515610a4c57600080fd5b6000600102826000191614151515610a6357600080fd5b6000600102816000191614151515610a7a57600080fd5b6000600102600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546000191614151515610ad357600080fd5b6000600102600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015460001916141515610b725786600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000181600019169055505b6000600102600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015460001916141515610c115785600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181600019169055505b6000600102600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015460001916141515610cb05784600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020181600019169055505b5050509392505050565b610cc2610eca565b610cca610eca565b600080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff16633bc5de306040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040161fa2060405180830381600087803b1515610d9657600080fd5b5af11515610da357600080fd5b50505060405180617d000180617d000180519060200160405280945081955082965050505050909192565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610e9b57600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515610e9a57806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b815481835581811511610ec557818360005260206000209182019101610ec49190610ef7565b5b505050565b617d00604051908101604052806103e8905b6000801916815260200190600190039081610edc5790505090565b610f1991905b80821115610f15576000816000905550600101610efd565b5090565b905600a165627a7a72305820926595b0a2630f80367d8e0e41d725f4cc23989ccd83b741919193f2dfa387100029",
    "address":"0xb59109ea1948eb92314c6ef01d1b8b25ec075d46"
  }