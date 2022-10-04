import React,{useState} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
import logo from "../../src/Assets/tesodev.jpg";
import MockData from '../Data/Mock.json'

const AddForm = (props) => {
    
    const DisplayingErrorMessagesSchema = Yup.object().shape({
        nameSurname: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
          country: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
          city: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),



        email: Yup.string().email('Invalid email').required('Required'),
      });
   
   



  return (
    
    <div style={{display:'flex', flexDirection:'column'}}>

        <div style={{flexDirection:'row', flex:1}}>
        <div style={{flex:1}}>  <img src={logo} alt="Canvas Logo" style={{width:200, height:100}} /> <button style={{backgroundColor:'transparent', borderColor:'transparent'}}> <KeyboardBackspaceSharpIcon/> Return to List Page </button></div>
     
        </div>
    
     <Formik
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
       {({ errors, touched }) => (
         <Form>

            <div style={{height:400, width:300, display:'flex', marginLeft:200,marginTop:30, flexDirection:'column'}}>
          
          <div>Name Surname</div>
           <Field  name="nameSurname" placeholder='Enter name and surname' />
          {touched.nameSurname && errors.nameSurname && <div>{errors.nameSurname}</div>}
         
          
           <div>Country</div>
           <Field name="country"  placeholder='Enter a country'/>
           {touched.country && errors.country && <div>{errors.country}</div>}

           <div>City</div>
           <Field name="city" placeholder='Enter a city'/>
           {touched.city && errors.city && <div>{errors.city}</div>}

           <div>Email</div>
           <Field name="email" placeholder='Enter a email(abc@xyz.com)'/>
           {touched.email && errors.email && <div>{errors.email}</div>}
          
          
           <button style={{marginTop:50, marginLeft:100}} type="submit">Submit</button>

           </div>
         </Form>
       )}
     </Formik>
   </div>
  );
};

export default AddForm;





