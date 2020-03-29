import React from "react";
import { List, ListInput, ListButton, BlockFooter, Button, Col, Row } from 'framework7-react';

export default ({
  action,
  username,
  email,
  password,
  setAction,
  onSubmit,
}) => (
  <div>
      {action === "logIn" && (
        <List form onSubmit={onSubmit}>
          <ListInput label="Email" {...email}
            type="email" placeholder="Your e-mail" 
          />
          <ListInput label="Password" {...password}
            type="password" placeholder="Your password"
          />
          <Row>
            <Col/>
            <Col>
              <Button raised fill type='submit'>Log in</Button>
            </Col>
            <Col/>
          </Row>
        </List>
        )}
        {action === "signUp" && (
          <List form onSubmit={onSubmit}>
            <ListInput label="Email" {...email}
            type="email" placeholder="Your e-mail" 
            />
            <ListInput label="Password" {...password}
              type="password" placeholder="Your password"
            />
            <ListInput label="username" {...username}
            type="text" placeholder="Your User name" 
            />
            <Row>
              <Col/>
              <Col>
                <Button raised fill type='submit'>Sign Up</Button>
              </Col>
              <Col/>
            </Row>
          </List>
        )}
      
      {action === "logIn" ? (
        <List>
          <ListButton onClick={() => setAction("signUp")}>Sign In</ListButton>
          <BlockFooter>Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlockFooter>
        </List>

      ) : (
        <List>
          <ListButton onClick={() => setAction("logIn")}>Sign In</ListButton>
          <BlockFooter>Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlockFooter>
        </List>
      )}    
  </div>
);
