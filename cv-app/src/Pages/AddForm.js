import React ,{useState} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
import logo from "../../src/Assets/tesodev.jpg";
import { useNavigate } from "react-router-dom";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
 

const AddForm = () => {
    
    const DisplayingErrorMessagesSchema = Yup.object().shape({
        nameSurname: Yup.string()
          .min(2, 'Too Short!')
          .max(60, 'Too Long!').required(" ")
         ,
          country: Yup.string()
          .min(2, 'Too Short!')
          .max(40, 'Too Long!').required(" "),
           
          city: Yup.string()
          .min(2, 'Too Short!')
          .max(40, 'Too Long!').required(" "),
           



        email: Yup.string().email('Invalid Email').required(" ")
      });
   
   
      let navigate = useNavigate();
      const goToMain = () => {
        navigate(`/`);
      };

      const [errPop, setErrPop]= useState(false);


  return (
    
    <div style={{display:'flex', flexDirection:'column'}}>

        <div style={{flexDirection:'row', flex:1}}>
        <div style={{flex:1}}>  <img src={logo} alt="Canvas Logo" style={{width:200, height:100}} /> <button onClick={goToMain} style={{backgroundColor:'transparent', borderColor:'transparent', fontSize:'18px', fontWeight:'bold'}}> <KeyboardBackspaceSharpIcon/> Return to List Page </button></div>
     
        </div>
    
     <Formik
    
      isInitialValid = {false}
       initialValues={{
         nameSurname: '',
         country: '',
         city:'',
         email:''

       }}
   
       validationSchema={DisplayingErrorMessagesSchema}
       onSubmit={values => {
      

      console.log('boş gelen')
       
         console.log(values);
       }}
     >
       {({ errors, touched, isValid   }) => (
         <Form>

            <div style={{height:380, width:300, display:'flex', marginLeft:200,marginTop:30, flexDirection:'column'}}>
          
          <div style={{height:80,width:600}}>
          <div style={{ fontWeight:'bold', color: errors.nameSurname ? 'red': 'black'}}>Name Surname</div>
           <Field style={{height:35,width:600, borderRadius:18, marginTop:5 ,borderColor: errors.nameSurname ? 'red': 'black'}}  name="nameSurname" placeholder='Enter name and surname' />
          {touched.nameSurname && errors.nameSurname && <div style={{color:'red'}}>{errors.nameSurname}</div>}
          </div>

          <div style={{height:80,width:600, marginTop:10}}>
           <div style={{ fontWeight:'bold',color: errors.country ? 'red': 'black'}}>Country</div>
           <Field style={{height:35,width:600, borderRadius:18, marginTop:5, borderColor: errors.country ? 'red': 'black'}} name="country"  placeholder='Enter a country'/>
           {touched.country && errors.country && <div style={{color:'red'}}>{errors.country}</div>}
           </div>

           <div style={{height:80,width:600, marginTop:10}}>
           <div style={{ fontWeight:'bold', color: errors.city ? 'red': 'black'}}>City</div>
           <Field style={{height:35,width:600, borderRadius:18, marginTop:5 ,borderColor: errors.city ? 'red': 'black'}} name="city" placeholder='Enter a city'/>
           {touched.city && errors.city && <div style={{color:'red'}}>{errors.city}</div>}
           </div>

           <div style={{height:80,width:600, marginTop:10}}>
           <div style={{ fontWeight:'bold',  color: errors.email ? 'red': 'black'}}>Email</div>
         
           <Field style={{height:35,width:600, borderRadius:18, marginTop:5 ,borderColor: errors.email ? 'red': 'black'}} name="email" placeholder='Enter a email(abc@xyz.com)'/>
           {touched.email && errors.email && <div style={{color:'red'}}>{errors.email}</div>}
           </div>
          
           <div style={{height:80,width:600, marginTop:10}}>
           <button onClick={()=> isValid===false ? setErrPop(true): setErrPop(false)} style={{borderRadius:18, borderColor:'transparent',color:'white' ,backgroundColor: !isValid ? '#4F75C2' : '#204080',  marginTop:20, marginLeft:500, width:100}} type="submit">Submit</button>
           </div>
           </div>
         </Form>
       )}
     </Formik>
     

  {errPop &&   <div style={{  width:375, height:133, backgroundColor:'#C4C4C4', marginLeft:950, borderRadius:10}}>
<div style={{ height:25}}> <button onClick={()=> setErrPop(false)} style={{backgroundColor:'transparent', borderColor:'transparent', marginLeft:321}}> <HighlightOffIcon /> </button></div>
<div style={{ height:25, fontSize:'14px', fontWeight:'bold', marginLeft:18}}> Error while adding with element</div>
<div style={{ height:25,width:55, fontSize:'14px', fontWeight:'bold',  backgroundColor:'#FF4E78', borderRadius:20, marginLeft:275}}><div style={{color:'white',marginLeft:10}}> Error </div> </div>
<div  style={{ height:48, fontSize:'14px', width:240, marginLeft:18 }}> Name and surname should contain at least 2 words</div>

     </div>}
   </div>
  );
};

export default AddForm;





