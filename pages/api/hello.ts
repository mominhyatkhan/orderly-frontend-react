import Moralis from "moralis";

export default async function StartMoralis(){
  await Moralis.start({
    apiKey:
      "yv2QT1y7W5ePG3KBqRrxTBgm8uUTowv8RRIctpmBdycaGmGi1bQxmD39W9TMJOzH",
  });
}