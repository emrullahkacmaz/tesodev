import * as React from "react";
import "./Components.css";
import locale from '../Assets/locale.png';

const ListFilterItem = (props) => {
  const { city, country, name, date, mykey ,length} = props;
  console.log("keylerim", mykey)

  return (
    <div
      key={mykey}
      style={{
        flexDirection: "row",
        width: "726px",
        height:'78px',
        borderColor: "white",
   
        borderWidth: 1,
        borderRadius:'8px',
        borderStyle: "solid",
        marginBottom: 5,
      }}
    >
      <div className="ListElements">
      <div style={{marginLeft:'27px', marginTop:'24px'}}>
        <img src={locale} alt="Canvas Logo"  width= '18px' height= '22px'/>
      </div>
        <div style={{ flex: 1, marginLeft:'15px', marginTop:'19px',  }}>
          <div style={{fontFamily:'Inter', fontWeight:400, fontSize:'16px',lineHeight:'20px', color:'#090A0A'}}>{city}</div>
          <div style={{marginTop:'4px',fontFamily:'Inter', fontWeight:400, fontSize:'14px',lineHeight:'16px', color:'#72777A'}}>{country}</div>
        </div>
        <div style={{ flex: 1, marginLeft:'15px', marginTop:'19px'  }}>
          <div style={{textAlign:'end',marginRight:'14px',fontFamily:'Inter', fontWeight:400, fontSize:'16px',lineHeight:'20px', color:'#484848' }}>{name}</div>
          <div style={{ marginTop:'3px', textAlign:'end' ,marginRight:'11px',fontFamily:'Inter', fontWeight:400, fontSize:'16px',lineHeight:'16px', color:'#484848'}}>{date}</div>
        </div>
      </div>
{ mykey%5 !==0 && mykey!==length && <div style={{marginTop:'18px', width:'702px', height:'1px', backgroundColor:'#7E7E7E', marginLeft:10}}></div>}
    </div>
  );
};

export default ListFilterItem;
