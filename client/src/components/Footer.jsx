import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@material-ui/icons";
import React from "react";

import styled from "styled-components";
import { mobile } from "../responsive";

const Footer = () => {
  return (
    <Wrap>
      <ContainerB className="containerB">
        <Left>
          <Image src="./images/vasitiMag.svg" alt="" />
        </Left>
        <Right>
          <h3>Be a member of our community 🎉</h3>
          <p className="white-text">
            We’d make sure you’re always first to know what’s happening on
            Vasiti—thus, the world.
          </p>
          <InputContainer>
            <Input placeholder="Your email" />
            <Button>SUBSCRIBE</Button>
          </InputContainer>
        </Right>
      </ContainerB>
      <div className="containerA">
        <div className="box">
          <h4>Company</h4>
          <p>About us</p>
          <p>Term of Use</p>
          <p>Private Policy</p>
          <p>Press & Media</p>
        </div>
        <div className="box">
          <h4>Products</h4>
          <p>Market Place</p>
          <p>Magazine</p>
          <p>Seller</p>
          <p>Wholesale</p>
          <p>Services</p>
        </div>
        <div className="box">
          <h4>Careers</h4>
          <p>Become a Campus Rep</p>
          <p>Become a Vasiti Influencer</p>
          <p>Become a Campus writer</p>
          <p>Become an Affiliate</p>
        </div>
        <div className="box">
          <h4>Get In Touch</h4>
          <p>Contact Us</p>
          <p>Partner With Us</p>
          <p>Advertise With Us</p>
          <p>Help/FAQs</p>
        </div>
        <div className="box">
          <h4>Join Our Community</h4>
            <div className="items">
              <Facebook />
              <Instagram />
              <Twitter />
              <LinkedIn />
            </div>
          <p>Email Newsletter</p>
        </div>
      </div>
    </Wrap>
  );
};

export default Footer;

const Image = styled.img`
  width: 437px;
  height: 437px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  background: black;
  color: white;
  margin: auto;
`;

const ContainerB = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
  align-items: center;
  width: 80vw;
  margin: auto;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Right = styled.div`
  flex: 1;

  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
  ${mobile({ padding: "10px" })}
`;