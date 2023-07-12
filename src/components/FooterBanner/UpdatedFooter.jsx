import React from "react";
import FooterImg_11 from "../../assets/images/footerBanner/UpdatedfooterBanner.gif";
import { NavLink } from "react-router-dom";

const UpdatedFooter = () => {
  return (
    <div>
      <NavLink to="/airdrop">
        <img src={FooterImg_11} alt="" width="100%" />
      </NavLink>
    </div>
  );
};

export default UpdatedFooter;
