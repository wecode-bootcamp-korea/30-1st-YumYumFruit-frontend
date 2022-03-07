import React, { useEffect, useState } from 'react';

const Option = ({ name, price, status, pck, total, setTotal }) => {
  const [optionCount, setOptionCount] = useState({ count: 0 });

  const increase = () => {
    setOptionCount({
      count: optionCount.count + 1,
    });
    setTotal({
      ...total,
      sumNum: total.sumNum + 1,
      [pck]: {
        quantity: total[pck].quantity + 1,
        option: pck,
      },
    });
  };

  const decrease = () => {
    if (optionCount.count >= 1) {
      setOptionCount({
        count: optionCount.count - 1,
      });
      setTotal({
        ...total,
        sumPrice: total.sumPrice - price,
        sumNum: total.sumNum - 1,
        [pck]: {
          quantity: total[pck].quantity - 1,
          option: pck,
        },
      });
    }
  };

  return (
    <div className="productCount">
      <div className="productInfo">
        <span>{name}</span>
        <span>{status}</span>
      </div>
      <span>{optionCount.count}</span>
      <div className="amountSelect">
        <div>
          <button className="btnPlus" onClick={increase} pck={pck}>
            +
          </button>
          <button className="btnMinus" onClick={decrease} pck={pck}>
            -
          </button>
        </div>
        <button className="btnDelete">x</button>
      </div>
    </div>
  );
};

export default Option;
