import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  color: #333;
  font-family: "Arial, sans-serif";
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #222;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #555;
`;

const Content = styled.div`
  max-width: 800px;
  line-height: 1.6;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 2rem 0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Subtitle>Elegance in Every Stitch</Subtitle>
      <Image
        src="https://plus.unsplash.com/premium_photo-1674669321691-958db874f59e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Fashion"
      />
      <Content>
        <p>
          Welcome to <strong>Fashion Frontier</strong>, where we believe that
          style is a way to say who you are without having to speak.
        </p>
        <p>
          Founded in 2020, our brand has been committed to bringing the latest
          trends and timeless pieces to fashion-forward individuals around the
          globe. Our collections are designed with the modern, stylish
          individual in mind, combining comfort with high fashion.
        </p>
        <p>
          Our mission is to provide clothing that makes you feel confident and
          elegant, whether you're at a casual brunch or a formal event. We pay
          attention to every detail, ensuring that each piece is crafted with
          care and precision.
        </p>
        <p>
          Thank you for choosing <strong>Fashion Frontier</strong>. We are
          excited to be a part of your fashion journey.
        </p>
      </Content>
    </AboutContainer>
  );
};

export default About;
