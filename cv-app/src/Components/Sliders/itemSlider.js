import * as React from "react";

import bus from "../../Assets/buss.jpg";

const ItemSlider = (props) => {
  return (
    <div>
      <div>
        <img src={bus} alt="Canvas Logo" style={{ width: "327px", height: "195px" }} />{" "}
      </div>
      <div style={{ width: 300, fontWeight: "bold" }}>
        A Plan to Rebuild the Bus Terminal Everyone Loves to Hate
      </div>
      <div style={{ fontWeight: "lighter" }}>1h ago by Troy Corison</div>
    </div>
  );
};

export default ItemSlider;
