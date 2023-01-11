import React from "react";


// function FRTC(){
//   fetch('/api/')
//   .then(response => response.json())
//   .then(commits => alert(commits[0].author.login));
// }

function Header() {
  return (
    <header className="header-section">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 text-center text-lg-left">
              <a href="/" className="site-logo">
                <img className="site-logo-img" src="img/MainLogo.png" alt="" />
              </a>
            </div>
            <div className="col-xl-6 col-lg-5">
              <form className="header-search-form">
                <input type="text" placeholder="Поиск продукта ...." />
                <button>
                  <i className="flaticon-search"></i>
                </button>
              </form>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="user-panel">
                <div className="up-item">
                  <i className="flaticon-profile"></i>
                  <a href="#"> Войти</a> или <a href="#">Создать профиль</a>
                </div>
                <div className="up-item">
                  <div className="shopping-card">
                    <i className="flaticon-bag"></i>
                    <span>0</span>
                  </div>
                  <a href="#"> Корзина</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="main-navbar">
        <div className="container">
          <ul className="main-menu">
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/cart">Корзина</a>
            </li>
            <li>
              <a href="#">Профиль</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
