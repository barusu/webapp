<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #444;
    background: #f4f5f6;
  }
  body::before {
    content: '';
    position: fixed;
    top: -1%; left: -2%;
    display: block;
    width: 104%;
    height: 102%;
    z-index: -1;
    filter: blur(3px);
  }
  body.bg01::before {background: url('./assets/bg01.jpg') center / cover; }
  body.bg02::before {background: url('./assets/bg02.jpg') center / cover; }
  /* reset css */
  html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, a, cite, img, sub, sup, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    border: 0;
    margin: 0;
    padding: 0;
    font-weight: normal;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section, main {
    display: block;
  }
  button {
    outline: none;
  }
  ol, ul {
    margin: 0;
    padding: 0;
  }
  ol, ul, li {
    list-style: none;
  }
  i, em {
    font-style: normal;
  }
  blockquote {
    quotes: none;
  }
  blockquote:before, blockquote:after {
    content: '';
    content: none;
  }
  a {
    outline: none;
    text-decoration: none;
  }
  input, textarea{
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    outline: none;
    border: 0;
    margin: 0;
    padding: 0;
  }
  select, option{
    font-family: inherit;
  }
  *::before,
  *::after,
  * {
    box-sizing: border-box;
  }
  .clearfix::after {
    content: "";
    display: table;
    clear: both;
    float: none;
    *zoom: 1;
  }
  .clear-box {
    display: table;
    clear: both;
    float: none;
    *zoom: 1;
  }
  .kakushi {
    position: absolute;
    filter: opacity(0);
    clip: rect(0,0,0,0);
    z-index: -99;
  }
  html {
    height: 100%;
  }
  header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 2em;
    z-index: 9;
    font-size: 16px;
    background: #fff;
    text-align: center;
    span {
      line-height: 2;
    }
  }
  .btn {
    display: block;
    border-radius: 3px;
    line-height: 3;
    background: #3a98f8;
    color: #fff;
  }
  .submit {
    position: fixed;
    bottom: 0;
    padding: 10px 15px;
    width: 100%;
    background: #fff;
  }
  @keyframes spin {
    from {transform: rotateZ(0deg);}
    to   {transform: rotateZ(360deg);}
  }
</style>
