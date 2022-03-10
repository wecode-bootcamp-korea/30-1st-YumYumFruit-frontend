import React, { useState, useEffect } from 'react';

function CheckBox({ id, isallChecked, onChange }) {
  const [isChecked, setIsChecked] = useState(false);
  const allCheck = () => setIsChecked(isallChecked);

  useEffect(() => allCheck(), [isallChecked]);

  const checkHandler = e => {
    setIsChecked(!isChecked);
    onChange(id, e.target.checked);
  };

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={e => checkHandler(e)}
    />
  );
}

export default CheckBox;
