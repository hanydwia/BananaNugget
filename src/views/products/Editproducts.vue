<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Edit product</h5>
      <form class="row g-3" @submit.prevent="update">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nama</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="product.nama"
          />
          <div class="alert alert-danger" v-if="validation.nama">
            {{ validation.nama[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Harga</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="product.harga"
          />
          <div class="alert alert-danger" v-if="validation.harga">
            {{ validation.harga[0] }}
          </div>
        </div>
         <div class="col-6">
          <label for="inputAddress" class="form-label">Group</label>
        <select class="form-select" aria-label="Default select example" 
        v-model="product.groups_id">
 <option v-for="group in groups" :key="group.id" :value="group.id">
   {{ group.name }}
   </option>
</select>
</div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
export default {

  setup() {
    const product = reactive({
      nama: "",
      harga: "",
      groups_id:""
    });

    let groups = ref([]);
    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

onMounted(() => {
  axios.get(`http://127.0.0.1:8000/api/products/${route.params.id}/edit`)
  .then(response => {
console.log(response.data.data.nama);

    product.nama = response.data.data.nama;
    product.harga = response.data.data.harga;
    product.groups_id = response.data.data.groups_id;
  })
  .catch(error => {
    console.log(error.response.data);
  });

axios
        .get("http://127.0.0.1:8000/api/groups")
        .then((response) => {
         groups.value = response.data.data;
         console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
});

    function update() {
      let nama = product.nama;
      let harga = product.harga;
      let groups_id = product.groups_id;

      axios.put(`http://127.0.0.1:8000/api/products/${route.params.id}`, {
          nama: nama,
          harga: harga,
          groups_id: groups_id,
        })
        .then(() => {
          router.push({
            name: "Home",
          });
        })
        .catch((error) => {
          validation.value = error.response.data;
        });
    }
    return {
      product,
      validation,
      router,
      update,
      route,
      groups,
    };
  },
};
</script>
