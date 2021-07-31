<template>
 <div class="card text-center mt-4" v-for="f in product" :key="f.id">
  <div class="card-header">
    Detail teman
  </div>
  <div class="card-body">
    <h5 class="card-title">{{ f.nama }}</h5>
    <p class="card-text">
        {{ f.harga }}
    </p>
    <p class="card-text">
         {{ f.groups.name }}
         </p>
  </div>
  <div class="card-footer">
       <router-link 
            class="btn btn-success" 
            :to="{name:'Editproducts', params:{id:f.id}} "
              >Edit</router-link
            >
            <button @click.prevent="productDelete(f.id)" 
            class="btn btn-danger"
            >
            delete
            </button>
  </div>
</div>
</template>

<script>
import {onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
export default {

  setup() {
let product = ref([]);
    const router = useRouter();

    const route = useRoute()

onMounted(()=>{
  axios.get(`http://127.0.0.1:8000/api/products/${route.params.id}`)
  .then(response => {
console.log(response.data.data.nama)

    product.value = response.data.data;
  }).catch(error =>{
    console.log(error.response.data)
  });
});

function productDelete(id){
  axios.delete(`http://127.0.0.1:8000/api/products/${id}`)
  .then(()=>{
   router.go(-1);
  }).catch(error => {
    console.log(error)
  })
}

    
    return {
      product,
      router,
      productDelete,
      route
    };
  },
};
</script>

<style>
</style>