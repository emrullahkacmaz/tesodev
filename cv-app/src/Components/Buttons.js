import * as React from 'react';

const Buttons = (props) => {
    

    const {  width, height, color, title, onClick}= props

  return (
    
    <div>
      <button onClick={onClick} style={{width:200, height:40, borderRadius:8,color:color, borderWidth:0, backgroundColor:'transparent'}} type="button" >
{title}
      </button>
    </div>
  );
};

export default Buttons;