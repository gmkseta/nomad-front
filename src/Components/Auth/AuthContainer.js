import React, { useState, useEffect } from "react";
import AuthPresenter from "./AuthPresenter";
import { Page, Navbar, NavRight, Link, LoginScreenTitle } from "framework7-react";
import useInput from "../../Hooks/useInput";
import { useMutation } from "@apollo/react-hooks";

import {
  LOGIN,
  CREATE_USER,
  LOCAL_LOG_IN
} from "./AuthQueries";
import { f7 } from 'framework7-react';

import { renderToString } from 'react-dom/server'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle  } from '@fortawesome/free-solid-svg-icons'


export default ({loginClose}) => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const password = useInput("");
  const email = useInput("");

  const [ requestSecretMutation ] = useMutation(LOGIN, {
    onError: (err)=>{
      if(err.graphQLErrors.length){
        notiToast({text: err.graphQLErrors[0].message, icon: renderToString(<FontAwesomeIcon icon={faExclamationTriangle}/>)});
      }else{
        notiToast({text: err.message});
      }
    },
    onCompleted: (data)=>{
      const token = data.login;
      localLogInMutation({ variables: { token } })
    }
  });

  const [ createAccountMutation ] = useMutation(CREATE_USER, {
    onError: (err)=>{
      if(err.graphQLErrors.length){
        notiToast({text: err.graphQLErrors[0].message });
      }else{
        notiToast({text: err.message});
      }
    },
    onCompleted: ( data ) => {
        notiToast({ text:"Account created! Log In now"})
        setTimeout(() => setAction("logIn"), 1000);
    }
  });
  
  const [localLogInMutation] = useMutation(LOCAL_LOG_IN, {
    onCompleted: () => { window.location.href="/" }
  });

  const notiToast = (options) => {
    if(!f7.notiToast.params.isOpen){
      Object.assign(f7.notiToast.params, options)
      f7.notiToast.params.setOption()
      f7.notiToast.open()
    }
  }

  const onSubmit = e => {
    e.preventDefault();
    if (action === "logIn"){
      if (email.value !== "" && password.value !== "") {
        requestSecretMutation({
          variables: { email: email.value, password: password.value }
        });
      } else {
        notiToast({ text:"All field are required"})
      }
    } else if (action === "signUp") {
      if (
        email.value !== "" &&
        password.value !==""
      ) {
          createAccountMutation({
            variables: {
              email: email.value,
              username: username.value,
              password: password.value
            }
          });
      } else {
        notiToast({ text:"All field are required"})
      }
    }
  };

  

  return (
    <Page loginScreen>
      <Navbar title="Login Screen">
        <NavRight>
          <Link onClick={loginClose}>Close</Link>
        </NavRight>
      </Navbar>
      <LoginScreenTitle>
        {action === "logIn" && ( '로그인 하셈여!' )}{action === "signUp" && ( '회원가입 하셈여!' )}
      </LoginScreenTitle>
      <AuthPresenter
        setAction={setAction}
        action={action}
        username={username}
        email={email}
        password={password}
        onSubmit={onSubmit}
      />
    </Page>
  );
};
