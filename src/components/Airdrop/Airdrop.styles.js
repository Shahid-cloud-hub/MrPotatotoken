import styled from "styled-components";

export const AirdropWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* max-width: 934px; */
  background: #1c1f25;
  border-radius: 8px;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    max-width: 650px;
    margin: 0 auto;
  }

  @media screen and (max-width: 620px) {
    max-width: 570px;
    margin: 0 auto;
  }

  @media screen and (max-width: 375px) {
    max-width: 350px;
    margin: 0 auto;
  }

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 35px;
    justify-content: center;
    margin: 0px 0px 30px;
    padding: 0;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 35px;
    padding: 45px 50px;
  }

  .page {
    position: relative;
    width: 100%;
    height: 800px;
    border-radius: 10px;
    /* max-width: 910px; */
    margin: 0 auto;
  }

  .content {
    width: 100%;
    height: 100vh;
  }

  .wrapper {
    position: relative;
    width: 100%;
    height: 800px;
    padding: 0;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .page::after {
    content: "";
    position: absolute;
    z-index: 1;
    height: calc(100% - 20px);
    top: 10px;
    right: -1px;
    width: 8px;
    background: rgba(0, 0, 0, 0.35);
    border-radius: 10px;
  }

  .wrapper::-webkit-scrollbar {
    display: block;
    width: 8px;
  }
  .wrapper::-webkit-scrollbar-track {
    background: transparent;
  }

  .wrapper::-webkit-scrollbar-thumb {
    background-color: black;
    border-right: none;
    border-left: none;
    border-radius: 10px;
  }

  .wrapper::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-bottom: 10px;
  }

  .wrapper::-webkit-scrollbar-track-piece:start {
    background: transparent;
    margin-top: 9px;
  }
`;
