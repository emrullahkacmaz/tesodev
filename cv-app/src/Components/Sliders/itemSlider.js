import * as React from "react";

import bus from "../../Assets/buss.jpg";

const ItemSlider = (props) => {
  return (
    <div>
      <div>
        <img src={bus} alt="Canvas Logo" style={{ width: "327px", height: "195px" }} />{" "}
      </div>
      <div style={{  fontWeight: 700, fontSize:'16px', lineHeight:'24px', fontFamily:'Inter',color:'#090A0A'  }}>
        A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
      </div>
      <div style={{ color:'#6C7072', fontFamily:'Inter', fontWeight:400, fontSize:'12px', lineHeight:'16px' }}>1h ago · by Troy Corison</div>
    </div>
  );
};

export default ItemSlider;
