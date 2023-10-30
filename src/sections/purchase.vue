<template>
    <transition name="fade" tag="div">
    <div>
      <Purchase/>
    </div>
  </transition>
  </template>
  
  <script>
  import Purchase from '@/components/Purchase'
  
  export default {
    name: 'cart',
    components: {
        Purchase
    }
  }
  </script>