import * as React from 'react';

const Buttons = (props) => {
    

    const {  width, height, color, title, onClick, backgroundColor, bold, font, family}= props

  return (
    
    <div>
      <button onClick={onClick} style={{fontSize:font, fontFamily:family, fontWeight:bold, width:width, height: height, borderRadius:'12px',color:color, borderWidth:0, backgroundColor:backgroundColor}} type="button" >
{title}
      </button>
    </div>
  );
};

export default Buttons;