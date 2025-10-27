import React, { useState } from 'react';
import styled from 'styled-components';
import saudiFlag from '../assets/saudi-flag.png';

const Container = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  direction: rtl;
`;

const Logo = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
`;

const WelcomeText = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 30px;
`;

const PhoneInput = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
  background-color: white;
`;

const CountryCode = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-left: 10px;
`;

const Flag = styled.img`
  width: 24px;
  height: 16px;
`;

const Input = styled.input`
  border: none;
  flex: 1;
  padding: 8px;
  font-size: 16px;
  outline: none;
  text-align: right;
`;

const VerifyButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #ffc107;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const RegisterLink = styled.div`
  text-align: center;
  a {
    color: #000;
    text-decoration: none;
  }
`;

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Container>
      <Logo>M.A.N. - 2</Logo>
      <WelcomeText>مرحباً بك</WelcomeText>
      <Subtitle>يمكنك تسجيل الدخول الي حسابك الخاص من خلال</Subtitle>

      <form onSubmit={handleSubmit}>
        <PhoneInput>
          <CountryCode>
            <Flag src={saudiFlag} alt="Saudi Flag" />
            <span>+966</span>
          </CountryCode>
          <Input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="ادخل رقم الواتس اب الخاص بك"
          />
        </PhoneInput>

        <VerifyButton type="submit">
          إرسال رمز التحقق
        </VerifyButton>
      </form>

      <RegisterLink>
        <a href="#">ليس لديك حساب؟ سجل الآن</a>
      </RegisterLink>
    </Container>
  );
};

export default Login;
