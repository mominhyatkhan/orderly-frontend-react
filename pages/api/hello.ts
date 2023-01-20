import { EvmChain } from "@moralisweb3/common-evm-utils";
import Moralis from "moralis";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export async function StartMoralis(){
  await Moralis.start({
    apiKey:
      "yv2QT1y7W5ePG3KBqRrxTBgm8uUTowv8RRIctpmBdycaGmGi1bQxmD39W9TMJOzH",
  });
}
export function GetWallletData(){
  const wallets=useSelector((state:RootState)=>state.tokens)
  wallets.map(async (listItem, index) => {
    if (listItem.state) {
      let chain;
      console.log(listItem.name, " index ", index);
      if (listItem.symbol == "ETH") {
        chain = EvmChain.ETHEREUM;
      } else if (listItem.symbol == "BSC") {
        chain = EvmChain.BSC;
      }
      let address=listItem.address
      const response = await Moralis.EvmApi.balance.getNativeBalance({
        address,
        chain,
      });

      const tokenResponse = await Moralis.EvmApi.token.getWalletTokenBalances(
        {
          address,
          chain,
        }
      );

      console.log("total: ", tokenResponse.toJSON());
      let total = 0;
      tokenResponse.toJSON().map((item) => {
        total = total + Number(item.balance) / 10 ** Number(item.decimals);
        console.log("total: ", total);
      });

     /*  if (listItem.name == "ETHEREUM") {
        let balance = Number(response.result.balance) / 10 ** 18;
       
      } else if (listItem.name == "BSC") {
        let balance = Number(response.result.balance) / 10 ** 8;
       
      }  */
    }
  });
}