import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { Config } from "./Config";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import userlogo  from "../Assets/user.svg";
import UserContext from "./usercontext";

import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';



function UserLogin() {

  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState([]);
  
  let userData = useContext(UserContext);

  const validationSchema = yup.object({
    username: yup.string("Enter username").required("Username is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        const userlogin = await axios.post(`${Config.api}/userlogin`, values);
        localStorage.setItem("react-app-token", userlogin.data.token);
        // console.log(userlogin.data._id);
        userData.setCurrentUser(userlogin.data._id);
        if (userlogin.data.error) {
          toast.error("Error: " + userlogin.data.error);
        } else {
          toast.success(userlogin.data.message);
        // localStorage.setItem("react-app-token", userlogin.data.token);
          navigate("/userview")
        }

      


        
      } catch (error) {
        console.log(error);
      }
      // alert(JSON.stringify(values));
      // navigate("/userView");
    },
   
  });
  
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const handleChangee = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  return (
    <>
      <div className="container login-container">
        <section className="forget text-center">
          {/* <div className="image-login"></div> */}

          <div className="content-login">
          <img src={userlogo} alt="user" className="p-2"/>
            <h4 className="loginhead">Hi user !</h4>

            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="form-box">
                  <div className="input-group mb-3">
                    <TextField
                      id="outlined-basic"
                      label="Username"
                      variant="outlined"
                      size="small"
                      sx={{ width: "52ch" }}
                      type={"text"}
                      error={
                        formik.touched.username &&
                        Boolean(formik.errors.username)
                      }
                      helperText={
                        formik.touched.username && formik.errors.username
                      }
                      name={"username"}
                      value={formik.values.username}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="input-group mb-3">
                    {/* <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      size="small"
                      sx={{ width: "52ch" }}
                      type={"text"}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      name={"password"}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    /> */}

          <FormControl sx={{  width: '52ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            size="small"
            type={values.showPassword ? 'text' : 'password'}
            value={formik.values.password}
            name={"password"}
            onChange={formik.handleChange('password')}
            error={
              formik.touched.password &&
              Boolean(formik.errors.password)
            }
            helperText={
              formik.touched.password && formik.errors.password
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
                  </div>

                  <div className="input-group mb-3">

                  </div>

                  <div className="d-grid gap-2">
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>

                  <div className="my-5">
                    <Link className="text-decoration-none" to="/userregister">
                      Not have an account | Sign up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default UserLogin;
