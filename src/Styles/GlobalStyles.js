import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    li{
      list-style: none;
    }
    :root {
        --f7-navbar-bg-color: #ffffff;
        --f7-navbar-bg-image: var(--f7-bars-bg-image);
        --f7-navbar-border-color: var(--f7-bars-border-color);
        --f7-navbar-link-color: var(--f7-bars-link-color);
        --f7-navbar-text-color: var(--f7-bars-text-color);
        --f7-navbar-hide-show-transition-duration: 400ms;
        --f7-navbar-title-line-height: 1.2;
        --f7-navbar-title-font-size: inherit;
        --f7-navbar-subtitle-text-align: inherit;
        --f7-navbar-large-title-line-height: 1.2;
        --f7-navbar-large-title-text-color: inherit;
        --f7-page-bg-color: #ffffff;
        --f7-tabbar-link-inactive-color: #000000;
        --f7-button-font-size: 15px;
        --f7-button-height: 36px;
        --f7-label-font-size: 15px;
        --f7-tabbar-labels-height: 56px;
        --f7-toolbar-height: 47px;
        --f7-tabbar-label-font-size: 13px;
        --f7-navbar-height: 47px;
        --f7-navbar-tablet-height: 64px;
        --f7-navbar-font-size: 17px;
        --f7-theme-color: #F9665E;
        --f7-fab-bg-color: #F9665E;
        --f7-vine-attendance-color: #F9665E;
        --f7-vine-absent-color: #4F3C9E;
        --f7-fab-button-size: 60px;
      }

      
    
`;
