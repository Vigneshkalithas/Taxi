import React , { useEffect } from "react";
import locate from "./Assets/location.svg";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { BiTime } from "react-icons/bi";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import safety from "./Assets/helmet.svg";
import community from "./Assets/community-students.svg";
import customer from "./Assets/customer-support.svg";
import { useNavigate } from "react-router-dom";
import { Config } from "./Components/Config";
// import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  const array = [
    {
      logo: <BiTime />,
      title: "Rides on demand",
      para: "Request a ride at any time and on any day of the year",
    },
    {
      logo: <GiTakeMyMoney />,
      title: "Budget-friendly options",
      para: "Compare prices on every kind of ride, from daily commutes to special evenings out.",
    },
    {
      logo: <GrLocation />,
      title: "An easy way to get around",
      para: "Tap and let your driver take you where you want to go.",
    },
  ];
  const Safety = [
    {
      logo: safety,
      title: "Safety features",
      para: "Tell your loved ones where you are. Get help with the tap of a button. Technology makes travel safer than ever before",
    },
    {
      logo: community,
      title: "An inclusive community",
      para: "We are millions of riders and drivers who share Community Guidelines and depend on one another to do the right thing.",
    },
    {
      logo: customer,
      title: "Help if you need it",
      para: "Get 24/7 support in the app for any questions or safety concerns you might have.",
    },
  ];


 const userCheck = ()=>{
    if(localStorage.getItem("react-app-token")){
      navigate("/userview")
    }
    else{
      navigate("/userlogin")
    }
    }
      
     



// useEffect(() => {
     
//   getData();

  
// }, [])

  

  return (
    <>
      <div className="container my-1">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="Home-titles">
              <h1 className="my-1">Always the ride </h1>
              <h1>
                you want...
                <span>
                  <img src={locate} alt="location" />
                </span>
              </h1>
              <p className="my-3">Request a ride, hop in, and relax.</p>

              <div className="my-2">
                <button className="btn btn-dark px-4 py-3" onClick={()=>userCheck()}>
                  Sign up to ride
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="home-image">
              <img
                className="img-fluid"
                src="https://i.pinimg.com/originals/f3/a5/a9/f3a5a976246be154e795a444458b2b98.gif"
                alt="home page gif"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <div className="row my-3">
          <div className="home-headlines">
            <h2>
              Why use the <span className="text-taxi">Taxi</span> app?
            </h2>
          </div>
          <div className="img-fluid m-3">
            <img
              src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_1703,h_399/v1536163144/assets/27/d1f66e-c9c5-455a-b912-234700f4c0d8/original/whyRideWithUs_desktop.svg"
              alt="why-image"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row my-4">
          {array.map((item, index) => {
            return (
              <>
                <div className="col" key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        m: 1,
                        width: 330,
                        height: 170,
                      },
                    }}
                  >
                    <Paper elevation={3}>
                      <div className="text-justify p-3">
                        {/* <{item.logo} className='fs-4 my-2'/> */}
                        <div className="fs-4 my-1">{item.logo}</div>
                        <h5 className="">{item.title}</h5>
                        <p className="">{item.para}</p>
                      </div>
                    </Paper>
                  </Box>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="container my-4">
        <div className="row my-4">
          <div>
            <h2 className="home-headlines">Your safety matters</h2>
          </div>
          {Safety.map((item, index) => {
            return (
              <>
                <div className="col my-3" key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        m: 1,
                        width: 330,
                        height: 227,
                      },
                    }}
                  >
                    <Paper elevation={3}>
                      <div className="text-justify p-3">
                        <div className="img-fluid my-1">
                          <img src={item.logo} alt={item.title} />
                        </div>
                        <h5 className="my-3">{item.title}</h5>
                        <p className="my-1">{item.para}</p>
                      </div>
                    </Paper>
                  </Box>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
