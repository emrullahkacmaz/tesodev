import React, { useState, useMemo } from "react";
import Pagination from "../Components/Pagination/Pagination";
import { useLocation } from "react-router-dom";
import logo from "../../src/Assets/tesodev.png";
import orderIcon from "../../src/Assets/orderIcon.png";


import Buttons from "../Components/Buttons";
import ListFilterItem from "../Components/ListFilterItem";
import CompareArrowsSharpIcon from "@mui/icons-material/CompareArrowsSharp";

import { useNavigate } from "react-router-dom";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../Components/Search/searchStyles";
import { fontFamily } from "@mui/system";

const FilteredList = (props) => {
 
  let PageSize = 5;
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [filterMyList, setFilterMyList] = useState(location.state.list);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {}, [filterMyList]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filterMyList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filterMyList]);
 
 



  const orderFilter = (item) => {
    if (item === "nameAscending") {
      setFilterMyList(
        filterMyList
          .slice()
          .sort((a, b) => a.full_name.localeCompare(b.full_name))
      );
      setSelectOrder(1);
    }

    if (item === "nameDescending") {
      setFilterMyList(
        filterMyList
          .slice()
          .sort((a, b) => b.full_name.localeCompare(a.full_name))
      );
      setSelectOrder(2);
    }

    if (item === "dateAscending") {
      setFilterMyList(
        filterMyList.slice().sort((a, b) =>
          new Date(a.date)
            .getTime()
            .toString()
            .localeCompare(new Date(b.date).getTime().toString())
        )
      );
      setSelectOrder(3);
    }

    if (item === "dateDescending") {
      setFilterMyList(
        filterMyList.slice().sort((a, b) =>
          new Date(b.date)
            .getTime()
            .toString()
            .localeCompare(new Date(a.date).getTime().toString())
        )
      );
      setSelectOrder(4);
    }
  };

 

  let navigate = useNavigate();
  const goToForm = () => {
    navigate(`/forms`);
  };

  const [selectOrder, setSelectOrder] = useState(0);

  console.log("tabledata", currentTableData)
  return (
    <div style={{display:'flex',backgroundColor:'#E5E5E5' , flexDirection:'column'}}>
         <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 30,
          marginLeft: 50,
        }}
      >
        <div style={{ marginLeft:'37px', marginTop:'27px' }}>
          {" "}
          <img
            src={logo}
            alt="Canvas Logo"
            style={{ width:'149px', height:'63px' }}
          />
        </div>
        <div style={{ width:'509px',height:'46px',marginLeft:'35px',  marginTop:'35px' }}>
          <Search>
         
            <StyledInputBase
            paddingSearch='10px'
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
             
              value={location.state.value}
            />
          </Search>
        </div>
        <div style={{marginLeft:'24px', marginTop:'32px' }}>
          {" "}
          <Buttons
          width='138px'
          height='46px'
          fontFamily='Roboto'
          bold='700'
          font='18px'
            color="#FFFFFF"
            backgroundColor='#4F75C2'
            title="Search"
             
          />
        </div>
        <div style={{ marginLeft:'103px', marginTop:'32px'}}>
          {" "}
         
           <Buttons
        width='216px'
        height='46px'
        font='18px'
        bold='700'
        fontFamily='Roboto'
          backgroundColor="#204080"
          color="#FFFFFF"
          onClick={goToForm}
          title="Add new record"
        />
        </div>
      </div>

      <div style={{ flexDirection: "row", display: "flex", height:'500px' }}>
        <div style={{ display:'flex', width:'726px', marginTop:'72px', flexDirection:'column',backgroundColor:'#FFFFFF', marginLeft:'236px',borderColor:'transparent',  borderWidth: 1,borderRadius:'8px',borderStyle: "solid", }}>
          {currentTableData.map((item, index) => (
            <ListFilterItem
              city={item.city}
              mykey={index+1}
              length={currentTableData.length}
              country={item.country}
              name={item.full_name}
              date={item.date}
            />
          ))}
        </div>
        <div style={{flexDirection:'column', display:'flex', marginLeft:'17px',marginTop:'52px', width:'126px', height:'29px', borderColor:'transparent' }}>
          <button
            style={{
              width:'126px',
              height:'29px',
             
              borderWidth:'1px',
              borderRadius:'8px',
              borderColor: "#414141",
            }}
            onClick={() => setIsVisible(!isVisible)}
          >
            <div style={{flexDirection:'row', display:'flex'}} >
              <div><img
            src={orderIcon}
            alt="Canvas Logo"
            style={{ width:'26px', height:'24px' ,marginTop:'-12px'}}
          /></div>
              <div  style={{ width:'97px', height:'25px' ,marginTop:'-4px', fontSize:'18px', fontFamily:'Roboto', fontWeight:500, lineHeight:'21px', color:'#484848'}}> Order By</div>
              
         
          </div>
          </button>

          {isVisible && (
            <div
              style={{
                flex: 1,
                marginTop: '15px',
                borderRadius: '8px',
                height: '145px',
                width: '155px',
                borderColor: "#8F8F8F",
                backgroundColor:'#FFFFFF',
                borderWidth: 1,
                borderStyle: "inset",
                boxShadow:' 4px 6px 12px 4px'
              }}
            >
              <button
                onClick={() => orderFilter("nameAscending")}
                style={{
             display:'flex',
                  borderStyle: "hidden",
                  width: '127px',
                  height: '27px',
                  borderRadius: '8px',
                  backgroundColor: selectOrder === 1 ? "#B3B3B3" : "transparent",
                  fontSize: "14px",
                  fontWeight:700,
                  lineHeight:'16px',
                  fontFamily:'Roboto',
                  marginTop:'7px',
                  justifyContent:'flex-start',
                  marginLeft:'13px',


                 
                  color:selectOrder === 1 ? "#FFFFFF" : "#000000",

                }}
              >
              <div >Name ascending</div>
               
              </button>
              <button
                onClick={() => orderFilter("nameDescending")}
                style={{
                  borderStyle: "hidden",
                  width: '127px',
                  height: '27px',
                  borderRadius: '8px',
                  backgroundColor: selectOrder === 2 ? "#B3B3B3" : "transparent",
                  fontSize: "14px",
                  fontWeight:700,
                  lineHeight:'16px',
                  fontFamily:'Roboto',
                  marginTop:'5px',
                  justifyContent:'flex-start',
                  marginLeft:'13px',

                  
                  color:selectOrder === 2 ? "#FFFFFF" : "#000000",
                }}
              >
                <div style={{marginRight:'5px'}}>Name descending</div>
               
              </button>
              <button
                onClick={() => orderFilter("dateAscending")}
                style={{
                  borderStyle: "hidden",
                  width: '127px',
                  height: '27px',
                  borderRadius: '8px',
                  backgroundColor: selectOrder === 3 ? "#B3B3B3" : "transparent",
                  fontSize: "14px",
                  fontWeight:700,
                  lineHeight:'16px',
                  fontFamily:'Roboto',
                  marginTop:'5px',
                  justifyContent:'flex-start',
                  marginLeft:'13px',

                  
                  color:selectOrder === 3 ? "#FFFFFF" : "#000000",
                }}
              >
                <div style={{marginRight:'16px'}} >Date ascending</div>
               
              </button>
              <button
                onClick={() => orderFilter("dateDescending")}
                style={{
                  borderStyle: "hidden",
                  width: '127px',
                  height: '27px',
                  borderRadius: '8px',
                  backgroundColor: selectOrder === 4 ? "#B3B3B3" : "transparent",
                  fontSize: "14px",
                  fontWeight:700,
                  lineHeight:'16px',
                  fontFamily:'Roboto',
                  marginTop:'5px',
                  justifyContent:'flex-start',
                  marginLeft:'13px',
                
                  color:selectOrder === 4 ? "#FFFFFF" : "#000000",
                }}
              >
                <div   style={{marginRight:'10px'}}>Date descending</div>
                
              </button>
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginRight: 200,
          marginTop: 50,
        }}
      >
        <div style={{width:'100%', height:'150px', marginLeft:'346px', flex:1}}>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={location.state.list.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
        </div>
      </div>

      </div>
  );
};

export default FilteredList;
