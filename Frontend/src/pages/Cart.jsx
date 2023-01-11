import React from "react";
import ProductCard from "../components/ProductCard";
import CartProduct from '../components/CartProduct'

function Cart() {
  return (
    <div>
      <div class="page-top-info">
        <div class="container">
          <h4>Корзина</h4>
          <div class="site-pagination">
            <a href="/">Главная</a> / <a href="#">Корзиа</a>
          </div>
        </div>
      </div>

      <section class="cart-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="cart-table">
                <h3>Корзина</h3>
                <div class="cart-table-warp">
                  <table>
                    <thead>
                      <tr>
                        <th class="product-th">Товар</th>
                        <th class="quy-th">Количество</th>
                        <th class="total-th">Цена</th>
                      </tr>
                    </thead>
                    <tbody>
                      <CartProduct />
                      <CartProduct />
                      <CartProduct />
                    </tbody>
                  </table>
                </div>
                <div class="total-cost">
                  <h6>
                    Общая сумма<span>₽ много</span>
                  </h6>
                </div>
              </div>
            </div>
            <div class="col-lg-4 card-right">
              <form class="promo-code-form">
                <input type="text" placeholder="Введите промокод" />
                <button>Отправить</button>
              </form>
              <a href="" class="site-btn">
                Перейти к оформлению заказа
              </a>
              <a href="" class="site-btn sb-dark">
                Продолжить покупку
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="related-product-section">
        <div class="container">
          <div class="section-title text-uppercase">
            <h2>Еще товары</h2>
          </div>
          <div class="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
