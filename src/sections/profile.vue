<template>
  <transition name="fade" tag="div">
  <div>
    <h1>Shopping Cart</h1>
    <Profile/>
  </div>
</transition>
</template>

<script>
import Profile from '@/components/Profile'

export default {
  name: 'cart',
  components: {
    Profile
  }
}
</script>
