 
import React, { useState, useMemo } from 'react';
import Pagination from '../Components/Pagination/Pagination';
import {useLocation} from 'react-router-dom';
import logo from "../../src/Assets/tesodev.jpg";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import Buttons from "../Components/Buttons";
import ListFilterItem from '../Components/ListFilterItem';
import CompareArrowsSharpIcon from '@mui/icons-material/CompareArrowsSharp';

import { useNavigate } from 'react-router-dom';

 



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

  
  
console.log("2.sayfa", location.state.list)
const [value, setValue] = React.useState(null);

const [optionValue, setOptionValue] =React. useState("");
const handleSelect = (e) => {
  console.log(e.target.value);
  setOptionValue(e.target.value);
};
 
const nameAscending=()=>{
  setSelectOrder(1)
 
 setFilterMyList (filterMyList.slice().sort((a, b) => a.full_name.localeCompare(b.full_name)))
}

const nameDescending=()=>{
  setSelectOrder(2)
 
    setFilterMyList (filterMyList.slice().sort((a, b) => b.full_name.localeCompare(a.full_name)))
   }
   const dateAscending=()=>{
 
    setSelectOrder(3)
    setFilterMyList( filterMyList.slice().sort((a, b)=> new Date(a.date).getTime().toString().localeCompare(new Date(b.date).getTime().toString())))
  
   }
   const dateDescending=()=>{
    setSelectOrder(4)
    setFilterMyList( filterMyList.slice().sort((a, b)=> new Date(b.date).getTime().toString().localeCompare(new Date(a.date).getTime().toString())))
   }

   let navigate = useNavigate();
   const goToForm=()=> {
     
    navigate(`/form`);
  }

  const [selectOrder, setSelectOrder]= useState(0)
   
  return (
    <div>

    <div style={{display:'flex', flexDirection:'row', marginTop:30, marginLeft:50}}>
         <div style={{flex:1}}>  <img src={logo} alt="Canvas Logo" style={{width:200, height:100}} /></div>
         <div  style={{flex:4, marginTop:30}}> 
         <Search>
            <SearchIconWrapper>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setValue(e.target.value)}
              value={location.state.value}
            />
          </Search>
         </div>
         <div  style={{flex:2,  marginTop:30}}>   <Buttons color='white' backgroundColor='#4F75C2' title="Search"/></div>
         <div  style={{flex:2,  marginTop:30}}> <Buttons onClick={goToForm} title="Add new record"  color='white' backgroundColor='#204080'/></div>
    </div>
    <div style={{flexDirection:'row', display:'flex'}}>

    <div  style={{flex:8,  marginTop:40}}>{  currentTableData .map((item, key) => <ListFilterItem city={item.city} key={key} country={item.country} name={item.full_name} date={item.date} />)}
</div>
    <div style={{flex:1,marginRight:100}}> 
   <button style={{width:137, height:40, borderRadius:18}} onClick={()=>setIsVisible(!isVisible)}>< CompareArrowsSharpIcon style={{rotate: '90deg'}}/> order by</button>

  {isVisible && <div style={{flex:1, marginTop:20, borderRadius:18, height:130, width:145, borderColor:'grey', borderWidth:1, borderStyle:'inset'}}>
   <button onClick={nameAscending} style={{justifyContent:'center', borderStyle:'hidden', width:137, height:30, borderRadius:18, backgroundColor: selectOrder===1 ?'grey':'transparent', fontSize:'14px'}}> Name ascending</button>
   <button onClick={nameDescending} style={{justifyContent:'center',  borderStyle:'hidden',width:137, height:30, borderRadius:18, backgroundColor:selectOrder===2 ?'grey':'transparent' , fontSize:'14px'}}>Name descending</button>
   <button onClick={dateAscending} style={{ justifyContent:'center',borderStyle:'hidden',width:137, height:30, borderRadius:18, backgroundColor:selectOrder===3 ?'grey':'transparent' , fontSize:'14px'}}>Date ascending</button>
   <button  onClick={dateDescending} style={{ justifyContent:'center',borderStyle:'hidden',width:137, height:30, borderRadius:18, backgroundColor:selectOrder===4 ?'grey':'transparent', fontSize:'14px'}}>Date descending</button>
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