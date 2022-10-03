import * as React from "react";
import Buttons from "../Components/Buttons";
import "./Pages.css";
import logo from "../../src/Assets/tesodev.jpg";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import InputBase from "@mui/material/InputBase";
import ListItems from "../Components/ListItem";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { Carousel } from "@trendyol-js/react-carousel";
import { SliderData } from "../Components/Sliders/sliderData";
import ImageSlider from "../Components/Sliders/sliderFlow";
import ConnectAddress from "../../src/Assets/iletisim.jpg";

import MockData from '../Data/Mock.json'

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderWidth: 2,
  borderRadius: theme.shape.borderRadius,
  borderColor: alpha(theme.palette.common.black, 0.15),
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),

  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  borderWidth: 2,
  borderColor: alpha(theme.palette.common.black, 0.15),
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const MainPages = () => {
  const handleDragStart = (e) => e.preventDefault();

  const items = [<SearchIcon />, <SearchIcon />, <SearchIcon />];
  const [value, setValue] = React.useState(null);
  const [filtered, setFiltered] = React.useState(null);

 
  const searchFilter=()=>{
    

 
if(value &&  value.length>2){
 var filterList = MockData.filter((item)=> item.full_name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
  console.log("filterlendi", filterList)
  setFiltered(filterList)

}
else{
  setFiltered()
}


  }

  return (
    <div>
      <div className="AddNewMain">
        {" "}
        <Buttons title="Add new record" />{" "}
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
          <Buttons title="Search" onClick={searchFilter} />
        </div>
      </div>

      <div className="SearchEnginee">
      { filtered ?  
      <div>
          <ListItems name={filtered[0].full_name} country={filtered[0].country} />
          <ListItems name={filtered[1].full_name} country={filtered[1].country}/>
          <ListItems name={filtered[2].full_name} country={filtered[2].country}/>
        </div> : null }

        <div className="ShowMore">
          <Buttons title="Show more.." />{" "}
        </div>
      </div>

      <div style={{ flex: 1, height: 400 }}>
        <ImageSlider />
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
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MainPages;
