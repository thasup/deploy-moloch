require('dotenv').config();
const hardhat = require("hardhat/config");
const { usePlugin } = hardhat;

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-truffle5");
require("./scripts/moloch-tasks");
require("./scripts/pool-tasks");

const ALCHEMY_API_KEY = process.env.API_URL;
// const MAINNET_PRIVATE_KEY = "";
// const ROPSTEN_PRIVATE_KEY = "";
const GOERLI_PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API;

module.exports = {
  networks: {
    develop: {
      url: "http://localhost:8545",
      deployedContracts: {
        moloch: "",
        pool: ""
      }
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
      deployedContracts: {
        moloch: "0xA18C3a907512029bAF167D0bA2b31b4Aac794fAb",
        pool: ""
      }
    }, /*
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [MAINNET_PRIVATE_KEY],
      deployedContracts: {
        moloch: "0x1fd169A4f5c59ACf79d0Fd5d91D1201EF1Bce9f1", // The original Moloch
        pool: ""
      }
    }, */
    coverage: {
      url: "http://localhost:8555"
    }
  },
  solidity: {
    version: "0.5.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    // The url for the Etherscan API you want to use.
    // For example, here we're using the one for the Ropsten test network
    url: "https://api.etherscan.io/api",
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY
  }
};
