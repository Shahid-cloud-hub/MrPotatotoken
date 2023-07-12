import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19.3px;

  .sidebar__item {
    display: flex;
    align-items: center;
    max-width: 350px;
    margin: 0 auto;
  }

  .sidebar__item .cobine-menu-items {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 15px;
  }

  .sidebar__item .cobine-menu-items a {
    width: 100%;
  }

  .sidebar__item .cobine-menu-items .item-box {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1c1f25;
    border: 1px solid #282c34;
    border-radius: 8px;
    width: 100%;
    gap: 10px;
    min-height: 70px;
    /* max-width: 88px; */

    span {
      visibility: hidden;
      position: absolute;
      opacity: 0;
      transition: visibility 0s, opacity 0.5s linear;
      transition: position 0s, opacity 0.5s linear;
      font-weight: 700;
      font-size: 18px;
    }
  }

  .sidebar__item .cobine-menu-items .item-box:hover {
    span {
      display: flex;
      visibility: visible;
      position: relative;
      opacity: 1;
    }
  }

  /* .sidebar__item .sidebar__item-inner:hover img {
    opacity: ${(props) => props?.opcPro};
  } */

  /* @media screen and (max-width: 912px) {
    .sidebar__item {
      max-width: 150px;
      margin: 0 auto;
    }
  } */

  .sidebar__item .sidebar__item-inner {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 70px;
    width: 100%;
    border-radius: 8px;
    background-color: #1c1f25;
    justify-content: center;
    transition: visibility 0s, opacity 0.5s linear;

    span {
      visibility: hidden;
      position: absolute;
      opacity: 0;
      transition: visibility 0s, opacity 0.5s linear;
      transition: position 0s, opacity 0.5s linear;
      font-weight: 700;
      font-size: 24px;
    }
  }

  .sidebar__item .sidebar__item-inner:hover {
    span {
      display: flex;
      visibility: visible;
      position: relative;
      opacity: 1;
    }
  }

  .active {
    border: 1px solid #f4cd68;
    color: #f4cd68;
  }

  .wrapper-span {
    color: #fff;
    padding: 20px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const Logo = styled.div`
  background: #0f212e;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  padding: 0px 20px;
  z-index: 1;
  max-width: 300px;
  width: 100%;
`;
