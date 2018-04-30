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
        "inputs": [
          {
            "name": "locs",
            "type": "address[]"
          }
        ],
        "name": "addLocations",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "bytecode": "0x6060604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610d11806100536000396000f30060606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632e008e60146100905780633f0682121461012957806341c0e1b5146101835780634ec0b53a14610198578063879281c4146101ea5780638da5cb5b1461022d5780639c0d252514610282578063f2fde38b146102d4575b005b341561009b57600080fd5b61010f60048080617d0001906103e88060200260405190810160405280929190826103e8602002808284378201915050505050919080617d0001906103e88060200260405190810160405280929190826103e86020028082843782019150505050509190803590602001909190505061030d565b604051808215151515815260200191505060405180910390f35b341561013457600080fd5b6101816004808035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919050506104c2565b005b341561018e57600080fd5b6101966105aa565b005b6101cc600480803560001916906020019091908035600019169060200190919080356000191690602001909190505061063b565b60405180826000191660001916815260200191505060405180910390f35b34156101f557600080fd5b61020f6004808035600019169060200190919050506108c9565b60405180826000191660001916815260200191505060405180910390f35b341561023857600080fd5b610240610915565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102b6600480803560001916906020019091908035600019169060200190919080356000191690602001909190505061093a565b60405180826000191660001916815260200191505060405180910390f35b34156102df57600080fd5b61030b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610bc4565b005b6000806000600102600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154600019161415151561036957600080fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff16639da94afb8686866040518463ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180846103e860200280838360005b83811015610444578082015181840152602081019050610429565b50505050905001836103e860200280838360005b83811015610473578082015181840152602081019050610458565b505050509050018281526020019350505050602060405180830381600087803b151561049e57600080fd5b5af115156104ab57600080fd5b505050604051805190505060019150509392505050565b60008090505b81518110156105a657600073ffffffffffffffffffffffffffffffffffffffff1682828151811015156104f757fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1614151561059957600280548060010182816105329190610c94565b91600052602060002090016000848481518110151561054d57fe5b90602001906020020151909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b80806001019150506104c8565b5050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610639576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b565b6000838383600060010283600019161415151561065757600080fd5b600060010282600019161415151561066e57600080fd5b600060010281600019161415151561068557600080fd5b6000600102600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154600019161415156106dd57600080fd5b86600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001816000191690555084600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201816000191690555085600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018160001916905550600260008154811015156107ce57fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015493505050509392505050565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000838383600060010283600019161415151561095657600080fd5b600060010282600019161415151561096d57600080fd5b600060010281600019161415151561098457600080fd5b6000600102600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015460001916141515156109dd57600080fd5b6000600102600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015460001916141515610a7c5786600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000181600019169055505b6000600102600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015460001916141515610b1b5785600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010181600019169055505b6000600102600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015460001916141515610bba5784600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020181600019169055505b5050509392505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610c9157600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515610c9057806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b50565b815481835581811511610cbb57818360005260206000209182019101610cba9190610cc0565b5b505050565b610ce291905b80821115610cde576000816000905550600101610cc6565b5090565b905600a165627a7a723058206d3675851fb98edffa27413b3eca9ce816815d24d19a6ab0d84e877642c23d840029",
    "address":""
  }