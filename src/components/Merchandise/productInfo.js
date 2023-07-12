import Product_1 from "../../assets/images/merchandiseImages/product_1.webp";
import Product_2 from "../../assets/images/merchandiseImages/product_2.webp";
import Product_3 from "../../assets/images/merchandiseImages/product_3.webp";
import Product_4 from "../../assets/images/merchandiseImages/product_4.webp";
import Product_5 from "../../assets/images/merchandiseImages/product_5.webp";
import Product_6 from "../../assets/images/merchandiseImages/product_6.webp";

import GiftImage from "../../assets/images/merchandiseImages/gift.png";

// First Girl Products Images //
import Product_Large_Img_1 from "../../assets/images/merchandiseImages/Large_product.webp";
import Product_Large_Img_2 from "../../assets/images/merchandiseImages/product_large_2.webp";

// Second Boys Products Images //
import Product_2_Large_Img_1 from "../../assets/images/merchandiseImages/Product_2_Large_Img_1.webp";
import Product_2_Large_Img_2 from "../../assets/images/merchandiseImages/Product_2_Large_Img_2.webp";

// Third Boys & Girls Hoodies //
import Product_3_Large_Img_1 from "../../assets/images/merchandiseImages/Product_3_Large_Img_1.webp";
import Product_3_Large_Img_2 from "../../assets/images/merchandiseImages/Product_3_Large_Img_2.webp";

// Forth Caps Products //
import Product_4_Large_Img_1 from "../../assets/images/merchandiseImages/Product_4_Large_Img_1.webp";
import Product_4_Large_Img_2 from "../../assets/images/merchandiseImages/Product_4_Large_Img_2.webp";

// Add To Cart Images //
import Cart_Product_1 from "../../assets/images/merchandiseImages/AddToCart/Product_1_white.webp";
import Cart_Product_2 from "../../assets/images/merchandiseImages/AddToCart/Product_1_black.webp";

export const productInfo_1 = [
  // {
  //   id: 1,
  //   title: "Mr Potato NFT",
  //   img: Product_1,
  //   bigImg: Product_Large_Img_1,
  //   bigSecImg: Product_Large_Img_2,
  //   addToCartImg_1: Cart_Product_1,
  //   addToCartImg_2: Cart_Product_2,
  //   product: "T-Shirt",
  //   productTitle: "Mr Potato NFT T-Shirt",
  //   gender: "(for Girls)",
  //   amount: "$ 24.99",
  //   productInfo: "Womans Potato King High Quality Comfortable Cotton T-Shirt",
  //   productCheckoutAmount: "24.99 USD ($)",

  //   sizes: [
  //     { value: "extra_small", label: "XS - size" },
  //     { value: "small", label: "S - size" },
  //     { value: "medium", label: "M - size" },
  //     { value: "Large", label: "L - size" },
  //   ],
  // },
  {
    id: 1,
    title: "Mr Potato NFT",
    img: Product_2,
    // bigImg: Product_2_Large_Img_2,
    bigSecImg: Product_2_Large_Img_1,
    product: "T-Shirt",
    productTitle: "Mr Potato NFT T-Shirt",
    gender: "(for Boys)",
    amount: "$ 29",
    productInfo: "The coolest shirt you’ll ever see.",
    productCheckoutAmount: "29 USD ($)",
    gift_img: GiftImage,

    sizes: [
      { value: "small", label: "S - size" },
      { value: "medium", label: "M - size" },
      { value: "Large", label: "L - size" },
      { value: "extra_large", label: "XL - size" },
      { value: "extra_extra_large", label: "XXL - size" },
    ],
  },
  {
    id: 2,
    title: "Mr Potato GOT BITCOIN",
    img: Product_3,
    bigImg: Product_3_Large_Img_1,
    bigSecImg: Product_3_Large_Img_2,
    product: "Hoodie",
    productTitle: "MrPotatoNFT GOT BITCOIN Hoodie",
    gender: "(Unisex)",
    amount: "$ 69",
    productInfo: "The coolest hoodie you’ll ever see.",
    productCheckoutAmount: "69 USD ($)",
    gift_img: GiftImage,

    sizes: [
      { value: "extra_small", label: "XS - size" },
      { value: "small", label: "S - size" },
      { value: "medium", label: "M - size" },
      { value: "Large", label: "L - size" },
      { value: "extra_large", label: "XL - size" },
      { value: "extra_extra_large", label: "XXL - size" },
    ],
  },
  // {
  //   id: 2,
  //   title: "Mr Potato NFT",
  //   img: Product_4,
  //   bigImg: Product_3_Large_Img_1,
  //   bigSecImg: Product_3_Large_Img_2,
  //   product: "Hoodie",
  //   productTitle: "MR. P GOT BITCOIN Hoodie",
  //   gender: "(for Boys)",
  //   amount: "$ 49.99",
  //   productInfo: "Potato King High Quality Comfortable Cotton Hoodie",
  //   productCheckoutAmount: "49.99 USD ($)",

  //   sizes: [
  //     { value: "extra_small", label: "XS - size" },
  //     { value: "small", label: "S - size" },
  //     { value: "medium", label: "M - size" },
  //     { value: "Large", label: "L - size" },
  //     { value: "extra_large", label: "XL - size" },
  //     { value: "extra_extra_large", label: "XXL - size" },
  //   ],
  // },
  {
    id: 3,
    title: "Mr Potato GOT BITCOIN",
    img: Product_5,
    bigImg: Product_4_Large_Img_2,
    bigSecImg: Product_4_Large_Img_1,
    product: "Cap",
    productTitle: "MrPotatoNFT GOT BITCOIN Cap",

    gender: "(Unisex)",
    amount: "$ 19",
    productInfo: "The coolest King Cap you’ll ever see.",
    productCheckoutAmount: "19 USD ($)",
    gift_img: GiftImage,
  },
  // {
  //   id: 6,
  //   title: "Mr Potato NFT",
  //   img: Product_6,
  //   bigImg: Product_Large_Img_1,
  //   bigSecImg: Product_Large_Img_2,
  //   product: "T-Shirt",
  //   productTitle: "Mr Potato NFT T-Shirt",
  //   gender: "(for Girls)",
  //   amount: "$ 24.99",
  //   productInfo: "Womans Potato King High Quality Comfortable Cotton T-Shirt",
  //   productCheckoutAmount: "24.99 USD ($)",

  //   sizes: [
  //     { value: "extra_small", label: "XS - size" },
  //     { value: "small", label: "S - size" },
  //     { value: "medium", label: "M - size" },
  //     { value: "Large", label: "L - size" },
  //   ],
  // },
];
