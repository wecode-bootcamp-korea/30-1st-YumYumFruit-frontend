import React, { useEffect, useState } from 'react';
import './Option.scss';

const Option = ({
  name,
  status,
  packaged,
  total,
  setTotal,
  optionList,
  setOptionList,
}) => {
  const increase = e => {
    setTotal({
      ...total,
      [packaged]: {
        quantity: total[packaged].quantity + 1,
        option: packaged,
      },
    });
  };

  const decrease = () => {
    if (total[packaged].quantity >= 2) {
      setTotal({
        ...total,
        [packaged]: {
          quantity: total[packaged].quantity - 1,
          option: packaged,
        },
      });
    }
  };

  const deleteList = e => {
    const add = optionList.filter(x => {
      return x.packaged !== e.target.getAttribute('packaged');
    });

    setOptionList([...add]);
    setTotal({
      ...total,
      [packaged]: {
        quantity: 0,
        option: packaged,
      },
    });
  };

  return (
    <div className="productCount">
      <div className="productInfo">
        <span>{name}</span>
        <span>{status}</span>
      </div>
      <span>{total[packaged].quantity}</span>
      <div className="amountSelect">
        <div>
          <button className="btnPlus" onClick={increase} packaged={packaged}>
            +
          </button>
          <button className="btnMinus" onClick={decrease} packaged={packaged}>
            -
          </button>
        </div>
        <button className="btnDelete" onClick={deleteList} packaged={packaged}>
          x
        </button>
      </div>
    </div>
  );
};

export default Option;
