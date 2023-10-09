<template>
    <nav>
      <router-link to="/login" exact>
        <div class="logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="user"><path fill="#231f20" d="M7.763 2A6.77 6.77 0 0 0 1 8.763c0 1.807.703 3.505 1.98 4.782a6.718 6.718 0 0 0 4.783 1.981 6.77 6.77 0 0 0 6.763-6.763A6.77 6.77 0 0 0 7.763 2ZM3.675 13.501a5.094 5.094 0 0 1 3.958-1.989c.024.001.047.007.071.007h.023c.022 0 .042-.006.064-.007a5.087 5.087 0 0 1 3.992 2.046 6.226 6.226 0 0 1-4.02 1.468 6.212 6.212 0 0 1-4.088-1.525zm4.032-2.494c-.025 0-.049.004-.074.005a2.243 2.243 0 0 1-2.167-2.255 2.246 2.246 0 0 1 2.262-2.238 2.246 2.246 0 0 1 2.238 2.262c0 1.212-.97 2.197-2.174 2.232-.028-.001-.056-.006-.085-.006Zm4.447 2.215a5.594 5.594 0 0 0-3.116-2.052 2.749 2.749 0 0 0 1.428-2.412A2.747 2.747 0 0 0 7.704 6.02a2.747 2.747 0 0 0-2.738 2.762 2.73 2.73 0 0 0 1.422 2.386 5.602 5.602 0 0 0-3.081 1.995 6.22 6.22 0 0 1-1.806-4.398 6.27 6.27 0 0 1 6.263-6.263 6.27 6.27 0 0 1 6.263 6.263 6.247 6.247 0 0 1-1.873 4.457z"></path></svg></div>
      </router-link>
      <router-link to="/" exact>
        <div class="logo"><logo></logo></div>
      </router-link>
      
      <router-link to="/furniture">Furniture</router-link>
      <router-link to="/decor">Decor</router-link>
      <div class="nav-link">
        <router-link to="/cart" exact>
        <div class="cart-link">
          <div v-if="noItems > 0" class="cart-link__count">{{ noItems }}</div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-labelledby="shopicon" role="presentation" width="30" height="30">
            <title id="cart">
              Shopping Cart
            </title>
            <path fill="black" d="M8.01 10c-1.104 0-2 .896-2 2 0 1.105.896 2 2 2h10.376l10.53 49.813c-.107 1.14.952 2.245 2.095 2.187h50c1.057.015 2.03-.943 2.03-2s-.973-2.015-2.03-2H32.637l-1.688-8H85.01c.896-.01 1.742-.69 1.938-1.562l7-30c.26-1.16-.748-2.43-1.937-2.438H23.76l-1.78-8.437c-.2-.884-1.063-1.57-1.97-1.563zm16.594 14H89.51l-6.093 26H30.104zM42.01 72c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm28 0c-4.946 0-9 4.053-9 9s4.054 9 9 9c4.948 0 9-4.053 9-9s-4.052-9-9-9zm-28 4c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5zm28 0c2.786 0 5 2.215 5 5s-2.214 5-5 5c-2.784 0-5-2.215-5-5s2.216-5 5-5z"/>
          </svg>
        </div>
        </router-link>
      </div>
    </nav>
</template>

<script>
import index from '@/store/index'
import logo from '@/assets/logo'

export default {
  name:'TopNavigation',
  components: {
    logo
  },
  computed: {
    noItems() {
      return this.$store.state.cartItems
    }
  }
}
</script>

<style lang="css">
nav {
  box-shadow: 1px 0rem 14px 0px #eee;
  width: 100%;
  padding: 24px;
  position: fixed;
  height: 66px;
  background-color: #fff;
  z-index: 99;
}

nav > a {
  font-size: 16px;
  color: #131313;
  font-weight: bold;
  text-decoration: none;
  margin-right: 50px;
  letter-spacing: 0.5px;
}

nav a:hover {
  opacity: 0.7;
}

nav a.router-link-active {
  color: #5044ff;
}

.logo {
  float: left;
  position: relative;
  top: -7px;
  padding-right: 20px;
}

.logo svg {
  width: 40px;
  height: 40px;
}

@media(max-width: 600px) {
  nav {
    padding: 20px;
  }

  nav > a {
    margin-right: 20px;
  }
}

.nav-link {
  display: inline;
}

.cart-link {
  float: right;
  position: relative;
}

.cart-link__count {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  top: -8px;
  right: -5px;
  background: #5044ff;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
</style>
