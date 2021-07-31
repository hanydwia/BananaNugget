<template>
  <div class="home">
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createproducts"
      >Add products</router-link
    >

    <Cardproducts :products="products" />

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nama</th>
          <th scope="col">Harga</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.nama}}</td>
          <td>{{ product.harga}}</td>
          <td>
            <router-link 
            class="btn btn-success" 
            :to="{name:'Editproducts', params:{id:product.id}} "
              >Edit</router-link
            >
            <button @click.prevent="productDelete(product.id)" 
            class="btn btn-danger"
            >
            delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import Cardproducts from "@/components/Cardproducts.vue";
import { onMounted, ref } from 'vue';

export default {
  name: "Home",
  components: {
    Slider,
    Cardproducts,
  },
  setup(){
    let products = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/products')
      .then(response => {
        products.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

function productDelete(id){
  axios.delete(`http://127.0.0.1:8000/api/products/${id}`)
  .then(()=>{
    let z = this.products.map(products => products.id).indexOf(id);
    this.products.splice(z, 1)
  }).catch(error => {
    console.log(error)
  })
}

    return {
      products,
      productDelete
    }
  }
};
</script>
