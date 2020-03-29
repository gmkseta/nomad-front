import React from "react";
import { gql } from "apollo-boost";
import { ThemeProvider } from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Layout from '../Routes/Layout'
import routes from './Routes'
import { App } from 'framework7-react';
import "../Styles/Book.scss"
import "../Styles/Rate.scss"

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

  const f7Params = {
    id: 'io.framework7.testapp',
    theme: 'ios',
    routes: routes(isLoggedIn)(),
    on: {
      init: function(){
        const f7App = this
        this.notiToast = this.toast.create({ 
          position: 'center',
          closeTimeout: 2000,
          on: {
            closed: (toast)=>{
              toast.params = {
                icon: null, text: null, position: "center",
                closeButton: false, closeButtonColor: null, closeButtonText: "Ok",
                closeTimeout: 2000, cssClass: null, setOption: toast.params.setOption, isOpen:  false
              }
            },
            open: (toast)=>{
              toast.params.isOpen = true
            }
          },
          setOption(){
            const toast = f7App.notiToast;
            const toastHtml = toast.render();
            const $el = f7App.$(toastHtml);
            f7App.utils.extend(toast, {
              $el,
              el: $el[0],
              type: 'toast',
            });
            $el[0].f7Modal = toast;
          },
          render: function(toast){
            const { position, cssClass, icon, text, closeButton, closeButtonColor, closeButtonText } = toast.params;
              return `
                <div class="toast toast-${position} ${cssClass || ''} ${icon ? 'toast-with-icon' : ''}">
                  <div class="toast-content">
                    ${icon ? `<div class="toast-icon">${icon}</div>` : ''}
                    <div class="toast-text">${text}</div>
                    ${closeButton && !icon ? `
                    <a class="toast-button button ${closeButtonColor ? `color-${closeButtonColor}` : ''}">${closeButtonText}</a>
                    `.trim() : ''}
                  </div>
                </div>
              `.trim();
            }
        })


      }
    }
  }
  
  
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <App params={ f7Params }>
          <Layout isLoggedIn={ isLoggedIn } />
        </App>
      </>
    </ThemeProvider>
  )
};

