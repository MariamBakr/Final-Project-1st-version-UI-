
// // ****************** BASE URL ****************************

// const BASE_URL = "http://localhost:5000/";


// // ****************** PRODUCTS URL ****************************

// export const VENDOR_PRODUCTS_URL = BASE_URL + 'vendor/products'
// export const VENDOR_URL = VENDOR_PRODUCTS_URL + '/byId'
// export const VENDOR_ADD_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/add'
// export const VENDOR_EDIT_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/edit'
// export const VENDOR_DELETE_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/delete'
// export const VENDOR_SEARCH_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/search'
// export const VENDOR_FILTER_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/filter'
// export const VENDOR_PRODUCT_BY_ID_URL = VENDOR_PRODUCTS_URL + '/byid'

// //////////////////////////////////////////////////////////////////////////////////

// export const CART = BASE_URL + 'cart';
// export const ADD_TO_CART = CART + '/add-to-cart';
// export const DELETE_FROM_CART = CART + 'delete-from-cart';
// export const UPDATE_CART = CART + 'update-cart';
// export const EMPTY_CART = CART + 'empty-cart';



// // ****************** USER URL ****************************
// export const USER_URL = BASE_URL + 'users'

// export const USER_REGISTER_URL = USER_URL + '/register'
// export const USER_LOGIN_URL = USER_URL + '/login'
// export const USER_UPDATE_DATA_URL = USER_URL + '/update'




// ****** BASE URL **********
// ****** BASE URL **********

const BASE_URL = "http://localhost:5000/";


// ****************** PRODUCTS URL ****************************

export const VENDOR_PRODUCTS_URL = BASE_URL + 'vendor/products'


export const VENDOR_URL = VENDOR_PRODUCTS_URL + '/byId'
export const VENDOR_BY_ID_URL = VENDOR_PRODUCTS_URL + '/productbyId'
export const VENDOR_ADD_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/add'
export const VENDOR_EDIT_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/edit'
export const VENDOR_DELETE_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/delete'
export const VENDOR_SEARCH_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/search'
export const VENDOR_FILTER_PRODUCT_URL = VENDOR_PRODUCTS_URL + '/filter'

// ****** USER URL **********

export const USER_URL = BASE_URL + 'users'

export const USER_REGISTER_URL = USER_URL + '/register'
export const GET_CLIENT_NAME_URL = USER_URL + '/get_clientName'
export const USER_LOGIN_URL = USER_URL + '/login'
export const USER_UPDATE_DATA_URL = USER_URL + '/update'

// ****** CART URL **********

export const CART = BASE_URL + 'cart';
export const ADD_TO_CART = CART + '/add-to-cart';
export const DELETE_FROM_CART = CART + '/delete-from-cart';
export const UPDATE_CART = CART + '/update-cart';
export const EMPTY_CART = CART + '/empty-cart';




// ****** Custom Order URL **********


export const CUSTOM_ORDER_URL = BASE_URL + 'getCustomOrder/'
export const CUSTOM_ORDER_DETAILS_URL = CUSTOM_ORDER_URL + 'customOrderDetails/'


// ****** Proposals URL **********


export const GET_SPECIFIC_CUSTUMORDER_PROPOSALS_URL = BASE_URL + 'get_proposals'
export const POST_NEW_CUSTUMORDER_PROPOSAL_URL = BASE_URL + 'proposal/add_proposal'

// ****************** CHECKOUT URL **************************

export const VENDOR_PRODUCT_BY_ID_URL = USER_URL + '/order'
export const CHECKOUT_URL = USER_URL + 'CHECKPAYMENT'

// ****************** Proposals **********************/

export const PROPOSAL_URL = BASE_URL + 'orderProposals'
export const ACCEPT_PROPOSAL_URL = PROPOSAL_URL + '/accept'
export const REJECT_PROPOSAL_URL = PROPOSAL_URL + '/reject'
export const DISPALY_PROPOSAL_URL = PROPOSAL_URL + '/display'
export const DISPALY_VENDOR_URL = PROPOSAL_URL + '/vendor'
export const DISPALY_CLIENT_URL = PROPOSAL_URL + '/client'

// ****************** Wishlist **********************/

export const WISHLIST_URL = BASE_URL + 'wishlist'
export const ADD_TO_WISHLIST_URL = WISHLIST_URL + '/add'
export const REMOVE_FROM_WISHLIST_URL = WISHLIST_URL + '/remove'

// ****************** Wishlist **********************/

export const CLIENT_ORDER_HISTORY_URL = BASE_URL + 'clientHistory'


