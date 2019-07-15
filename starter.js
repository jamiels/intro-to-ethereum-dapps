const ganache = require('ganache-cli');
const Web3 = require('web3');
const path = require('path');
const fs = require('fs');
const solc = require('solc');
const config = require('config');
const HDWalletProvider = require('truffle-hdwallet-provider');

const contractLocation = path.resolve(__dirname,'contracts','BasicToken.sol');
const contract = fs.readFileSync(contractLocation,'utf8');

var run = async() => {
  // Put code here
}

run()
