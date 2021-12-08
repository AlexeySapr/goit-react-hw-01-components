import ReactDOM from 'react-dom';

const elem1 = <span>Hello</span>;
const elem2 = <span> World</span>;

const mainElement = (
  <div>
    {elem1}
    {elem2}
  </div>
);

ReactDOM.render(mainElement, document.querySelector('#root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
