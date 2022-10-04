 
import React, { useState, useMemo } from 'react';
import Pagination from '../Components/Pagination/Pagination';
import {useLocation} from 'react-router-dom';
import logo from "../../src/Assets/tesodev.jpg";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import Buttons from "../Components/Buttons";
import ListFilterItem from '../Components/ListFilterItem';
import CompareArrowsSharpIcon from '@mui/icons-material/CompareArrowsSharp';

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
    console.log("ilk gelen",location)
    
let PageSize = 5;
const location = useLocation();
    const [currentPage, setCurrentPage] = useState(1);
    const [filterMyList, setFilterMyList] = useState(location.state.list);
    const [isVisible, setIsVisible]=useState(false)

    
React. useEffect(() => {
   
}, [filterMyList]);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return  filterMyList.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, filterMyList]);

    const {route,navigate}= props
  
console.log("2.sayfa", location.state.list)
const [value, setValue] = React.useState(null);

const [optionValue, setOptionValue] =React. useState("");
const handleSelect = (e) => {
  console.log(e.target.value);
  setOptionValue(e.target.value);
};
 
const nameAscending=()=>{
 
 setFilterMyList (filterMyList.slice().sort((a, b) => a.full_name.localeCompare(b.full_name)))
}

const nameDescending=()=>{
 
    setFilterMyList (filterMyList.slice().sort((a, b) => b.full_name.localeCompare(a.full_name)))
   }
   const dateAscending=()=>{
 
 
    setFilterMyList( filterMyList.slice().sort((a, b)=> new Date(a.date).getTime().toString().localeCompare(new Date(b.date).getTime().toString())))
  
   }
   const dateDescending=()=>{
 
    setFilterMyList( filterMyList.slice().sort((a, b)=> new Date(b.date).getTime().toString().localeCompare(new Date(a.date).getTime().toString())))
   }
   
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

    <div  style={{flex:8}}>{  currentTableData .map((item, key) => <ListFilterItem city={item.city} key={key} country={item.country} name={item.full_name} date={item.date} />)}
</div>
    <div style={{flex:1,marginRight:100}}> 
   <button onClick={()=>setIsVisible(!isVisible)}>< CompareArrowsSharpIcon style={{rotate: '90deg'}}/> order by</button>

  {isVisible && <div style={{flex:1, marginTop:20}}>
   <button onClick={nameAscending} style={{width:150, height:40, backgroundColor:'transparent'}}> Name ascending</button>
   <button onClick={nameDescending} style={{width:150, height:40}}>Name descending</button>
   <button onClick={dateAscending} style={{width:150, height:40}}>Date ascending</button>
   <button  onClick={dateDescending} style={{width:150, height:40}}>Date descending</button>
   </div>}
      </div>

   </div>

<div style={{display:'flex', justifyContent:'center', alignContent:'center', marginRight:250, marginTop:50}}>
   <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={location.state.list.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />

</div>
    </div>

  );
};

export default ShowMoreList;