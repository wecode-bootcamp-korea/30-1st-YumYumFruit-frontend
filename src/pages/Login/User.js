import React, { useEffect } from 'react';

function User(props) {
  useEffect(() => {
    const { userId } = props;
    fetch(`https://api.google.com/user/${userId}`)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          console.log(`${res.user.name} 님 환영합니다`);
        }
      });
  }, []);
}

export default User;