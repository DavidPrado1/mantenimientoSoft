<template>
    <nav>
        
      <Dropdown title="Services" :items="services" class="nav2" />
      <router-link to="/" exact>
        <div class="logo"><logo></logo></div>
      </router-link>
      <router-link to="/purchaselist" exact>
        <div class="logo">
          <svg fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 483.1 483.1" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M434.55,418.7l-27.8-313.3c-0.5-6.2-5.7-10.9-12-10.9h-58.6c-0.1-52.1-42.5-94.5-94.6-94.5s-94.5,42.4-94.6,94.5h-58.6 c-6.2,0-11.4,4.7-12,10.9l-27.8,313.3c0,0.4,0,0.7,0,1.1c0,34.9,32.1,63.3,71.5,63.3h243c39.4,0,71.5-28.4,71.5-63.3 C434.55,419.4,434.55,419.1,434.55,418.7z M241.55,24c38.9,0,70.5,31.6,70.6,70.5h-141.2C171.05,55.6,202.65,24,241.55,24z M363.05,459h-243c-26,0-47.2-17.3-47.5-38.8l26.8-301.7h47.6v42.1c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h141.2v42.1 c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h47.6l26.8,301.8C410.25,441.7,389.05,459,363.05,459z"></path> </g> </g></svg>
        </div>
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
import Dropdown from './Dropdown'

export default {
  name:'TopNavigation',
  components: {
    logo,
    Dropdown
  },
  data() {
    return {
      services: [
        {
          title: 'Perfil',
          link: '#'
        },
        {
          title: 'Modificar Perfil',
          link:'#/profile'
        },
        {
          title: 'Cerrar Sesion',
          link: '#/login'
        }
      ]
    };
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
.nav2 {

  align-items: center;
  justify-content: center;
}

.nav2 .menu-item {
  color: #000000;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

.nav2 .menu-item.active,
.nav2 .menu-item:hover {
  background-color: #4444445e;
  border-bottom-color: #5c5c5c;
}

.nav2 .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>
