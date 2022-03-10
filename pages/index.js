import React from "react";
import { useMoralisWeb3Api } from "react-moralis";

export default function Home() {

  const Web3Api = useMoralisWeb3Api();

  const fetchNFTs = async () => {
    // get NFTs for current user on Mainnet
    const userEthNFTs = await Web3Api.account.getNFTs();
    console.log(userEthNFTs);
    // get testnet NFTs for user
    const testnetNFTs = await Web3Api.Web3API.account.getNFTs({
      chain: "ropsten",
    });
    console.log(testnetNFTs);
  
    // get polygon NFTs for address
    const options = {
      chain: "eth",
      address: "0xa5d47698331eb7de5e57a8234aa783dfbe2cb54f",
    };
    const polygonNFTs = await Web3Api.account.getNFTs(options);
  console.log(polygonNFTs);
  };


  return (
    <div>
      <button onClick={fetchNFTs}>
        GetNFTs 
      </button>
    </div>
  )
}
