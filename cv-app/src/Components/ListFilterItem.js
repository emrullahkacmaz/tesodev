import * as React from 'react';
import './Components.css'
import LocationOn from '@mui/icons-material/LocationOn';

const ListFilterItem = (props) => {
    

    const {city, country,name, date }= props

  return (

    <div style={{ flexDirection:'row', width:'75%' , marginLeft:'20%', borderColor:'white', borderBottomColor:'grey' ,borderWidth:1, borderStyle:'solid', marginBottom:5}}>
    <div  className='ListElements'>
       

        <div style={{marginTop:10, marginBottom:20}}>
    <LocationOn/>
        </div>
<div style={{flex:1, marginLeft:5}}>
       
        <div >{city}</div>
            <div>{country}</div>
           
            </div>
            <div style={{flex:1, flexDirection:'column'}}>

            <div  style={{  textAlign:'end'}}>{name}</div>
            <div style={{  textAlign:'end'}}>{date}</div>
            </div>

            </div>
           
    </div>
  
  );
};

export default ListFilterItem;