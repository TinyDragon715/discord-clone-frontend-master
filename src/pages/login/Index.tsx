import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./Styles";
import Label from "../../components/label/Index";
import ErrorMessage from "../../components/errormessage/Index";
import Form, { Input } from "../../components/form/Index";
import Button from "../../components/button/Index";

export default function Login({ history }) {
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  type User = {
    username: string,
    email: string,
    password: string
  }

  type InputedData = {
    email: string,
    password: string
  }
  

  const onSubmit = (event) => {
    event.preventDefault()
    const tmp: any = localStorage.getItem('userData')
    let dataInStorage: User[] = JSON.parse(tmp)
    console.log(dataInStorage)
    const inputedData: InputedData = { email, password }

    const {isRegistered, errorMsg} = checkUser(dataInStorage, inputedData)
    localStorage.setItem('isLoggedIn', JSON.stringify(isRegistered))
    console.log(errorMsg)
    setErrorMessage(errorMsg)
    if(isRegistered) history.push('/lobby')
  }

  const checkUser = (dataInStorage: User[], inputedData: InputedData) => { 
    let result = {
      isRegistered: false,
      errorMsg: 'Invalid user'
    }
    dataInStorage.map((data: User) => {
      if(data.email == inputedData.email && data.password == inputedData.password) { 
        result.isRegistered = true
        result.errorMsg = ''
      }
    })
    return result
  }


  return (
    <S.Container>
      <S.LoginFormContainer>
        <S.WelcomeMessageContainer>
          <S.WelcomeBackMessage>Welcome Back!</S.WelcomeBackMessage>
          <S.HappyToSeeYouAgainMessage>
            We're excited to see you again!
          </S.HappyToSeeYouAgainMessage>
        </S.WelcomeMessageContainer>

        <Form onSubmit={onSubmit}>
          <Label>EMAIL</Label>
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />

          <Label>PASSWORD</Label>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            style={{
              marginTop: "30px",
              fontSize: "16px",
              backgroundColor: "#677bc4",
              height: "40px"
            }}
          >
            Login
          </Button>
          {errorMessage && <ErrorMessage message={errorMessage} />}
        </Form>

        <S.RegisterLinkContainer>
          <S.NeedAnAccount>Need an account? </S.NeedAnAccount>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <S.RegisterLink>Register</S.RegisterLink>
          </Link>
        </S.RegisterLinkContainer>
      </S.LoginFormContainer>
    </S.Container>
  );
}
