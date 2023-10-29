<template>
  <div class="shopping-cart">
    <div v-if="$store.state.cart.length <= 0" class="empty-cart">
      <p>Your cart is currently empty.</p>
      <router-link to="/">
        <button>Shop Now!</button>
      </router-link>
    </div>
    <div v-else class="shopping-cart-items">
      <!-- <ul>
        <li v-for="product in products" class="cart-product-card">
          <img :src="`./static/images/${product.img}`" :alt="`Image of ${product.title}`">
          <span class="product-title">{{product.title}}</span>
          <span class="product-title">{{product.total| currency}}</span>
          <span class="product-price"> {{product.price | currency}}</span>
          <span class="product-cart-quantity">Quantity: {{product.quantity}}</span>
        </li>
      </ul>-->
      <ul>
        <table class="table">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" >
            <td><img :src="product.img" alt="Product image" class="imgText"></td>
            <td>{{ product.title }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.totalcart | currency }}</td>
            <td> <b-button pill variant="outline-secondary"  @click="lessOne(product)"><b>-</b></b-button><b-button pill variant="outline-secondary" @click="deletePro(product)">V</b-button></td>
          </tr>
        </tbody>
      </table>
      </ul>
      <div class="cart-checkout">
        <h3>Cart total : </h3>
        <p>{{ total | currency}}</p>
        <!-- <button :disabled="$store.state.cart.length <= 0" @click="$store.dispatch('checkout')">Checkout</button>
        <p class="status" v-if="$store.state.checkoutStatus">{{$store.state.checkoutStatus}}</p> -->
        <!-- <button :disabled="$store.state.cart.length <= 0" @click="$store.dispatch('checkout')">Checkout</button> -->
        <button @click="checkout">Checkout</button>
        
        <div class="elfsight-app-e13cf2aa-6cf3-4e4c-8ae5-812c86844ec1"></div>
        <p class="status" v-if="checkoutStatus">{{checkoutStatus}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import store from '@/store/index'
export default {
  name: 'ShoppingCart',
  data() {
      return {
        
      }
    },
  computed: {
    ...mapGetters({
      products:'cartProducts',
      total:'cartTotal',

    }),
    ...mapState({
      checkoutStatus: 'checkoutStatus'
    }),
    created() {
    // shop.getProducts(products => {
    //   // this.products = products;
    //   store.commit('setProducts',products)
    // });
    console.log(this.$store.state.cart)
    },
  },
  methods: {
    ...mapActions({
      checkout: 'checkout'
    }),
    deletePro(product){
      this.$store.state.cart.splice(product, 1);
      this.$store.state.cartItems = this.$store.state.cartItems - product.quantity;
    }
  },

  // computed: {
  //   products() {
  //     return this.$store.getters.cartProducts
  //   },
  //   total() {
  //     return this.$store.getters.cartTotal
  //   }
  // }

  mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://static.elfsight.com/platform/platform.js')
      document.head.appendChild(recaptchaScript)
    }
}
</script>




<style lang="css" scoped>
.empty-cart {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%,-45%);
}

.empty-cart p {
  margin-bottom: 30px;
}

.shopping-cart-items {
  display: flex;
  flex-direction: row;
  padding-left: 0;
}

ul {
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  flex: 2;
  padding-left: 0;
  justify-content: center;
}

.cart-checkout {
  flex: 1;
  justify-content: center;
  margin: auto;
}

table{
  font-size: 20px;
  text-align: center;
}

.cart-checkout p {
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 18px;
}

.cart-product-card {
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  margin-bottom: 40px;
}
.product-price {
  margin-bottom: 5px;
}

img {
  width: 180px;
  height: 240px;
}

td{
  text-align: center;
}

.imgText {
  width: 60px;
  height: auto;
}

@media(max-width: 600px) {
  .shopping-cart-items {
    flex-direction: column;
  }

  .cart-product-card {
    margin-right: 0px;
  }
  ul {
    justify-content: space-around;
  }

  img {
    width: auto;
  }
}
</style>
