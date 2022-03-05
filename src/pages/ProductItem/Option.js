import React from 'react';

const Option = ({ name, extraPrice }) => {
  return (
    <div className="productCount">
      <div className="productInfo">
        <span>{name}</span>
        <span>{extraPrice}</span>
      </div>
      <span>1</span>
      <div className="amountSelect">
        <div>
          <button className="btnPlus">+</button>
          <button className="btnMinus">-</button>
        </div>
        <button className="btnDelete">x</button>
      </div>
    </div>
  );
};

export default Option;
