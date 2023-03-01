// ****************** BASE URL ****************************

const BASE_URL = "http://localhost:5000/";


// ****************** PRODUCTS URL ****************************

export const VENDOR_PRODUCTS_URL = BASE_URL + 'vendor/products'
export const VENDOR_ADD_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/add'
export const VENDOR_EDIT_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/edit'
export const VENDOR_DELETE_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/delete'
export const VENDOR_SEARCH_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/search'
export const VENDOR_FILTER_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/filter'


// ****************** USER URL ****************************

export const USER_URL = BASE_URL + 'users'

export const USER_REGISTER_URL = USER_URL + '/register'
export const USER_LOGIN_URL = USER_URL + '/login'
export const USER_UPDATE_DATA_URL = USER_URL + '/update'