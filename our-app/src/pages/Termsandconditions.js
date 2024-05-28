import React from "react";
import styled from "styled-components";

const TermsContainer = styled.div`
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
  text-align: left;
`;

const TermsAndConditions = () => {
  return (
    <TermsContainer>
      <Title>Terms and Conditions</Title>
      <Subtitle>Know Your Rights and Obligations</Subtitle>
      <Content>
        <p>
          Welcome to <strong>Fashion Frontier</strong>. These terms and conditions outline the rules and regulations for the use of our website and services.
        </p>
        <h3>1. Introduction</h3>
        <p>
          By accessing this website, you agree to be bound by these terms and conditions. If you disagree with any part of the terms, please do not use our website.
        </p>
        <h3>2. Intellectual Property Rights</h3>
        <p>
          Unless otherwise stated, <strong>Fashion Frontier</strong> owns the intellectual property rights for all material on this website. All intellectual property rights are reserved.
        </p>
        <h3>3. Use License</h3>
        <p>
          Permission is granted to temporarily download one copy of the materials on the <strong>Fashion Frontier</strong> website for personal, non-commercial transitory viewing only.
        </p>
        <h3>4. Limitations</h3>
        <p>
          In no event shall <strong>Fashion Frontier</strong> or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.
        </p>
        <h3>5. Revisions and Errata</h3>
        <p>
          The materials appearing on <strong>Fashion Frontier</strong>'s website could include technical, typographical, or photographic errors. We do not warrant that any of the materials are accurate, complete, or current.
        </p>
        <h3>6. Links</h3>
        <p>
          <strong>Fashion Frontier</strong> has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site.
        </p>
        <h3>7. Modifications</h3>
        <p>
          <strong>Fashion Frontier</strong> may revise these terms of service for its website at any time without notice. By using this website, you agree to be bound by the current version of these terms and conditions.
        </p>
        <h3>8. Governing Law</h3>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State], and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>
      </Content>
    </TermsContainer>
  );
};

export default TermsAndConditions;
