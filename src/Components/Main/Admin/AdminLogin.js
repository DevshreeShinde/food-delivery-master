import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
// UI maker pr designer
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import Navigation from "../../Navigation/Navigation";
import AdminNavigate from "../../Navigation/AdminNavigation";

export default function AdminLogin() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
  const [backData, SetBacKData] = useState([]);

    const setYourEmail = (e) => {
        setEmail(e.target.value);
      };
    
      const setYourPassword = (e) => {
        setPassword(e.target.value);
      };

      function check(){
        backData.map((ele)=>{
            if(ele.email===email && ele.password===password || ele.mobileNo==email && ele.password===password){
                navigate("/adminHome")
            }
        })
      }

      useEffect(() => {
        axios
          .get("http://localhost:9100/admins")
          .then((response) => SetBacKData(response.data));
      }, []);
  return (
    <>
        <AdminNavigate/>
        <MDBContainer className="my-5" >
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://img.freepik.com/premium-vector/food-delivery-man-holding-fast-food-box-city-background-fast-food-delivery-service-cartoon-design-concept-vector-illustration_88114-305.jpg?w=2000"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h4 fw-bold mb-0">FoodDelivery</span>
                </div>

                <h2
                  className="fw-bold my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  {" "}
                  Admin Login
                </h2>

                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg1"
                  type="email"
                  placeholder=" Your Email / MobileNo"
                  size="lg"
                  onChange={(e) => setYourEmail(e)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  id="formControlLg"
                  type="password"
                  placeholder=" Your Password"
                  size="lg"
                  onChange={(e) => setYourPassword(e)}
                />

                <MDBBtn
                  className="mb-4 px-5"
                  color="primary"
                  size="lg"
                 onClick={check}
                >
                  Login
                </MDBBtn>
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Do not have an account!{" "} Contact us at deveshreeshinde@gmail.com
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </>
  )
}
