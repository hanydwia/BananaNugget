<template>
  <div class="home">
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/creategroups"
      >Add Pesanan</router-link
    >

    <Cardgroups :groups="groups" />

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nama</th>
          <th scope="col">Alamat</th>
          <th scope="col">Pesanan</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(group, index) in groups" :key="index">
          <td>{{ group.nama}}</td>
          <td>{{ group.alamat}}</td>
          <td>{{ group.pesanan}}</td>
          <td>
            <router-link 
            class="btn btn-success" 
            :to="{name:'Editgroups', params:{id:group.id}} "
              >Edit</router-link
            >
            <button @click.prevent="groupDelete(group.id)" 
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
import Cardgroups from "@/components/Cardgroups.vue";
import { onMounted, ref } from 'vue';

export default {
  name: "Home",
  components: {
    Slider,
    Cardgroups,
  },
  setup(){
    let groups = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/groups')
      .then(response => {
        groups.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

function groupDelete(id){
  axios.delete(`http://127.0.0.1:8000/api/groups/${id}`)
  .then(()=>{
    let z = this.groups.map(groups => groups.id).indexOf(id);
    this.groups.splice(z, 1)
  }).catch(error => {
    console.log(error)
  })
}

    return {
      groups,
      groupDelete
    }
  }
};
</script>
