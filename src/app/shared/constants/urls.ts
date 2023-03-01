const BASE_URL = "http://localhost:5000/";

export const VENDOR_PRODUCTS_URL = BASE_URL + 'vendor/products'
export const VENDOR_ADD_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/add'
export const VENDOR_EDIT_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/edit'
export const VENDOR_DELETE_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/delete'
export const VENDOR_SEARCH_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/search'
export const VENDOR_FILTER_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/filter'

//////////////////////////////////////////////////////////////////////////////////

export const CART = BASE_URL + 'cart';
export const ADD_TO_CART = CART + '/add-to-cart';
export const DELETE_FROM_CART = CART + 'delete-from-cart';
export const UPDATE_CART = CART + 'update-cart';
export const EMPTY_CART = CART + 'empty-cart';