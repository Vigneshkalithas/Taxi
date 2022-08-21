import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { Config } from "./Config";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
// import Button from 'react-bootstrap/Button';
import { BiRightArrowAlt } from "react-icons/bi";
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import UserContext from "./usercontext";



function UserView() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Swal = require('sweetalert2')


  // const Item = styled(Paper)(({ theme }) => ({
  //   ...theme.typography.body2,
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  //   height: 60,
  //   lineHeight: '60px',
  // }));

  // const darkTheme = createTheme({ palette: { mode: 'dark' } });

  const validationSchema = yup.object({
    pickup: yup.string("Enter pickup location").required("location is required"),
    destination: yup.string("Enter destination").required("destination is required"),
    time: yup.string("Enter time").required("time is required"),
  });

  const formik = useFormik({
    initialValues: {
      pickup: "",
      destination: "",
      time:"",
    },

    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        const bookingData = await axios.post(`${Config.api}/userbookingdatas`, values);
        
       
        if (bookingData.data.error) {
          toast.error("Error: " + bookingData.data.error);
        } else {
          toast.success(bookingData.data.message);
          formik.resetForm();
        localStorage.setItem("react-app-token", bookingData.data.token);
          // navigate("/")
        }

      
// alert(JSON.stringify(values));

        
      } catch (error) {
        console.log(error);
      }
      
    }
});

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success mx-1',
    cancelButton: 'btn btn-danger mx-1'
  },
  buttonsStyling: false
})


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col my-2">
            {/* <ThemeProvider theme={darkTheme}> */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 400,
                  height: 470,
                },
              }}
            >
              <Paper elevation={16}>
                <div className="mx-3">
                  <div className="center">
                   
                  <h2 className="text-justify my-2 whereText">
                    Where can we pick <br />
                    you up ?
                  </h2>
                  <form onSubmit={formik.handleSubmit}>
                  <div className="my-2">
                    <TextField
                      id="filled-basic"
                      sx={{ m: 1, width: "40ch" }}
                      label="Add a pickup location"
                      variant="filled"
                      size="small"
                      
                      type={"text"}
                      error={
                        formik.touched.pickup &&
                        Boolean(formik.errors.pickup)
                      }
                      // helperText={
                      //   formik.touched.pickup && formik.errors.pickup
                      // }
                      name={"pickup"}
                      value={formik.values.pickup}
                      onChange={formik.handleChange}
                    />
                  </div>
                  
                  <div className="my-2">
                    <TextField
                      id="filled-basic"
                      sx={{ m: 1, width: "40ch" }}
                      label="Enter your destination"
                      variant="filled"
                      size="small"

                      type={"text"}
                      error={
                        formik.touched.destination &&
                        Boolean(formik.errors.destination)
                      }
                      // helperText={
                      //   formik.touched.destination && formik.errors.destination
                      // }
                      name={"destination"}
                      value={formik.values.destination}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="my-2">
                    <TextField
                      id="filled-basic"
                      sx={{ m: 1, width: "40ch" }}
                      label="Pickup time"
                      variant="filled"
                      size="small"
                      
                      type={"text"}
                      error={
                        formik.touched.time &&
                        Boolean(formik.errors.time)
                      }
                      // helperText={
                      //   formik.touched.time && formik.errors.time
                      // }
                      name={"time"}
                      value={formik.values.time}
                      onChange={formik.handleChange}
                    />
                  </div>
                <div className="center">
                <button
                      className="btn btn-dark my-2"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                    
                  
                  </form>
                </div>

                </div>
                <div className="d-flex justify-content-end mt-4 mx-1">
                {/* <Button variant="link" className="text-decoration-none" onClick={()=>alert("hi")} >Check Status </Button> */}
                <Button sx={{textTransform: 'none'}} variant="text" onClick={() => handleShow()}>Check Status 
                <span><BiRightArrowAlt/></span></Button>
                </div>
              </Paper>
            </Box>
            {/* <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="center">
            <div>
             <h1 className="text-center">Status</h1> 
              </div></Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <h4>Driver Id : </h4>
          <h4>Price : </h4>
          <h4>Request Status : </h4>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="contained" color="error" sx={{textTransform: 'none'}} onClick={()=>alert("thanks")}>Confirm</Button>
      </Modal.Footer>
      </Modal> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Status</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <div>
        <h5>Driver Id :</h5>
        <h5>Request Status :</h5>
        <h5>Price : </h5>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" color="inherit" sx={{textTransform: 'none' , m:1}} onClick={handleClose}>
            Close
          </Button>
        <Button variant="contained" color="error" sx={{textTransform: 'none' , m:1}} 
        onClick={() =>
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
           
            showCancelButton: true,
            confirmButtonText: 'Pay Now!',
            
            cancelButtonText: 'Decline!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                
                'payment successful!',
                'Your ride has been confirmed.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Declined',
                'Your ride had been declined.',
                'error'
              )
            }
          })
        }
        >Confirm</Button>
        </Modal.Footer>
      </Modal>
            {/* </ThemeProvider> */}
          </div>
          {/* <div className="col"></div>
          // <div className="col"></div> */}
        </div>
      </div>
    </>
  );
}

export default UserView;


// Swal.fire({
//   icon: "success",
//   title: "Your request has been confirmed",
//   html: `<h4>From : </h4>
// <h4>To :</h4>`,
// })