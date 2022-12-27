import React from "react";

function CartProduct() {
  return (
    <tr>
      <td class="product-col">
        <img src="https://static.wikia.nocookie.net/e4a2626b-31cf-4368-a2aa-f9fde8edcd19" alt="" />
        <div class="pc-title">
          <h4>Карточка уно</h4>
          <p>₽ 10млн</p>
        </div>
      </td>
      <td class="quy-col">
        <div class="quantity">
          <div class="pro-qty">
            <input type="text" value="1" />
          </div>
        </div>
      </td>
      <td class="total-col">
        <h4>₽ 10млн</h4>
      </td>
    </tr>
  );
}

export default CartProduct;
