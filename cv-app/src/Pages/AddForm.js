import React  from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
import logo from "../../src/Assets/tesodev.jpg";
import { useNavigate } from "react-router-dom";
 

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
      

      
       
         console.log(values);
       }}
     >
       {({ errors, touched, isValid , status }) => (
         <Form>

            <div style={{height:600, width:300, display:'flex', marginLeft:200,marginTop:30, flexDirection:'column'}}>
          
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
           <button onClick={()=>console.log("error", errors)} style={{borderRadius:18, borderColor:'transparent',color:'white' ,backgroundColor: !isValid ? '#4F75C2' : '#204080',  marginTop:20, marginLeft:500, width:100}} type="submit">Submit</button>
           </div>
           </div>
         </Form>
       )}
     </Formik>
   </div>
  );
};

export default AddForm;





