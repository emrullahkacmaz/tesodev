import * as React from "react";
import Buttons from "../Components/Buttons";
import "./Pages.css";
import logo from "../../src/Assets/tesodev.png";
import address from "../../src/Assets/address.png";

import searchVector from "../../src/Assets/searchVector.png";

 

import ListItems from "../Components/ListItem";

import Carousel from "react-elastic-carousel";
import ItemSlider from "../Components/SlideItems/ItemSlider";


 

import { useNavigate } from "react-router-dom";

import MockData from "../Data/Mock.json";

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../Components/Search/searchStyles";
import SliderItems from "../Components/SlideItems/SliderItems";

const HomePages = () => {
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
   
    navigate(`/lists`, { state: { list: filtered, value: value } });
  };
  const goToForm = () => {
    navigate(`/forms`);
  };

  const hoverColor = value && value.length > 2 ? "#204080" : "#4F75C2";

  return (
    <div style={{backgroundColor:'#E5E5E5', height:'1500px', width:'1280px', display:'flex', flexDirection:'column'}}>

<div style={{marginLeft:'1020px', marginTop:'64px'}}>
        {" "}
        <Buttons
        width='197px'
        height='46px'
        font='18px'
        bold='700'
        fontFamily='Roboto'
          backgroundColor="#204080"
          color="#FFFFFF"
          onClick={goToForm}
          title="Add new record"
        />{" "}
      </div>
      <div style={{marginLeft:'501px', marginTop:'119px'}}>
        <img src={logo} alt="Canvas Logo"  width= '278px' height= '115px'/>
      </div>
      <div style={{marginTop:'11px', marginLeft:'739px', fontSize:'14px', fontFamily:'Roboto', fontWeight:700, color:'#484848'}}>
        Search app
      </div>
      <div style={{fontFamily:'Inter', fontWeight:700, fontSize:'32px', lineHeight:'36px', color:' #090A0A', width:'692px', height:'36px', marginTop:'29px', marginLeft:'320px'}}>
        Find in records
        </div>
        

      <div className="SearchBar">
      <div style={{width:'646px', height:'48px', marginTop:'18px', marginLeft:'302px'}}>
          <Search>
            <SearchIconWrapper>
            <img  position= 'absolute' src={searchVector} alt=''  width= '18px' height= '18px'/>
            </SearchIconWrapper>
 
            <StyledInputBase
            paddingsearch='45px'
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) =>  { 
                setValue(e.target.value)
                if (e.target.value && e.target.value.length > 2) {
                  var filterList = MockData.filter((item) =>
                    item.full_name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                  );
               
                  setFiltered(filterList);
                } 
               
              } }
            />
          </Search>
        </div>
        <div style={{marginTop:'16px'}} >
          <Buttons
          width='138px'
          height='42px'
          fontFamily='Roboto'
          bold='700'
          font='18px'
            color="#FFFFFF"
            backgroundColor={hoverColor}
            title="Search"
            onClick={searchFilter}
          />
        </div>
      </div>

      <div
       
        style={{
        
          marginLeft:'266px',
          width:'717px',
          height:'260px',
          borderStyle: 'groove',
          borderWidth: 1,
          borderRadius: '24px',
         backgroundColor: filtered  && value.length>2 && filtered.length > 0 ? "#FFFFFF" : "transparent",
          borderColor:
            filtered  && value.length>2 && filtered.length > 0 ? "#484848" : "transparent",
        }}
      >
        <div style={{ marginTop: 15 }}>
          {filtered && value.length>2 && filtered[0] ? (
            <ListItems
              name={filtered[0].full_name}
              country={filtered[0].country}
            />
          ) : null}
          {filtered && value.length>2 && filtered[1] ? (
            <ListItems
              name={filtered[1].full_name}
              country={filtered[1].country}
            />
          ) : null}
          {filtered && value.length>2 && filtered[2] ? (
            <ListItems
              name={filtered[2].full_name}
              country={filtered[2].country}
            />
          ) : null}
        </div>
        {filtered  && value.length>2  && filtered.length > 3 && (
          <div className="ShowMore">
            <Buttons
            width='327px'
            height='28px'
             color='#090A0A'
             fontFamily='Inter'
              bold="700"
              font='16px'
              backgroundColor="transparent"
              title="Show more..."
            
              onClick={openList}
            />{" "}
          </div>
        )}
      </div>

<div style={{display:'flex',width:'692x', height:'36px', fontFamily:'Inter', fontWeight:700, color:'#090A0A', fontSize:'32px', marginLeft:'108px', marginTop:'93px'}}>Top News</div>

  <div style={{   width: "1000px", height:'243px', marginTop:'49px', marginLeft:'73px' }}>
      < SliderItems/>
      </div>

      <div style={{width:'1280px', height:'277px', backgroundColor:'#294e98b8', display:'flex', flexDirection:'row', marginTop:'82px'  }}>
        <img src={address} alt="Canvas Logo" style={{ width:'217px', height:'179px', marginTop:'48px', marginLeft:'59px'}} />

        <div style={{ flex: 1, color: "white", width:'424px', height:'171px', marginLeft:'25px' }}>
          <div style={{ marginTop:'66px', fontSize:'18px', fontFamily:'Roboto',lineHeight:'29px', fontWeight:700 }}>İletişim </div>
          <div style={{  fontSize:'18px', fontFamily:'Roboto',lineHeight:'21px', fontWeight:700  }}>
            Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi
            D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul{" "}
          </div>
          <div style={{ marginTop: 30,  fontSize:'18px', fontFamily:'Roboto',lineHeight:'21px', fontWeight:700  }}>Email: bilgi@tesodev.com</div>
        </div>
        <div style={{ flex: 1, marginTop:'27px', marginRight:'53px' }}>
          <iframe
            title="videom"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113846.975648013!2d30.847713622994718!3d40.345314339614035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1664816444743!5m2!1str!2str"
            width="467px"
            height="222px"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      





    </div>
  );
};

export default HomePages;
