<template>
  <aside>
    <div class="aside-block">
      <input class="test" type="text" v-model="busqueda" placeholder="Search things..."  @input="updateBusqueda($event)"/>
    </div>
      <div class="aside-block">
      <label for="pricerange">Maximum Price: <span>${{ pricerange }}</span></label>
      <input
        class="slider"
        id="pricerange"
        tabindex="0"
        :value="pricerange"
        type="range"
        :min="min"
        :max="max"
        step="0.1"
        @input="updateHighPrice($event)"
      />
      <span class="min">${{ min }}</span>
      <span class="max">${{ max }}</span>
    </div>
    <div class="aside-block">
        <h4>Super Sale</h4>
        <label class="checkbox-control">
          <span class="label-name">Show only sale item</span>
          <input type="checkbox" v-model="check" @change="updateSale">
          <div class="checkbox-box"></div>
        </label>
    </div>
    <!-- <div class="aside-block">
      <h4>Support</h4>
      <p>Get in touch with us for any queries at <a href="#">support@bazaaar.in</a></p>
    </div> -->
  </aside>
</template>

<script>
import store from '@/store/index'
export default {
  name: 'Sidebar',
  data() {
    return {
      min: 0,
      max: 2000.00,
      check: this.checked,
      busqueda: this.busquedas
    };
  },
  computed: {
    pricerange() {
      return this.$store.state.highprice
    },
    checked() {
      return this.$store.state.sale;
    },
    busquedas() {
      return this.$store.state.busqueda;
    }
  },
  methods: {
    updateHighPrice($event) {
      this.$store.commit('setHighPrice', $event.target.value)
    },
    updateSale() {
      this.$store.commit('toggleSale');
      console.log(this.$store.state.busqueda)
    },
    updateBusqueda($event) {
      this.$store.commit('setBusqueda', $event.target.value)
    },
  }

}
</script>

<style lang="css">
  .aside-block {
    padding: 40px 0;
    border-bottom: 1px solid #eee;
    font-size: 15px;
  }
  .min {
    float: left;
  }
  .max {
    float: right;
  }

  .aside-block h4 {
    margin-bottom: 10px;
  }
  .checkbox-control {
    position: relative;
    display: inline-block;
  }
  .checkbox-box {
    width: 18px;
    height: 18px;
    border: 2px solid #131313;
    position: relative;
    cursor: pointer;
    float: left;
    top: 2px;
    margin-right: 10px;
  }

  input[type="checkbox"] {
    opacity: 0;
    position: absolute;
  }

  input[type="checkbox"]:hover ~ .checkbox-box, input[type="checkbox"]:focus ~ .checkbox-box, input[type="checkbox"]:checked ~ .checkbox-box{
    border-color: #5044ff;
  }

  input[type="checkbox"]:checked ~ .checkbox-box::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 2px;
    left: 2px;
    background: #5044ff;
  }


  .test {
  display: block;
  width: 300px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white url("../assets/search-icon.svg") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

</style>
