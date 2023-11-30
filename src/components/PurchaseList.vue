<template>
        <div>
    <b-table :items="products" :fields="fields" striped responsive="sm">
      <template v-slot:cell(id)="row">
      <b-col>{{ row.item.id }}</b-col>
      </template>
      <template #cell(total)="data">
        {{ data.value | currency }}
      </template>
      <template #cell(detalles)="row">
        <b-button size="sm" @click="row.toggleDetails(); details(row.item.id)" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>
      </template>
      
      <template #row-details="row">
        <b-card>
        <b-table :items="detallesProducto" :fields="fields2" striped responsive="sm">
          <template #cell(img)="data">
            <img :src="`./static/images/${data.value}`" alt="Product image" class="imgText">
        </template>

          
          <template #cell(precio_unitario)="data">
        {{ data.value | currency }}
      </template>
      <template #cell(total)="data">
        {{ data.value | currency }}
      </template>
    </b-table>
  </b-card>
      </template>
      <template #cell(acciones)="row">
      <b-button size="sm" @click="cancelar(row.item.id)" class="mr-1">
          Cancelar Compra
        </b-button>
      </template>
    </b-table>
  </div>  
  </template>
  
  <script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  import store from '@/store/index'
  import axios from 'axios'
  export default {
    name: 'PurchaseList',
    data() {
        return {
            fields: ['id', 'fecha', 'estado','total','detalles','acciones'],
            fields2: ['img','producto', 'cantidad', 'precio_unitario','total'],
            postURL: 'http://localhost:5000',
            productos: [],
            detallesProducto:[],
            getDetalle: {},
            getCompra:{usuario:'pepe@gmail.com'},

    };
  },
  computed : {
    // ...mapState({
    //   products: state => state.products
    // }),
    products() {
      return this.productos
    }
  },
  // computed: {
  //   products() {
  //     return this.$store.state.products
  //     // return this.$store.getters.availableProducts
  //   },
  //   productInStock() {
  //     return this.$store.getters.productInStock
  //   }
  // },
  created() {
    // shop.getProducts(products => {
    //   // this.products = products;
    //   store.commit('setProducts',products)
    // });
    this.initialize()
    // this.$store.dispatch('fetchProducts')
  },
  methods : {
    ...mapActions({
      fetchProducts: 'fetchProducts',
      addProductToCart: 'addProductToCart'

    }),
    details(product){
      this.getDetalle = {id:product}
      var config_request={
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*'
                            }
                            axios.post(this.postURL + '/detalleventa', this.getDetalle, { config_request })
                            .then(res => {                                         
                                console.log(res.data);
                                this.detallesProducto = res.data;
                            })
                            .catch((error) => {
                                console.log(error)
                            });
    
      },

    initialize () {
                
        var config_request={
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*'
                            }
                            axios.post(this.postURL + '/ventas_usuario', this.getCompra, { config_request })
                            .then(res => {                                         
                                console.log(res.data);
                                this.productos = res.data;
                            })
                            .catch((error) => {
                                console.log(error)
                            });
                        },
    cancelar(product){
      this.getDetalle = {id:product}
      var config_request={
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*'
                            }
                            axios.patch(this.postURL + '/update2_venta', this.getDetalle, { config_request })
                            .then(res => {                                         
                                console.log(res.data);
                                const index = this.productos.findIndex(productos => productos.product === product) // find the post index 
                                this.productos.splice(index, 1)
                            })
                            .catch((error) => {
                                console.log(error)
                            });
    
      },

    // addProductToCart(product) {
    //   this.$store.dispatch('addProductToCart',product)
    // }
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