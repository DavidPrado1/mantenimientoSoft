<template>
<div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg">
                <span class="font-weight-bold">{{user}}</span>
            </div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Nombre</label>
                        <input type="text" class="form-control" placeholder="first name" v-model="editUser.nombres"></div>
                    <div class="col-md-6"><label class="labels">Apellido</label>
                        <input type="text" class="form-control" v-model="editUser.apellidos" placeholder="surname"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Dirección</label>
                        <input type="text" class="form-control" placeholder="enter address" v-model="editUser.direccion"></div>
                    <div class="col-md-12"><label class="labels">Telefono</label>
                        <input type="text" class="form-control" placeholder="enter phone number" v-model="editUser.telefono"></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" @click="update">Save Profile</button></div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import axios from 'axios'
export default {
  name: 'Profile',
  data() {
    return {
      postURL: 'http://localhost:5000',
      editUser: {
        email:this.$store.state.user,
        nombres: '',
        apellidos: '',
        direccion: '',
        telefono: ''
     },
    };
  },

  computed : {
    ...mapState({
       user: state => state.user
    }),

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
                },

                   
  }
}
</script>