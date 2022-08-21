import React, { useState , useEffect }from 'react';
import { SearchField,  useTheme } from '@aws-amplify/ui-react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Config } from "./Config";
import { toast } from "react-toastify";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useFormik } from "formik";
import * as yup from "yup";
// import { Button } from '@aws-amplify/ui-react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import UserContext from './usercontext';




import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

function DriverView() {
  const { tokens } = useTheme();
  const [user, setUser] = useState([]);

  const [show, setShow] = useState(false);
  const [booking , setBooking] = useState([]);

  const handleClose = () => setShow(false);

  const [currentUser, setCurrentUser] = useState([]);

  let fetchData = async () => {
    try {
      let userData = await axios.get(`${Config.api}/getuserdata`, {
        headers: {
          Authorization: `${localStorage.getItem("react_app_token")}`,
        },
      });
      setUser(userData.data);
      console.log(userData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const validationSchema = yup.object({
    amount : yup.string("Enter Price")
    // .min(4, "Password should be of minimum 4 characters length")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(2, 'Must be greater then 2 digits')
   .max(5, 'Must be less 5 digits')
    .required("Price is required"),
  });

  const formik = useFormik({
    initialValues: {
      amount: "",
      
    },

    validationSchema: validationSchema,

    onSubmit: async (values) => {
      // try {
      //   const amount = await axios.post(`${Config.api}/amount`, values);
       
      //   if (amount.data.error) {
      //     toast.error("Error: " + amount.data.error);
      //   } else {
      //     toast.success(amount.data.message);
      //     formik.resetForm();
        // localStorage.setItem("react-app-token", bookingData.data.token);
          // navigate("/")
        // }

      
alert(JSON.stringify(values));

        
      // } catch (error) {
      //   console.log(error);
      // }
      // alert(JSON.stringify(values));
    }
});


  const handleShow = async (id) => {
    // setShow(true);
    try{
      let bookingData = await axios.get(`${Config.api}/getuserdata/${id}`, {
        // headers: {
        //   Authorization: `${localStorage.getItem("react_app_token")}`,
        // },
      });
      setBooking(bookingData.data);
      setShow(true);
      formik.resetForm();
    }
    catch(error){
      console.log(error);
    }}

 


  return (
    <>
    <div className='container my-5'>
    <div className="row">
      
      <SearchField
      label="search"
      fontSize={tokens.fontSizes.xl}
      backgroundColor={tokens.colors.blue[20]}
      color={tokens.colors.black}
    />
   {
    currentUser.map((user , i) => {
      return(
        <>
        <h4>{user._id}</h4></>
      )
    })
   }
    
      
   


     
       
        <div className="row  my-4">
        
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>id</th>
          <th>Pickup location</th>
          <th>Destination</th>
          <th>Pickup time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          user.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item._id}</td>
                <td>{item.pickup}</td>
                <td>{item.destination}</td>
                <td>{item.time}</td>
                <td>
                  <button className='btn btn-primary  btn-sm mx-2'   onClick={() => handleShow(item._id)}>Accept</button>
                 
                  <button className='btn btn-danger btn-sm m-2' >Reject</button>
                </td>
              </tr>
            )
          })
        }
       
       
        
      </tbody>
    </Table>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please enter price</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group>
              <h6 className='my-1'>From : {booking.pickup} </h6>
              <h6 className='my-1'>Destination : {booking.destination}</h6>
              <h6 className='my-1'>Time : {booking.time} </h6>
            </Form.Group>

            <Form.Group className="my-5" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              /> */}
          
          <TextField id="outlined-basic" label="Price" variant="outlined" 
           sx={{  width: "50ch" , height: "5ch" }}
          //  size="small"
            type={"text"}
            error={
              formik.touched.amount &&
              Boolean(formik.errors.amount)
            }
            helperText={
              formik.touched.amount && formik.errors.amount
            }
            name={"amount"}
            value={formik.values.amount}
            onChange={formik.handleChange}
           />
         
              
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick= { formik.handleSubmit } >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
        </div>
        
       
        </div>   
    </div>
    </>
  )
}

export default DriverView