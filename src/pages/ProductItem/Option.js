import React, { useEffect, useState } from 'react';

const Option = ({
  name,
  status,
  pck,
  total,
  setTotal,
  optionList,
  setOptionList,
}) => {
  const increase = e => {
    setTotal({
      ...total,
      [pck]: {
        quantity: total[pck].quantity + 1,
        option: pck,
      },
    });
  };

  const decrease = () => {
    if (total[pck].quantity >= 2) {
      setTotal({
        ...total,
        [pck]: {
          quantity: total[pck].quantity - 1,
          option: pck,
        },
      });
    }
  };

  const deleteList = e => {
    const add = optionList.filter(x => {
      return x.pck !== e.target.getAttribute('pck');
    });

    setOptionList([...add]);
    setTotal({
      ...total,
      [pck]: {
        quantity: 0,
        option: pck,
      },
    });
  };

  return (
    <div className="productCount">
      <div className="productInfo">
        <span>{name}</span>
        <span>{status}</span>
      </div>
      <span>{total[pck].quantity}</span>
      <div className="amountSelect">
        <div>
          <button className="btnPlus" onClick={increase} pck={pck}>
            +
          </button>
          <button className="btnMinus" onClick={decrease} pck={pck}>
            -
          </button>
        </div>
        <button className="btnDelete" onClick={deleteList} pck={pck}>
          x
        </button>
      </div>
    </div>
  );
};

export default Option;
