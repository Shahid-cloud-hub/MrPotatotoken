import styled from "styled-components";
import DownArrow from "../../assets/images/flags/down-arrow.svg";

export const ContainerSidebar = styled("div")`
  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #000;
    overflow: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }

  .menu {
    padding: 0px 28px;
  }

  .menu-item {
    display: flex;
    align-items: center;
    gap: 30px;
    padding-top: 3px;

    button {
      border: none;
      font-weight: 700;
      font-size: 16px;
      color: #fff;
      background: #000000;
      border-radius: 100px;
      display: flex;
      gap: 7px;
    }

    .activated-btn {
      border: 2px solid #ad2020;
      padding: 6px;
    }

    .de-activated-btn {
      border: 2px solid #2fad20;
    }
  }

  @media screen and (max-width: 768px) {
    .menu-item {
      padding-top: 50px;
      justify-content: flex-start;

      button {
        font-size: 13px;
      }
    }
  }

  @media screen and (max-width: 620px) {
    .menu-item {
      justify-content: flex-start;
    }
  }

  @media screen and (max-width: 514px) {
    .menu {
      padding: 0px;
      max-width: 195px;
      margin: 0 auto;
    }

    .menu-item {
      padding-top: 20px;
      justify-content: flex-start;

      button {
        font-size: 12px;
      }

      .dropdown-toggle {
        padding: 0 12px;
      }
    }
  }

  @media screen and (max-width: 375px) {
    .menu {
      padding: 0px;
      max-width: 195px;
      margin: 0 auto;
    }

    .menu-item {
      justify-content: flex-start;
      gap: 10px;
      button {
        font-size: 11px;
        padding: 7px;
      }

      .dropdown-toggle {
        padding: 0 12px;
      }
    }
  }

  hr {
    margin: 1.8rem 0;
  }

  .OpenNavBar {
    cursor: pointer;
    /* transform: translate(10px, -2px); */
  }

  .activated {
    width: 340px;
  }

  .de-activated {
    width: 0;
  }

  .sidenav a {
    text-decoration: none;
    list-style: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
    max-width: fit-content;
  }

  .sidenav a:hover {
    color: #f1f1f1;
  }

  .sidenav .closebtn {
    position: absolute;
    top: 9px;
    right: 19px;
    font-size: 36px;
    margin-left: 50px;
    cursor: pointer;
  }

  .NavLink-item {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }

  a {
    text-decoration: none;
    color: #232323;
    text-transform: capitalize !important;
    transition: color 0.3s ease;
  }

  a:hover {
    color: tomato !important;
  }

  .menu {
    .social-icons {
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 400px;
      flex-wrap: wrap;
      transform: translate(-10px, 7px);
      cursor: pointer;
      align-items: center;
      justify-content: flex-start;
      max-width: 235px;

      .medium-icon {
        margin: 6px;
      }
    }
  }

  .menu li {
    padding: 5px 0;
    font-weight: 700;
    font-size: 17px;
    color: #fff;
    text-transform: initial;

    &:hover {
      color: #f4cd68;
    }
  }

  .dropdown-menu {
    margin-top: 10px;
  }

  .select-language {
    display: flex;
  }

  .select-language option {
    display: flex;
    gap: 5px;
  }
  .dropdown-toggle::after {
    display: none;
  }
  /* .dropdown-toggle::before {
    content: "";
    background-image: url(${DownArrow});
    height: 8px;
    width: 14px;
    position: absolute;
    right: -30px;
    top: 40%;
    transform: translateX(-50%);
  } */
  .dropdown-menu {
    min-width: fit-content;
  }

  @media screen and (max-width: 200px) {
    .menu {
      transform: none;
      opacity: 0;

      transition: opacity 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    }
  }

  @media screen and (max-width: 1080px) {
    .menu {
      width: 398px;
      /* padding: 120px 30px 120px; */

      li {
        font-size: 18px;
      }

      .social-icons {
        width: 313px;
        transform: scale(0.9) translate(-25px, 0px);
      }

      /* .dropDown-Menu {
        margin: 0;
        transform: translate(-1px, 10px);
      } */
    }
    .OpenNavBar {
      cursor: pointer;
      transform: translate(0px, 0px);
    }
  }

  @media screen and (max-width: 768px) {
    .menu {
      width: 344px;
      /* padding: 120px 25px 120px; */

      li {
        font-size: 16px;
      }

      .social-icons {
        width: 310px;
        transform: scale(0.8) translate(-48px, -12px);
      }

      /* .dropDown-Menu {
        margin: 0;
        transform: translate(-4px, -9px);
      } */
    }
  }

  @media screen and (max-width: 420px) {
    .menu {
      /* width: 222px; */
      /* padding: 120px 14px 120px; */

      li {
        font-size: 13px;
      }

      .social-icons {
        width: 261px;
        transform: scale(0.7) translate(-66px, -14px);
      }

      /* .dropDown-Menu {
        margin: 0;
        transform: translate(-4px, -9px);
      } */
    }

    .activated {
      width: 221px;
    }
  }
`;
