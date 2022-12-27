import React from 'react';

function HrefToProduct(){
        window.location.href = "/product"
}

function ProductCard() {
        return (
                <div className="col-lg-3 col-sm-6">
                <div className="product-item">
                  <div className="pi-pic">
                    <img
                      src="https://static.wikia.nocookie.net/e4a2626b-31cf-4368-a2aa-f9fde8edcd19"
                      alt=""
                      onClick={HrefToProduct}
                    />
                    <div className="pi-links">
                      <a href="/cart" className="add-card">
                        <i className="flaticon-bag"></i>
                        <span>в корзину</span>
                      </a>
                      <a href="#" className="wishlist-btn">
                        <i className="flaticon-heart"></i>
                      </a>
                    </div>
                  </div>
                  <div className="pi-text">
                    <h6>₽ 10млн</h6>
                    <p>Карточка уно</p>
                  </div>
                </div>
              </div>
        );
}

export default ProductCard;
