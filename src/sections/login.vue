<template>
  <transition name="fade" tag="div">
  <div class="shopping-cart-wrap">
    <Login/>
  </div>
</transition>
</template>

<script>
import Login from '@/components/Login'

export default {
  name: 'cart',
  components: {
    Login
  }
}
</script>

