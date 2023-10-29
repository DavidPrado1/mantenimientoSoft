<template>
  <transition name="fade" tag="div">
  <div>
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
