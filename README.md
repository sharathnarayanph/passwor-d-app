Passwor-D-App

A tool built on top of the Ethereum blockchain to decentraize your password vault

Use this tool for storing your passwords securely in the Ethereum blockchain. Any number of passwords can be stored through this app and the amount of gas spent can be configured to fit your needs. The passwords are sharded and stored across multiple smart contracts and this number can be configured i.e you can create & deploy multiple contract stores which would hold the data and everytime a password is sent for storage, one of the smart contracts will be used.

This app can be connected to the live network for storing the password list. Please follow the manual below to setup and deploy the contracts required for carrying out the necessary operations. This app can also be used with the test networks like Ropsten / Rinkerby for development purposes. Please configure the truffle.js file for setting up the app to work with your own private block chain network. 

Tools & Frameworks:
1. Truffle - For building smart contracts
2. Ganache - For running local ethereum blockchain
3. Metamask - For connecting to ethereum apps from browser

Login Screen:

![screenshot from 2018-06-16 19-16-33](https://user-images.githubusercontent.com/16179366/41499238-58da63c8-719a-11e8-9014-c8e01927c109.png)

Main Screen:

![screenshot from 2018-06-16 19-20-01](https://user-images.githubusercontent.com/16179366/41499248-7c3c24fa-719a-11e8-9d01-74eaaabe5ac4.png)

Smart Contracts:
1. Factory - This smart contract is the entry point of the app which encapsulates the actual smart contracts that perform the job
2. ContentLocator - This smart contract picks a random ContentStore contract for sharding and storing the password data
3. ContentStore - The actual contract where the password is stored as a state

Setup:
1. Clone the repository to your local folder
2. Run npm install
3. Install Ganache (http://truffleframework.com/ganache/)
4. In terminal, type truffle develop
5. Run compile-all (To compile smart contracts)
6. Run migrate --reset --network development (For deploying smart contracts)
7. Open http://localhost:8080/admin.html to add the desired number of ContentLocator and ContectStore smart contracts
8. Open http://localhost:8080/ to signup and start using the app (Wallet coinbase acct used as user address)
