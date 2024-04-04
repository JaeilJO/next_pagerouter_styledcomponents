import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  // Box sizing
  *, *::before, *::after {
    box-sizing: border-box;
  }

  // 기본 마진 제거
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  // 버튼 스타일 제거
  button{
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  // 리스트 스타일 제거
  ul, ol {
    padding: 0;
    list-style: none;
  }

  // 바디 설정
  body {
    min-height: 100dvh;
    scroll-behavior: smooth;
    line-height: 1.5;
  }


  img {
    // 컨테이너의 너비를 초과하지 않도록 이미지 크기 조정
    max-width: 100%;
    // 이미지는 기본적으로 inline 취급이였ㅇ므로, block으로 변경
    display: block;
  }

  // 링크 기본 스타일링 제거
  a {
    text-decoration: none;
    color: inherit;
  }

  // 입력란과 버튼에 폰트 상속
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

`;

export default GlobalStyle;
