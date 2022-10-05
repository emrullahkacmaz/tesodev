import * as React from "react";
import Buttons from "../Components/Buttons";
import "./Pages.css";
import logo from "../../src/Assets/tesodev.jpg";

import SearchIcon from "@mui/icons-material/Search";

import ListItems from "../Components/ListItem";

import Carousel from "react-elastic-carousel";
import ItemSlider from "../Components/Sliders/itemSlider";
import "../Components/Sliders/slideStyles.css";

import ConnectAddress from "../../src/Assets/iletisim.jpg";

import { useNavigate } from "react-router-dom";

import MockData from "../Data/Mock.json";

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../Components/Search/searchStyles";

const MainPages = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];

  const [value, setValue] = React.useState(null);
  const [filtered, setFiltered] = React.useState(null);

  const searchFilter = () => {
    if (value && value.length > 2) {
      var filterList = MockData.filter((item) =>
        item.full_name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
   
      setFiltered(filterList);
    } else {
      setFiltered();
    }
  };

  let navigate = useNavigate();

  const openList = () => {
   
    navigate(`/list`, { state: { list: filtered, value: value } });
  };
  const goToForm = () => {
    navigate(`/form`);
  };

  const hoverColor = value && value.length > 2 ? "#204080" : "#4F75C2";

  return (
    <div>
      <div className="AddNewMain">
        {" "}
        <Buttons
          backgroundColor="#204080"
          color="white"
          onClick={goToForm}
          title="Add new record"
        />{" "}
      </div>
      <div className="Logo">
        <img src={logo} alt="Canvas Logo" />
      </div>
      <div className="FindText">Find in records</div>
      <div className="SearchBar">
        <div className="SearchTextArea">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setValue(e.target.value)}
            />
          </Search>
        </div>
        <div className="SearchButtonArea">
          <Buttons
          width='100px'
            color="white"
            backgroundColor={hoverColor}
            title="Search"
            onClick={searchFilter}
          />
        </div>
      </div>

      <div
        className="SearchEnginee"
        style={{
          borderStyle: "inset",
          borderWidth: 1,
          borderRadius: 18,
          borderColor:
            filtered && filtered.length > 0 ? "#484848" : "transparent",
        }}
      >
        <div style={{ marginTop: 15 }}>
          {filtered && filtered[0] ? (
            <ListItems
              name={filtered[0].full_name}
              country={filtered[0].country}
            />
          ) : null}
          {filtered && filtered[1] ? (
            <ListItems
              name={filtered[1].full_name}
              country={filtered[1].country}
            />
          ) : null}
          {filtered && filtered[2] ? (
            <ListItems
              name={filtered[2].full_name}
              country={filtered[2].country}
            />
          ) : null}
        </div>
        {filtered && filtered.length > 3 && (
          <div className="ShowMore">
            <Buttons
              bold="bold"
              backgroundColor="transparent"
              title="Show more..."
              onClick={openList}
            />{" "}
          </div>
        )}
      </div>

      <div style={{ flex: 1, width: "100%", height: 304, marginTop: 16 }}>
        <Carousel breakPoints={breakPoints}>
          <ItemSlider />
          <ItemSlider />
          <ItemSlider />
          <ItemSlider />
          <ItemSlider />
          <ItemSlider />
          <ItemSlider />
        </Carousel>
      </div>

      <div className="Footer">
        <img src={ConnectAddress} alt="Canvas Logo" style={{ padding: 40 }} />

        <div style={{ flex: 1, color: "white" }}>
          <div style={{ marginTop: 50 }}>İletişim </div>
          <div style={{ width: 370 }}>
            Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi
            D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul{" "}
          </div>
          <div style={{ marginTop: 20 }}>Email: bilgi@tesodev.com</div>
        </div>
        <div style={{ flex: 1, marginTop: 30 }}>
          <iframe
            title="videom"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113846.975648013!2d30.847713622994718!3d40.345314339614035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1664816444743!5m2!1str!2str"
            width="480"
            height="200"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MainPages;
