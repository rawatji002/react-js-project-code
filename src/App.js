import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Button,Modal,Form,InputGroup,} from "react-bootstrap";

import './App.css';

function App() {

  const table1 = {
    "data": [
      { "ServiceA": "Package two", "Quatity": "", "Minimumtime": "1 Minutes", "StandardHours": "$10", "Extended": "$20", "Recurring" :"$" },
      { "ServiceA": "Package three", "Quatity": "", "Minimumtime": "1 Minutes", "StandardHours": "$10", "Extended": "$20", "Recurring" :"$" },
      { "ServiceA": "Package one", "Quatity": "1day", "Minimumtime": "30 Minutes", "StandardHours": "$10", "Extended": "$20", "Recurring" :"$" },
    ]
  }

  const table2 = {
    "data": [
      { "ServiceB": "Package five", "Quatity": "", "Minimumtime": "30 Minutes", "StandardHours": "$10", "Extended": "$20", "Recurring" :"$" },
      { "ServiceB": "Package four", "Quatity": "1 Cleaning", "Minimumtime": "30 Minutes", "StandardHours": "$10", "Extended": "$20", "Recurring" :"$" },
      { "ServiceB": "Package six", "Quatity": "1 Cleaning", "Minimumtime": "1 Hour", "StandardHours": "$10", "Extended": "$20", "Recurring" :"$" },
    ]
  }
  const table3 = {
    "data": [
      { "ServiceC": "Package eight", "Quatity": "", "Minimumtime": "30 Minutes", "StandardHours": "$10", "Extended": "$20", "Recurring" :"$" },
      { "ServiceC": "Package nine", "Quatity": "1 Cleaning", "Minimumtime": "30 Minutes", "StandardHours": "$10", "Extended": "$20", "Recurring" :"$" },
      { "ServiceC": "Package seven", "Quatity": "1 Cleaning", "Minimumtime": "1 Hour", "StandardHours": "$10", "Extended": "$20", "Recurring" :"$" },
    ]
  }

  const[sortedData,setSortedData]= useState([...table1.data]);

  const sortdata = (SortCategory, Order) => {
    const sorted = [...sortedData].sort((a, b) => {
      let aValue = a[SortCategory] || '';
      let bValue = b[SortCategory] || '';
      if (!isNaN(parseInt(aValue)) && !isNaN(parseInt(bValue))) {
        aValue = parseInt(aValue);
        bValue = parseInt(bValue);
      }
      console.log(`aValue: ${aValue}, bValue: ${bValue}`);
      if (Order === 'ASC') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });
    console.log('Sorted Array:', sorted);  
    setSortedData(sorted);
  };
  
  
  

  const [subcategoryA,setSubCategoryA] = useState(true)
  const [subcategoryB,setSubCategoryB] = useState(true)
  const [subcategoryC,setSubCategoryC] = useState(true)

const [Category,setCategory]= useState(false)

const [subcategory,setSubCategory]= useState(null)

const handlebutton =() => {
 setCategory(true)
 setSubCategoryA(true)
 setSubCategoryB(true)
 setSubCategoryC(true)
}

const handlesubA =()=> {
  setSubCategoryB(false)
  setSubCategoryC(false)
  setSubCategoryA(true)
  setSubCategory('A');
}

const handlesubB =()=> {
  setSubCategoryB(true)
  setSubCategoryA(false)
  setSubCategoryC(false)
  setSubCategory('B');
}
const handlesubC =()=> {
  setSubCategoryC(true)
  setSubCategoryB(false)
  setSubCategoryA(false)
  setSubCategory('C');
}

useEffect(()=> {
  handlebutton()
  setCategory()
},[])
  return (
    <div className="App pt-2">
     
     <Container className="boxshadow pt-2">
    
  
     <div className="" style={{padding:"1em"}}>
      <Row className="px-1">
        <Col lg={2} md={2} sm={2} className="col-4">
          <div className="mt-2">
      <span  style={{fontSize:"15px",fontWeight:"bold"}}>Category</span>
      </div>
      </Col>
      <Col lg={10} md={10} sm={8} className="col-8" style={{backgroundColor:"lightblue" ,borderRadius:"4px"}}>
      <Button className="button-1 m-1" onClick={handlebutton}>Category</Button>
      <div></div>
      </Col>
      </Row>
      <Row className="px-1 pt-2">
        <Col lg={2} md={2} sm={2} className="col-4">
          <div className="mt-2">
      <span  style={{fontSize:"15px",fontWeight:"bold"}}>SubCategory</span>
      </div>
      </Col>
      <Col lg={10} md={10} sm={8} className="col-8" style={{backgroundColor:"lightblue" ,borderRadius:"4px"}}>
  {Category ?   <>
      <Button className="button-1 m-1" onClick={handlesubA} disabled={subcategory === 'A'}>SubCategory A</Button>
      <Button className="button-1 m-1" onClick={handlesubB} disabled={subcategory === 'B'}>SubCategory B</Button>
      <Button className="button-1 m-1" onClick={handlesubC} disabled={subcategory === 'C'} >SubCategory C</Button>
         </>
         :""
    } 
      <div></div>
      </Col>
      </Row>
     </div>
     <>
  {subcategoryA ?
        <div className=" pt-2 p-3">
        <div className="d-flex background" style={{justifyContent:"space-between"}} >
        <div  className="col onhover" onClick={() => sortdata("ServiceA")} >Service A</div>
        <div  className="col onhover" onClick={() => sortdata("Quantity")}>Quantity</div>
        <div  className="col onhover" onClick={() => sortdata("Minimumtime")}>Minimumtime</div>
        <div  className="col onhover" onClick={() => sortdata("StandardHours")}>Standard Hours</div>
        <div  className="col onhover" onClick={() => sortdata("Extended")}>Extended</div>
        <div  className="col onhover" onClick={() => sortdata("Recurring")}>Recurring</div>
        </div>
        {table1.data.map((e) => (
  <div  className="d-flex mt-2" style={{justifyContent:"space-between",textAlign:"left"}}>
    <div className="col">{e.ServiceA}</div>
    <div className="col" >{e.Quatity}</div>
    <div className="col">{e.Minimumtime}</div>
    <div className="col">{e.StandardHours}</div>
    <div className="col">{e.Extended}</div>
    <div className="col">{e.Recurring}</div>
  </div>
))}
     
        </div>
        :""}
        </>
        <>
{subcategoryB ? 
        <div className=" pt-2 p-3">
        <div className="d-flex background" style={{justifyContent:"space-between"}} >
        <div  className="col onhover" onClick={() => sortdata("ServiceB")}>Service B</div>
        <div  className="col onhover" onClick={() => sortdata("Quantity")}>Quantity</div>
        <div  className="col onhover" onClick={() => sortdata("Minimumtime")}>Minimumtime</div>
        <div  className="col onhover" onClick={() => sortdata("StandardHours")}>Standard Hours</div>
        <div  className="col onhover" onClick={() => sortdata("Extended")} >Extended</div>
        <div  className="col onhover" onClick={() => sortdata("Recurring")} >Recurring</div>
        </div>
        {table2.data.map((e) => (
  <div  className="d-flex mt-2" style={{justifyContent:"space-between",textAlign:"left"}}>
    <div className="col" >{e.ServiceB}</div>
    <div  className="col" >{e.Quatity}</div>
        <div  className="col" >{e.Minimumtime}</div>
        <div  className="col" >{e.StandardHours}</div>
        <div  className="col" >{e.Extended}</div>
        <div  className="col" >{e.Recurring}</div>
  </div>
))}
     
   
        </div>
 :""}
 </>
 <>
{subcategoryC  ? 
        <div className=" pt-2 p-3">
        <div className="d-flex background" style={{justifyContent:"space-between"}} >
        <div  className="col onhover" onClick={() => sortdata("ServiceC")}>Service C</div>
        <div  className="col onhover" onClick={() => sortdata("Quantity")}>Quantity</div>
        <div  className="col onhover" onClick={() => sortdata("Minimumtime")}>Minimumtime</div>
        <div  className="col onhover" onClick={() => sortdata("StandardHours")}>Standard Hours</div>
        <div  className="col onhover" onClick={() => sortdata("Extended")}>Extended</div>
        <div  className="col onhover" onClick={() => sortdata("Recurring")}>Recurring</div>
        </div>
        {table3.data.map((e) => (
  <div  className="d-flex mt-2" style={{justifyContent:"space-between",textAlign:"left"}}>
    <div className="col">{e.ServiceC}</div>
    <div className="col" >{e.Quatity}</div>
    <div className="col">{e.Minimumtime}</div>
    <div className="col">{e.StandardHours}</div>
    <div className="col">{e.Extended}</div>
    <div className="col">{e.Recurring}</div>
  </div>
))}
     
        </div>
        :""}
        </>
     </Container>

     

    </div>
  );
}

export default App;
