import * as React from "react";
import "./Components.css";
import locale from '../Assets/locale.png';

const ListItems = (props) => {
  const { country, name } = props;

  return (
    <div style={{width:'666px', height:'63px',  display: 'flex',  flexDirection: 'row'}}>
      <div style={{ marginTop: 10, marginLeft:'33px' }}>
      <div style={{marginLeft:'27px', marginTop:'7px'}}>
        <img src={locale} alt="Canvas Logo"  width= '18px' height= '22px'/>
      </div>
      </div>
      <div style={{ marginLeft:'15px', marginTop:'12px' }}>
        <div style={{fontSize:'16px', lineHeight:'20px', fontFamily:'Inter', color:'#090A0A'}}>{name}</div>
        <div style={{fontSize:'14px', lineHeight:'16px', fontFamily:'Inter', color:'#72777A',marginTop:'4px'}}>{country}</div>
        <div
          style={{ backgroundColor: "#dfd8d2", width: '567px', height: 0.5 }}
        ></div>
      </div>
    </div>
  );
};

export default ListItems;
