import * as React from "react";
import "./Components.css";
import LocationOn from "@mui/icons-material/LocationOn";

const ListItems = (props) => {
  const { country, name } = props;

  return (
    <div className="ListElements">
      <div style={{ marginTop: 10 }}>
        <LocationOn />
      </div>
      <div style={{ marginLeft: 10 }}>
        <div>{name}</div>
        <div>{country}</div>
        <div
          style={{ backgroundColor: "#dfd8d2", width: 610, height: 0.5 }}
        ></div>
      </div>
    </div>
  );
};

export default ListItems;
