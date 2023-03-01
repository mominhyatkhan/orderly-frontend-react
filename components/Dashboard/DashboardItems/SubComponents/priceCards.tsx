import * as React from "react";

type Props = {
  heading: string;
  price: string;
};

const PriceCard: React.FC<Props> = ({ heading, price }) => {
  return (
    <a
      href="#"
      className="block text-[11px] w-80 h-24 p-6 bg-white hover:bg-gray-100 dark:bg-white dark:hover:bg-gray-100"
    >
      <h5 className="mb-2 text-sm text-[11px] font-light tracking-tight text-gray-900 dark:text-[#687780]">
        {heading}
      </h5>
      <p className="font-normal text-[15px] text-[#08101F]">${price}</p>
    </a>
  );
};
export default PriceCard;
