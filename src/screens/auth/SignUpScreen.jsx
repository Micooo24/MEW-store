import React, { useState } from "react";
import styled from "styled-components";
import {
  CheckboxGroup,
  FormGridWrapper,
  FormTitle,
} from "../../styles/form_grid";
import { Container } from "../../styles/styles";
import { staticImages } from "../../utils/images";
import AuthOptions from "../../components/auth/AuthOptions";
import { FormElement, Input } from "../../styles/form";
import { Link } from "react-router-dom";
import { BaseButtonBlack } from "../../styles/button";


const SignUpScreenWrapper = styled.section`

  form {
    margin-top: 40px;
    .form-elem-text {
      margin-top: -16px;
      display: block;
    }
  }

  .text-space {
    margin: 0 4px;
  }
    
    
`;

const SignUpScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SignUpScreenWrapper>
      <FormGridWrapper>
        <Container>
          <div className="form-grid-content">
            <div className="form-grid-left">
              <img
                src={staticImages.form_img2}
                className="object-fit-cover"
                alt=""
              />
            </div>
            <div className="form-grid-right">
              <FormTitle>
                <h3>Sign Up</h3>
                <p className="text-base">
                  Sign up for free to access to in any of our products
                </p>
              </FormTitle>
              <AuthOptions />
              <form>
                <FormElement>
                  <div className="form-elem-block full-width">
                    <label htmlFor="" className="forme-elem-label">Username</label>
                    <Input
                      type="text"
                      placeholder="Enter Your Username"
                      className="form-elem-control"
                    />
                  </div>

                  <div className="form-elem-block">
                    <label htmlFor="" className="forme-elem-label">Email</label>
                    <Input
                      type="text"
                      placeholder="Enter Your Email"
                      className="form-elem-control"
                    />
                  </div>

                  <div className="form-elem-block">
                    <label htmlFor="" className="forme-elem-label">Password</label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="form-elem-control"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        style={{ marginLeft: '8px' }}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>

                  <div className="form-elem-block">
                    <label htmlFor="" className="forme-elem-label">First Name</label>
                    <Input
                      type="text"
                      placeholder="Enter Your First Name"
                      className="form-elem-control"
                    />
                  </div>

                  <div className="form-elem-block">
                    <label htmlFor="" className="forme-elem-label">Last Name</label>
                    <Input
                      type="text"
                      placeholder="Enter Your Last Name"
                      className="form-elem-control"
                    />
                  </div>

                  <div className="form-elem-block">
                    <label htmlFor="" className="forme-elem-label">Phone</label>
                    <Input
                      type="text"
                      placeholder="Enter Your Phone Number"
                      className="form-elem-control"
                    />
                  </div>

                  <div className="form-elem-block">
                    <label htmlFor="" className="forme-elem-label">Address</label>
                    <Input
                      type="text"
                      placeholder="Enter Your Address"
                      className="form-elem-control"
                    />
                  </div>

                  <div className="form-elem-block">
                    <label htmlFor="" className="forme-elem-label">Zip Code</label>
                    <Input
                      type="text"
                      placeholder="Enter Your Zip Code"
                      className="form-elem-control"
                    />
                  </div>

                  <div className="form-elem-block">
                    <label htmlFor="" className="forme-elem-label">Profile Image</label>
                    <Input
                      type="file"
                      name="profileImage"
                      className="form-elem-control"
                      accept="image/*"
                    />
                  </div>
                </FormElement>

                <BaseButtonBlack type="submit" className="form-submit-btn">
                  Sign Up
                </BaseButtonBlack>
              </form>
              <p className="flex flex-wrap account-rel-text">
                Already have an account?
                <Link to="/sign_in" className="font-medium">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </SignUpScreenWrapper>
  );
};

export default SignUpScreen;
