import * as React from 'react';

const Buttons = (props) => {
    

    const {  width, height, color, title, onClick, backgroundColor, bold}= props

  return (
    
    <div>
      <button onClick={onClick} style={{fontWeight:bold, width:200, height:40, borderRadius:8,color:color, borderWidth:0, backgroundColor:backgroundColor}} type="button" >
{title}
      </button>
    </div>
  );
};

export default Buttons;