import * as React from 'react';
import './Components.css'
import LocationOn from '@mui/icons-material/LocationOn';

const ListItems = (props) => {
    

    const {country,city }= props

  return (
    
    <div  className='ListElements'>
       
       
        <div style={{marginTop:10}}>
    <LocationOn/>
        </div>
<div style={{marginLeft:10}}>
       
        <div >British Indian Ocean Territory</div>
            <div> Colwood</div>
           
            </div>
           
    </div>
  );
};

export default ListItems;