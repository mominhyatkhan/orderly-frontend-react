
import axios from "axios";
import { useState } from "react";

type walletresponse = {
  TotalNative: number;
  totalTokenBalance: number;
  tokenList: any[];
};

export async function GetWallletData(chainId: string, address: string) {
  const [walletdata,setwalletdata]=useState<walletresponse>();
  const [balance, setBalance] = useState<number>(0);
  
  let tokenResponse: any;

 
    tokenResponse = await axios.get(
      `http://localhost:8000/monitor-address/get-token-balance?address=${address}&chain=${chainId}`
    );
    setBalance(
      await axios.get(
        `http://localhost:8000/monitor-address/native-balance?address=${address}&chain=${chainId}`
      )
    );
 

  console.log("total: ", tokenResponse.toJSON());
  let total = 0;
  tokenResponse.toJSON().map((item: { balance: any; decimals: any }) => {
    total = total + Number(item.balance) / 10 ** Number(item.decimals);
  });

  setwalletdata({
    TotalNative: total,
    totalTokenBalance: balance,
    tokenList: tokenResponse.toJSON(),
  });
  return walletdata;
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
