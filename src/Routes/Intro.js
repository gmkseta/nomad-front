import React, { useState } from 'react';
import { Page, Swiper, Button, LoginScreen, Row, Col, f7 } from 'framework7-react';
import styled from "styled-components";
import LoginPage from '../Components/Auth'


const IntroImage = styled.img`
max-width:80%;max-height:80%;margin-top:30%;
`

const IntroPage = styled(Page)`

`

export default ()=> {
  const [ loginScreenOpened, setLoginScreenOpened ] = useState(false);
  const closeHandler = (e) => {
    setLoginScreenOpened(false);
  }

  const swiperInitial = ()=>{
    
      f7.swiper.create(".intro-swiper",{
        autoplay: {
          delay: 1000
        }
      })
    
  }

  return(
    <IntroPage className="page-intro" onPageAfterIn={swiperInitial}>
      <Row>
        <Col/>
        <Col>
          <Button raised large fill onClick={() => {setLoginScreenOpened(true)}}>시작하기</Button>
        </Col>
        <Col/>
      </Row>
      <LoginScreen opened={loginScreenOpened} onLoginScreenClosed={() => {setLoginScreenOpened(false)}}>
        <LoginPage loginClose={closeHandler}/>
      </LoginScreen> 
    </IntroPage>
  )
}