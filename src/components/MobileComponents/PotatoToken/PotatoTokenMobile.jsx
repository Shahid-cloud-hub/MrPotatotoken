import React from "react";
import { PotatoTokenData } from "../../../assets/data/tableData";
import PotatoTokenBtn from "./PotatoTokenBtn";
import { PotatoTokenRow, PotatoTokenwrapper } from "./PotatoTokenStyle";

const PotatoTokenMobile = () => {
  return (
    <PotatoTokenwrapper>
      <div className="background">
        <PotatoTokenRow>
          <PotatoTokenBtn
            data={PotatoTokenData.QAData}
            btnData={PotatoTokenData.btnData}
          />
        </PotatoTokenRow>
      </div>
    </PotatoTokenwrapper>
  );
};

export default PotatoTokenMobile;
