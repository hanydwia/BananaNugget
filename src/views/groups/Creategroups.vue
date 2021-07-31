<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">Add Pesanan</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nama Customer</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="group.nama"
          />
          <div class="alert alert-danger" v-if="validation.nama">
            {{ validation.nama[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Alamat</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="group.alamat"
          />
          <div class="alert alert-danger" v-if="validation.alamat">
            {{ validation.alamat[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Pesanan</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="group.pesanan"
          />
          <div class="alert alert-danger" v-if="validation.pesanan">
            {{ validation.pesanan[0] }}
          </div>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">Group</label>
        <select class="form-select" aria-label="Default select example" 
        v-model="group.groups_id">
 <option v-for="group in groups" :key="group.id" :value="group.id">
   {{ group.name }}
   </option>
  
</select>
</div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const group = reactive({
      nama: "",
      alamat: "",
      pesanan: "",
      groups_id: "",
    });

let groups = ref([]);
    const validation = ref([]);

    const router = useRouter();
    onMounted(() => {
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

    function store() {
      let nama = group.nama;
      let alamat = group.alamat;
      let pesanan = group.pesanan;
      let groups_id = group.groups_id;

      axios
        .post("http://127.0.0.1:8000/api/groups/", {
          nama: nama,
          alamat: alamat,
          pesanan: pesanan,
          groups_id: groups_id
        })
        .then(() => {
          router.push({
            name: "Home",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      group,
      validation,
      router,
      store,
      groups,
    };
  },
};
</script>
