import React from 'react';
import './Signup.scss';

function SinupInputList({ onChange, item }) {
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
          maxLength={maxLength}
          onChange={onChange}
        />
        <span className="idMsg">{content}</span>
      </td>
    </tr>
  );
}

export default SinupInputList;
