import React from "react";

function Product() {
  return (
    <div>

      <div className="page-top-info">
        <div className="container">
          <h4>Выбор товара</h4>
          <div className="site-pagination">
            <a href="/">Главная</a> / <a href="#">Магазин</a>
          </div>
        </div>
      </div>

      <section className="product-section">
        <div className="container">
          <div className="back-link">
            <a href="/"> &lt;&lt; Назад куда нибудь(пока что главная)</a>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="product-pic-zoom">
                <img
                  className="product-big-img"
                  src="https://i.ytimg.com/vi/8FDlxKCBtkc/maxresdefault.jpg"
                  alt=""
                />
              </div>
              <div className="product-thumbs" tabIndex="1">
                
              </div>
            </div>
            <div className="col-lg-6 product-details">
              <h2 className="p-title">Карточка уно</h2>
              <h3 className="p-price">₽ 10млн</h3>
              <h4 className="p-stock">
                Доступно: <span>В Наличии</span>
              </h4>
              <div className="p-rating">
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o fa-fade"></i>
              </div>
              <div className="p-review">
                <a href="">3 отзыва</a>|<a href="">Добавьте своё очко</a>
              </div>
              <div className="quantity">
                <p>Количество</p>
                <div className="pro-qty">
                  <input type="text" />
                </div>
              </div>
              <a href="/cart" className="site-btn">
                КУПИ!
              </a>
              <div id="accordion" className="accordion-area">
                <div className="panel">
                  <div className="panel-header" id="headingOne">
                    <button
                      className="panel-link active"
                      data-toggle="collapse"
                      data-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      information
                    </button>
                  </div>
                  <div
                    id="collapse1"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin pharetra tempor so dales. Phasellus sagittis
                        auctor gravida. Integer bibendum sodales arcu id te
                        mpus. Ut consectetur lacus leo, non scelerisque nulla
                        euismod nec.
                      </p>
                      <p>
                        Approx length 66cm/26" (Based on a UK size 8 sample)
                      </p>
                      <p>Mixed fibres</p>
                      <p>
                        The Model wears a UK size 8/ EU size 36/ US size 4 and
                        her height is 5'8"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-sharing">
                <a href="">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="">
                  <i className="fa fa-pinterest"></i>
                </a>
                <a href="">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-product-section">
        <div className="container">
          <div className="product-slider owl-carousel">
            <div className="product-item">
              <div className="pi-pic">
                <img src="./img/product/1.jpg" alt="" />
                <div className="pi-links">
                  <a href="#" className="add-card">
                    <i className="flaticon-bag"></i>
                    <span>ДОБАВИТЬ В КОРЗИНУ</span>
                  </a>
                  <a href="#" className="wishlist-btn">
                    <i className="flaticon-heart"></i>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>$35,00</h6>
                <p>Flamboyant Pink Top </p>
              </div>
            </div>
            <div className="product-item">
              <div className="pi-pic">
                <div className="tag-new">New</div>
                <img src="./img/product/2.jpg" alt="" />
                <div className="pi-links">
                  <a href="#" className="add-card">
                    <i className="flaticon-bag"></i>
                    <span>ДОБАВИТЬ В КОРЗИНУ</span>
                  </a>
                  <a href="#" className="wishlist-btn">
                    <i className="flaticon-heart"></i>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>$35,00</h6>
                <p>Black and White Stripes Dress</p>
              </div>
            </div>
            <div className="product-item">
              <div className="pi-pic">
                <img src="./img/product/3.jpg" alt="" />
                <div className="pi-links">
                  <a href="#" className="add-card">
                    <i className="flaticon-bag"></i>
                    <span>ADD TO CART</span>
                  </a>
                  <a href="#" className="wishlist-btn">
                    <i className="flaticon-heart"></i>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>$35,00</h6>
                <p>Flamboyant Pink Top </p>
              </div>
            </div>
            <div className="product-item">
              <div className="pi-pic">
                <img src="./img/product/4.jpg" alt="" />
                <div className="pi-links">
                  <a href="#" className="add-card">
                    <i className="flaticon-bag"></i>
                    <span>ADD TO CART</span>
                  </a>
                  <a href="#" className="wishlist-btn">
                    <i className="flaticon-heart"></i>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>$35,00</h6>
                <p>Flamboyant Pink Top </p>
              </div>
            </div>
            <div className="product-item">
              <div className="pi-pic">
                <img src="./img/product/6.jpg" alt="" />
                <div className="pi-links">
                  <a href="#" className="add-card">
                    <i className="flaticon-bag"></i>
                    <span>ADD TO CART</span>
                  </a>
                  <a href="#" className="wishlist-btn">
                    <i className="flaticon-heart"></i>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>$35,00</h6>
                <p>Flamboyant Pink Top </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Product;
