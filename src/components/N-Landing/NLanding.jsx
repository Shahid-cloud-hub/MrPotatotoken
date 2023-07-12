import SEO from "../SEO/SEO";
import { NLandingPage } from "./NLanding.style";
import TwitterImage from "../../assets/images/New-Landing-Page/Twitter.png";
import PinkSaleImage from "../../assets/images/New-Landing-Page/pinkswap.png";
import TelegramImage from "../../assets/images/New-Landing-Page/Telegram.png";
import DiscordImage from "../../assets/images/New-Landing-Page/Discord.png";
import DexViewImage from "../../assets/images/New-Landing-Page/dexView.png";

const NLanding = () => {
  const imageUrl =
    "https://res.cloudinary.com/dfjmnwwan/image/upload/v1688588400/Group_625899_bvasba.svg";
  return (
    <>
      <SEO
        title="Mr Potato NFT | The Leading NFT Marketplace"
        description="Mr. Potato is a highly curated NFT marketplace where you can find exclusive crypto collectibles and NFTs. Browse, create, buy, sell, and auction NFTs, digital art, and digital collectibles with Mr. Potato today."
      />
      <NLandingPage url={imageUrl}>
        <div className="landing-bg">
          <div className="overlay-wrapper">
            {/* <div className="landing-two-btn-wrapper">
              <NavLink to="/token">
                <div className="btn-1">
                  <span>MrPotato Token</span>
                  <button>ENTER</button>
                </div>
              </NavLink>
              <NavLink to="/nft">
                <div className="btn-2">
                  <span>MrPotato NFT</span>
                  <button>ENTER</button>
                </div>
              </NavLink>
            </div>
            <NavLink to="/token">
              <div className="landing-para-wrapper">
                <div className="lanidng-para">
                  <span>
                    Mr Potato is a community meme token for the people, which
                    can be swapped into a Mr Potato NFT….
                  </span>
                </div>
                <button>ENTER SITE</button>
              </div>
            </NavLink> */}
            <div className="links-wrapper">
              <a
                href="https://twitter.com/Mrpotatotoken"
                target="_blank"
                rel="noreferrer"
              >
                <img src={TwitterImage} alt="" />
              </a>
              <a
                href="https://www.pinksale.finance/launchpad/0x42e99548B633eF8371f0696f90814cE54044Faf7?chain=BSC&refId=0x943E3574D318BD9De64bD220d161FC1027375918"
                target="_blank"
                rel="noreferrer"
              >
                <img src={PinkSaleImage} alt="" />
                <span>Partner</span>
              </a>
              <a
                href="https://discord.gg/mrpotatotoken"
                target="_blank"
                rel="noreferrer"
              >
                <img src={DiscordImage} alt="" />
              </a>
              <a
                href="https://www.dexview.com/eth/0x17Bb9F3572d0C69E017dcd048eC7304EEcC981c8"
                target="_blank"
                rel="noreferrer"
              >
                <img src={DexViewImage} alt="" />
                <span>Partner</span>
              </a>
              <a
                href="https://t.me/MrPotatoFam"
                target="_blank"
                rel="noreferrer"
              >
                <img src={TelegramImage} alt="" />
              </a>
            </div>
          </div>
        </div>
      </NLandingPage>
    </>
  );
};

export default NLanding;
