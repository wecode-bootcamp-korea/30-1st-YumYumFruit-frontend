export const NAV_LIST_DATA = {
  userPageLinks: [
    {
      id: 1,
      name: 'LOGIN',
      url: '/login',
    },
    {
      id: 2,
      name: 'JOIN',
      url: '/signup',
    },
    {
      id: 3,
      name: `CART (${localStorage.getItem('cartItemCnt')})`,
      url: '/',
    },
    {
      id: 4,
      name: 'MYPAGE',
      url: '/',
    },
  ],
  productPageLinks: [
    {
      id: 1,
      name: '전체상품',
    },
    {
      id: 2,
      name: '국산과일',
    },
    {
      id: 3,
      name: '수입과일',
    },
    {
      id: 4,
      name: '냉동과일',
    },
    {
      id: 5,
      name: '세트과일',
    },
  ],
  boardPageLinks: [
    {
      id: 1,
      name: 'NOTICE',
      url: '/',
    },
    {
      id: 2,
      name: 'Q&A',
      url: '/',
    },
    {
      id: 3,
      name: 'REVIEW',
      url: '/',
    },
    {
      id: 4,
      name: 'GUIDE',
      url: '/',
    },
  ],
};
