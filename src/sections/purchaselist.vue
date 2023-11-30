<template>
    <transition name="fade" tag="div">
        <div>
      <PurchaseList/>
    </div>
  </transition>
  </template>
  
  <script>
  import PurchaseList from '@/components/PurchaseList'
  
  export default {
    name: 'cart',
    components: {
        PurchaseList
    }
  }
  </script>