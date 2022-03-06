import OrderTable from 'components/OrderTable/OrderTable';

export const TABMENU_DATA = {
  CATEGORY_ARR: [
    { id: 1, name: '국내배송상품', className: 'domestic', src: '/order/cart' },
    { id: 2, name: '해외배송상품', className: 'overseas', src: '/order/cart' },
  ],
  MAPPING_OBJ: { 1: <OrderTable />, 2: <div>해외배송</div> },
};
