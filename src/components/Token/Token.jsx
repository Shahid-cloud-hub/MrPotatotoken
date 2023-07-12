import { useEffect } from "react";
import SEO from "../SEO/SEO";
import PotatoToken from "./PotatoToken";

const Token = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO
        title="Buy and Sell Unique Potato Tokens on Mr Potato NFT Marketplace"
        description="Discover an exclusive selection of digital tokens available at Mr Potato NFT Marketplace. Buy and sell unique Potato Tokens backed by blockchain technology. Shop now to explore a wide range of NFTs and own a piece of your favorite digital asset!"
      />
      <PotatoToken />
    </>
  );
};

export default Token;
