import shop from '@/api/shop'

export default { // setting and updating the state
  setProducts(state,products) {
    state.products = products
  },

  setUser(state,user) {
    state.user = user
  },

  pushProductToCart(state,productId) {
    state.cart.push({
      id: productId,
      quantity: 1
    })
    state.cartItems++
  },
  incrementItemQty(state,cartItem) {
    cartItem.quantity++
    state.cartItems++
  },
  decrementProductInventory(state,product) {
    product.inventory--
  },
  setCheckoutStatus(state,status) {
    state.checkoutStatus = status
  },
  emptyCart(state) {
    state.cart = []
    state.cartItems = 0
  },
  setHighPrice(state, event) {
    state.highprice = event
  },

  setBusqueda(state, event) {
    state.busqueda = event
  },
  toggleSale(state) {
    state.sale = !state.sale
  }
}
