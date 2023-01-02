// Importing package 
const { ethers } = require("ethers");
require('dotenv').config()

// Address generation
// const data = new ethers.Wallet.createRandom()
// const privKey = data._signingKey().privateKey;
// const address = data.address;
// console.log({privKey, address});

const walletData = {
    privKey: process.env.ETH_PRIVATE_KEY,
    address: '0xf6Ea2C225211099CD7c5c9cFB05Abc35adC739b9'
}

// Alchemy Provider
const key = process.env.ALCHEMY_KEY;
const network = "goerli";
const provider = new ethers.providers.AlchemyProvider(network, key)
const wallet = new ethers.Wallet( walletData.privKey, provider )

// Generating and verifying a signature
// const message = "Hi I am Kev";
// const generateSignature = async() => {
//     const signature = await wallet.signMessage(message);
//     console.log(signature)

//     const signerAddr = ethers.utils.verifyMessage(message, signature);
//     console.log(signerAddr);
// }
// generateSignature();

// Getting Ether Balance
// const getBalance = async () => {
//     const balance = await wallet.getBalance();
//     const formatBalance = ethers.utils.formatEther(balance.toString())
//     console.log(formatBalance)
// }
// getBalance();

// Sending ETH
const recipientAddress = "0xaFD9Ab8d5742cCdd02b468A8f940003E1929fe55";
const sendEther = async (value) => {
    const tx = {
        to: recipientAddress,
        value: ethers.utils.parseEther(value)
    }
    const result = await wallet.sendTransaction(tx)
    console.log(`https://goerli.etherscan.io/tx/${result.hash}`)
}
sendEther("0.005");