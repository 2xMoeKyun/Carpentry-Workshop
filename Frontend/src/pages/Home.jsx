import React from "react";
import ProductCard from '../components/ProductCard'


function Home() {
  return (
    <div>
      <section className="product-filter-section">
        <div className="container">
          <div className="section-title">
            <h2>РЕКОМЕНДОВАННЫЕ ПРОДУКТЫ</h2>
          </div>
          <div className="row">
            {/*карточки товаров */}
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
          <div className="text-center pt-5">
            <button className="site-btn sb-line sb-dark">Еще</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
