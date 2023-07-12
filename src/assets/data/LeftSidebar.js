// import MenuIcon_1 from "../images/tokenomics/smallIcons/icon_1.webp";
// import MenuIcon_2 from "../images/tokenomics/smallIcons/icon_2.webp";
// import MenuIcon_3 from "../images/tokenomics/smallIcons/icon_3.png";
// import MenuIcon_4 from "../images/tokenomics/smallIcons/icon_4.webp";
// import MenuIcon_5 from "../images/tokenomics/smallIcons/potato.webp";
// import MenuIcon_6 from "../images/tokenomics/smallIcons/tokenomics_13.webp";
// import MenuIcon_7 from "../images/tokenomics/smallIcons/partners.svg";
import MenuIcon_8 from "../images/tokenomics/smallIcons/merchandise.svg";
import MenuIcon_9 from "../images/tokenomics/smallIcons/roadmap.svg";
import MenuIcon_10 from "../images/tokenomics/smallIcons/faq.svg";
// import MenuIcon_11 from "../images/tokenomics/smallIcons/icon_11.webp";
// import MenuIcon_12 from "../images/tokenomics/smallIcons/icon_12.webp";
import partners from "../images/menu/partners.svg";

// New Landing Page Images //
import N_Landing_images_1 from "../images/New-Landing-Page/Home_1.webp";
import N_Landing_images_2 from "../images/New-Landing-Page/Home_2.webp";
import N_Landing_images_3 from "../images/New-Landing-Page/Home_3.webp";
import N_Landing_images_4 from "../images/New-Landing-Page/Home_4.webp";
// import N_Landing_images_5 from "../images/New-Landing-Page/Home_5.webp";
import N_Landing_images_6 from "../images/New-Landing-Page/Home_6.webp";
import N_Landing_images_7 from "../images/New-Landing-Page/Home_7.webp";
import N_Landing_images_8 from "../images/New-Landing-Page/Home_8.webp";
import N_Landing_images_9 from "../images/New-Landing-Page/Home_9.webp";
import N_Landing_images_10 from "../images/New-Landing-Page/Home_10.webp";
// import N_Landing_images_11 from "../images/New-Landing-Page/Home_11.webp";
import N_Landing_images_12 from "../images/New-Landing-Page/Home_12.webp";
import N_Landing_images_13 from "../images/New-Landing-Page/Home_13.webp";
import LandVideo from "../images/Land-harvested-videos/harvested.mp4";
import first_icon from "../images/menu/1.svg";
import first_middle_icon from "../images/menu/pepe.svg";
import second_middle_icon from "../images/menu/TopG.svg";
import Sec_icon from "../images/menu/2.svg";
import third_icon from "../images/menu/3.svg";
// import fourth_icon from "../images/menu/4.svg";
import five_icon from "../images/menu/5.svg";
import six_icon from "../images/menu/6.svg";

// eslint-disable-next-line no-sparse-arrays
export const MenuData = [
  {
    id: 1,
    imgIcon: first_icon,
    title: "Token",
    route: "/token/dollar-potato",
    imgIcon2: first_middle_icon,
    imgIcon3: second_middle_icon,
    style: "space-around",
    trans: "translate(7px, 0px)",
    // opacityPro: 0,
    // singleTrans: "translate(17px, 0px)",
  },
  {
    id: 2,
    imgIcon: Sec_icon,
    title: "MrPotatoNFT",
    route: "/mrpotato-nft",
    style: "center",
    trans: "translate(10px, 0px)",
  },
  {
    id: 5,
    imgIcon: five_icon,
    title: "Market",
    route: "/market/token",
    style: "center",
    trans: "translate(10px, 0px)",
  },
  {
    id: 3,
    imgIcon: third_icon,
    title: "MintSpin",
    route: "/MintSpin/MrPotatoNFT",
    style: "center",
    trans: "translate(10px, 0px)",
  },
  ,
  // {
  //   id: 2,
  //   imgIcon: MenuIcon_2,
  //   title: "Land",
  //   route: "/",
  // },
  // {
  //   id: 5,
  //   imgIcon: MenuIcon_12,
  //   title: "Bridge",
  //   route: "/bridge",
  // },

  // {
  //   id: 4,
  //   imgIcon: fourth_icon,
  //   title: "MetaPotato",
  //   route: "/meta-potato",
  //   style: "center",
  //   trans: "translate(10px, 0px)",
  // },

  {
    id: 6,
    imgIcon: six_icon,
    title: "Airdrop",
    route: "/airdrop",
    style: "center",
    trans: "translate(10px, 0px)",
  },
  {
    id: 7,
    imgIcon: partners,
    title: "Partners",
    route: "/partners",
    style: "center",
    trans: "translate(10px, 0px)",
  },
  {
    id: 8,
    imgIcon: MenuIcon_8,
    title: "Merchandise",
    route: "/merchandise",
    style: "center",
    trans: "translate(10px, 0px)",
  },
  {
    id: 9,
    imgIcon: MenuIcon_10,
    title: "FAQ",
    route: "/faq",
    style: "center",
    trans: "translate(10px, 0px)",
  },
  {
    id: 10,
    imgIcon: MenuIcon_9,
    title: "Roadmap",
    route: "/roadmap",
    style: "center",
    trans: "translate(10px, 0px)",
  },
  // {
  //   data: [
  //     {
  //       id: 9,
  //       imgIcon: MenuIcon_10,
  //       title: "FAQ",
  //       route: "/faq",
  //     },
  //     {
  //       id: 10,
  //       imgIcon: MenuIcon_9,
  //       title: "Roadmap",
  //       route: "/roadmap",
  //     },
  //   ],
  // },
  // {
  //   id: 11,
  //   imgIcon: MenuIcon_11,
  //   title: "Whitelist",
  //   route: "/whitelist",
  // },
];

export const LandingMenuData_1 = [
  {
    id: 1,
    bg_chara: N_Landing_images_1,
    logo_img: N_Landing_images_7,
    title: "Mint",
    route: "/potatoNft",
  },
  {
    id: 2,
    bg_chara: N_Landing_images_2,
    logo_img: N_Landing_images_8,
    title: "MetaPotato",
    route: "/meta-potato",
  },
];

export const LandingMenuData_2 = [
  {
    id: 3,
    bg_chara: N_Landing_images_3,
    logo_img: N_Landing_images_9,
    title: "Info",
    route: "/faq",
  },
  {
    id: 4,
    bg_chara: N_Landing_images_4,
    logo_img: N_Landing_images_10,
    title: "Potato King",
    route: "/potatoLand",
    positionAb: "absolute",
    bottomSide: "90px",
    leftSide: "22px",
  },

  // {
  //   id: 5,
  //   bg_chara: N_Landing_images_5,
  //   logo_img: N_Landing_images_11,
  //   title: "Bridge",
  //   route: "/bridge",
  // },
];

export const LandingMenuData_3 = [
  {
    id: 6,
    bg_chara: N_Landing_images_6,
    logo_img: N_Landing_images_12,
    title: "Win Spin",
    route: "/winSpin",
  },

  {
    id: 7,
    bg_chara_video: LandVideo,
    logo_img: N_Landing_images_13,
    title: "Potato Land",
    route: "/potatoLand",
    maxWidth: "164px",
    borderStyle: "50%",
  },
];
