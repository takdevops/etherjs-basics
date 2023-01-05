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
// const recipientAddress = "0xaFD9Ab8d5742cCdd02b468A8f940003E1929fe55";
// const sendEther = async (value) => {
//     const tx = {
//         to: recipientAddress,
//         value: ethers.utils.parseEther(value)
//     }
//     const result = await wallet.sendTransaction(tx)
//     console.log(`https://goerli.etherscan.io/tx/${result.hash}`)
// }
// sendEther("0.005");

// Talking to the Counter Contract
// const contractAddress = "0x175095281Db9C6aC8889f2fF9AA995062D0E84BB";
// const abi = [
//     "function decermentNumber() public",
//     "function incrementNumber() public",
//     "function number() view public returns(uint8)"
// ]
// const counterContract = new ethers.Contract(contractAddress, abi, wallet);
// const incrementNumber = async () => {
//     const numberBefore = await counterContract.number();
//     console.log(`Number before: ${numberBefore}`);
//     const result = await counterContract.incrementNumber();
//     console.log(`https://goerli.etherscan.io/tx/${result.hash}`);
//     const numberAfter = await counterContract.number();
//     console.log(`Number after: ${numberAfter}`);
// }
// incrementNumber();

// Mint NFT from Contract
const contractAddress = "0x8b3493027114da228548511b22b798b920c4da71";
const abi = [{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"purchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"}]
const nftContract = new ethers.Contract(contractAddress, abi, wallet);

const mintNFT = async (quantity) => {
    const totalETH = (quantity * 0.001).toString();
    const totalWei = ethers.utils.parseEther(totalETH);

    // const result = await nftContract.purchase(quantity, {value: totalWei});
    // console.log(`https://goerli.etherscan.io/tx/${result.hash}`);
}
mintNFT(2);
