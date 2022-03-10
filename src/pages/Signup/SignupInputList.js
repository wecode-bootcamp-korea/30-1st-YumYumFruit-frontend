import React from 'react';
import './Signup.scss';

// 온블러 아니고 다른걸로 하면 됨
function SinupInputList({ onBlur, onChange, item }) {
  const { type, name, className, maxLength, content, title, src } = item;
  return (
    <tr>
      <th scope="row">
        {title}
        <img alt="checkImg" src={src} />
      </th>
      <td>
        <input
          type={type}
          name={name}
          className={className}
          onBlur={onBlur}
          maxLength={maxLength}
          onChange={onChange}
        />
        <span className="idMsg">{content}</span>
      </td>
    </tr>
  );
}

export default SinupInputList;
