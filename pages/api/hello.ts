import axios from "axios";
import { useState } from "react";

type Walletresponse = {
  TotalNative: number;
  totalTokenBalance: number;
  tokenList: any[];
};

export async function GetWallletData(chainId: string, address: string) {
  const walletdata: Walletresponse = {
    TotalNative: 0,
    totalTokenBalance: 0,
    tokenList: [],
  };
  let balance;

  let tokenResponse: any;

  tokenResponse = await axios.get(
    `http://localhost:8000/monitor-address/get-token-balance?address=${address}&chain=${chainId}`
  );
  balance = await axios.get(
    `http://localhost:8000/monitor-address/native-balance?address=${address}&chain=${chainId}`
  );

  console.log("total: ", tokenResponse.data.result);
  let total = 0;
  tokenResponse.data.result.map((item: { balance: any; decimals: any }) => {
    total = total + Number(item.balance) / 10 ** Number(item.decimals);
  });
  console.log("im balance", balance.data.result.balance);
  walletdata.TotalNative = await balance.data.result.balance;
  walletdata.totalTokenBalance = total;
  walletdata.tokenList.push(await tokenResponse.data.result);
  return walletdata;
}
export async function signupApi(userdata: any) {
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
export async function signupMail(email: string) {
  try {
    const response = await axios.post("http://localhost:8000/user/signup", {
      email,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function checkVerified(email: string) {
  try {
    const response = await axios.get(
      `http://localhost:8000/user/fetch-verified-user?email=${email}`
    );
  } catch (error) {}
}
export async function setpassword(password:string) {
  const response=await axios.post('http://localhost:8000/user/set-password',{password})
  console.log('password response',response)
}