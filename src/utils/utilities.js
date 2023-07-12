import { ethers } from "ethers";
import NFT from "../abis/MrPotatoNFT.json";
import ERC20 from "../abis/ERC20.json";
import { Nft, PROVIDER, Token } from "../utils/constants";

// ensure that a provider is set
if (!PROVIDER) throw new Error("Missing provider.");

const provider = new ethers.providers.JsonRpcProvider(PROVIDER);
const potatoNFT = new ethers.Contract(Nft, NFT.abi, provider);

const potatoToken = new ethers.Contract(Token, ERC20.abi, provider);

// check if the contract addresses are set correctly
if (!Nft) throw new Error("Missing NFT contract address.");
if (!Token) throw new Error("Missing ERC20 contract address.");

// check if the ABIs are correctly imported
if (!NFT.abi) throw new Error("NFT ABI not correctly imported.");
// if (!Token.abi) throw new Error("Token ABI not correctly imported.");

async function getNFTBalance(user) {
  if (!user) throw new Error("Missing user address.");
  return await potatoNFT.balanceOf(user);
}

async function getPrice() {
  return await potatoNFT.getCardPrice();
}
async function getTokenBalance(user) {
  if (!user) throw new Error("Missing user address.");
  return await potatoToken.balanceOf(user);
}

export default {
  getNFTBalance,
  getTokenBalance,
  getPrice,
};
