<template>
    <div>
    <step-progress :steps=this.purchase :current-step=this.currentStep icon-class="fa fa-check"></step-progress>
    </div>

</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import axios from 'axios'
import StepProgress from 'vue-step-progress';


import 'vue-step-progress/dist/main.css';


export default {
  name: 'Purchase',
  components:{'step-progress': StepProgress},
  data() {
    return {
      postURL: 'http://localhost:5000',
     compraActual:{},
     compra:this.$route.params.id,
     getCompra:{id:''},
     currentStep: 0,
     hola:["Compra Recibida","Compra siendo alistada","Compra lista en despacho","Compra llendo a su hogar","Compra en su hogar"]
    };
  },

  computed : {
    ...mapState({
       user: state => state.user
    }),
    purchase(){
        return this.hola;
    }

  },
  created() {
    console.log(this.$route.params.id)
    this.getCompra.id=this.compra
    this.initialize()
    console.log("hola")
  },
  methods:{
    update () {

        var config_request={
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                    axios.patch(this.postURL + '/update_usuario', this.editUser, { config_request })
                    .then(res => {                                         
                        this.$router.push('/');
                        alert("Datos actualizados")
                    })
                    .catch((error) => {
                        console.log(error)
                    });
                },initialize() {
    var config_request={
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                    axios.post(this.postURL + '/venta', this.getCompra, { config_request })
                    .then(res => {                                         
                        this.currentStep = parseInt(res.data.estado);
                        console.log(this.compraActual)
                    })
                    .catch((error) => {
                        console.log(error)
                    });
                },

                   
  },
  
}
</script>

