import * as React from 'react';
import {useLocation} from 'react-router-dom';
import logo from "../../src/Assets/tesodev.jpg";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import Buttons from "../Components/Buttons";
import ListFilterItem from '../Components/ListFilterItem';

import { Dropdown, Option } from "../Components/Dropdown";



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


const ShowMoreList = (props) => {
    

    const {route,navigate}= props
    const location = useLocation();
console.log("2.sayfa", location.state.list)
const [value, setValue] = React.useState(null);

const [optionValue, setOptionValue] =React. useState("");
const handleSelect = (e) => {
  console.log(e.target.value);
  setOptionValue(e.target.value);
};
  return (
    <div>

    <div style={{display:'flex', flexDirection:'row', marginTop:30, marginLeft:50}}>
         <div style={{flex:1}}>  <img src={logo} alt="Canvas Logo" style={{width:200, height:100}} /></div>
         <div  style={{flex:4}}> 
         <Search>
            <SearchIconWrapper>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setValue(e.target.value)}
            />
          </Search>
         </div>
         <div  style={{flex:2}}>   <Buttons title="Search"/></div>
         <div  style={{flex:2}}> <Buttons title="Add new record" color='blue'/></div>
    </div>
    <div style={{flexDirection:'row', display:'flex'}}>

    <div  style={{flex:8}}>{  location.state.list.map(item => <ListFilterItem city={item.city}  country={item.country} name={item.full_name} date={item.date} />)}
</div>
    <div style={{flex:1,marginRight:100}}> 
    <Dropdown
      
      value='sırala'
        onChange={handleSelect}
        action="https://jsonplaceholder.typicode.com/posts"
      >
  
        <Option value="Name ascending" />
        <Option value="Name descending" />
        <Option value="Year ascending" />
        <Option value="Year descending" />
      </Dropdown>
      </div>

   </div>


    </div>

  );
};

export default ShowMoreList;