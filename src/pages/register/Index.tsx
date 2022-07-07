import React, { useState, useEffect } from "react";
import { Link as RedirectLink } from "react-router-dom";
import * as S from "./Styles";
import Label from "../../components/label/Index";
import ErrorMessage from "../../components/errormessage/Index";
import Form, { Input } from "../../components/form/Index";
import Button from "../../components/button/Index";

type User = {
  username: string,
  email: string,
  password: string
}

export default function Register({ history }): JSX.Element {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if(localStorage.getItem('isLoggedIn') != 'true') {
      history.push('/login')
    }
  }, [])

  const register = (event) => {
    event.preventDefault();
    const newUser: User = { username, email, password }
    const userDataInStorage: any = localStorage.getItem('userData')

    if (!userDataInStorage) {
      console.log('THERE IS NO DATA IN LOCAL STORAGE')
      localStorage.setItem('userData', JSON.stringify([newUser]))
    } else {
      let userData: User[] = JSON.parse(userDataInStorage)

      const { isDuplicated, errorMsg } = checkIsDuplicated(userData, newUser)
      if(isDuplicated) {
        setErrorMessage(errorMsg)
      } else {
        setErrorMessage('')
        userData = [...userData, newUser]
        localStorage.removeItem('userData')
        localStorage.setItem('userData', JSON.stringify(userData))
        history.push("/login")
      }
    }
  }

  const checkIsDuplicated = (userData: User[], newUser: User) => { 
    let result = {
      isDuplicated: false,
      errorMsg: ''
    }
    userData.map((user: User) => {
      if(user.username == newUser.username) {
        result.isDuplicated = true
        result.errorMsg = "Username already exists"
      }
    
      if(user.email == newUser.email) {
        result.isDuplicated = true
        result.errorMsg = "Email already exists"
      }
    })
    return result
  }

  return (
    <S.Container>
      <S.RegisterFormContainer>
        <S.WelcomeMessageContainer>
          <S.WelcomeBackMessage>Create an Account!</S.WelcomeBackMessage>
        </S.WelcomeMessageContainer>

        <Form onSubmit={register}>
          <Label>Email</Label>
          <Input
            type="email"
            onChange={(e: any): void => setEmail(e.target.value)}
          />

          <Label>Username</Label>
          <Input
            type="text"
            onChange={(e: any): void => setUsername(e.target.value)}
          />

          <Label>Password</Label>
          <Input
            type="password"
            onChange={(e: any): void => setPassword(e.target.value)}
          />

          <Button
            style={{
              marginTop: "30px",
              fontSize: "16px",
              backgroundColor: "#677bc4",
              height: "40px"
            }}
          >
            Continue
          </Button>
          {errorMessage && <ErrorMessage message={errorMessage} />}
        </Form>

        <S.LinkContainer>
          <RedirectLink to="/login" style={{ textDecoration: "none" }}>
            <S.Link>Already have an account? </S.Link>
          </RedirectLink>
        </S.LinkContainer>

        <S.LinkContainer>
          <S.Info>
            By registering, you agree to Discord's
            <S.InfoLink> Terms of service</S.InfoLink> and{" "}
            <S.InfoLink>Privacy Policy.</S.InfoLink>
          </S.Info>
        </S.LinkContainer>
      </S.RegisterFormContainer>
    </S.Container>
  );
}
