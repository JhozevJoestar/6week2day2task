import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import s from './Style.module.css';
import img from './img/Ellipse 1.png'
import img1 from './img/Vector.png'
/* <img src={mg} alt="abc" /> */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className={s.app}>
    <div className={s.header}>
      <div className={s.counter}><img src={img} alt="abc" />
      <div className={s.counterIn}>ounter</div>
      </div>
      <div className={s.links}>
        <div className={s.linksIn}>
          <div className={s.links1}>Главная</div>
          <div className={s.links2}>О нас</div>
          <div className={s.links3}>Контакты</div>
        </div>
      </div>
    </div>

    <div className={s.MainContent}>
      <div className={s.Number}>0</div>
      <div className={s.Buttons}>
        <div className={s.Button1}>Увеличить</div>
        <div className={s.Button2}>Уменшить</div>
        <div className={s.Button3}>Сбросить</div>
      </div>
    </div>

    <div className={s.Footer}>
      <div className={s.footerCounter}>
        <img src={img1} alt="abc" className={s.img1}/>
        <div>ounter</div>
        <div className={s.footerLinks}>
          <div className={s.footerLinks1}>Партнерам</div>
          <div className={s.footerLinks2}>Разработчикам</div>
          <div className={s.footerLinks3}>Вакансии</div>
        </div>
      </div>
      <div className={s.Intocode}>ООО “интукод”, 2020г.</div>
    </div>
  </div>
);
/* <img src={img1} alt="abc" className={s.img1}/> */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
