import { EvmChain } from "@moralisweb3/common-evm-utils";
import axios from "axios";
import Moralis from "moralis";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
type data={
  TotalNative:number,
  totalTokenBalance:number,
  tokenList:any[]
}
export async function StartMoralis() {
  await Moralis.start({
    apiKey: "yv2QT1y7W5ePG3KBqRrxTBgm8uUTowv8RRIctpmBdycaGmGi1bQxmD39W9TMJOzH",
  });
}
export async function GetWallletData(symbol:string,address:string) {
const [walletdata,setwalletdata]=useState<data>()
  const [balance,setBalance] =useState<number>(0)
      let chain;
      if (symbol == "ETH") {
        chain = EvmChain.ETHEREUM;
      } else if (symbol == "BSC") {
        chain = EvmChain.BSC;
      }

      const response = await Moralis.EvmApi.balance.getNativeBalance({
        address,
        chain,
      });

      const tokenResponse = await Moralis.EvmApi.token.getWalletTokenBalances({
        address,
        chain,
      });

      console.log("total: ", tokenResponse.toJSON());
      let total = 0;
      tokenResponse.toJSON().map((item) => {
        total = total + Number(item.balance) / 10 ** Number(item.decimals);
      });
      
       if (symbol == "ETH") {
        setBalance( Number(response.result.balance) / 10 ** 18);
       
      } else if (symbol == "BSC") {
        setBalance( Number(response.result.balance) / 10 ** 8);
      } 
    setwalletdata({TotalNative:total,totalTokenBalance:balance,tokenList:tokenResponse.toJSON()})
    return walletdata
}
export default async function signupApi(userdata: any) {
  try {
    const response = await axios.post("http://localhost:8000/signup", {
      email: userdata.email,
      password: userdata.password,
      role: userdata.role,
      confirmation: userdata.confirmation,
    });
    return response;
  } catch (error) {
    //@ts-ignore
    console.log("error in sign up", error);
  }
}
