import React, { useState, useEffect } from 'react';
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
  button {
    color: #000;
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  direction: rtl;
`;

const SuccessMessage = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CodeInstruction = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const CodeInputs = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const CodeInput = styled.input`
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  &:focus {
    border-color: #ffc107;
  }
`;

const ConfirmButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #ffc107;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const ResendSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
`;

const ResendLink = styled.a`
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState(45);

  useEffect(() => {
    let timer;
    if (showModal && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [showModal, countdown]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    setShowModal(true);
  };

  const handleCodeChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleConfirm = () => {
    // Handle verification logic here
    console.log('Verification code:', verificationCode.join(''));
  };

  const handleResend = () => {
    setCountdown(45);
    // Handle resend logic here
  };

  return (
    <>
      {!showModal && (
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
            <button onClick={() => console.log('Register clicked')}>ليس لديك حساب؟ سجل الآن</button>
          </RegisterLink>
        </Container>
      )}

      {showModal && (
        <Modal>
          <ModalContent>
            <SuccessMessage>تم ارسال كود التفعيل بنجاح</SuccessMessage>
            <CodeInstruction>رمز التحقق المرسل الى الجوال</CodeInstruction>
            <CodeInputs>
              {verificationCode.map((digit, index) => (
                <CodeInput
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  maxLength="1"
                />
              ))}
            </CodeInputs>
            <ConfirmButton onClick={handleConfirm}>
              تأكيد
            </ConfirmButton>
            <ResendSection>
              <span>إعادة ارسال الرمز؟</span>
              {countdown > 0 ? (
                <span>انتظار {countdown} ثانية</span>
              ) : (
                <ResendLink onClick={handleResend}>إعادة الإرسال</ResendLink>
              )}
            </ResendSection>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Login;
