<template>
<div class="row">
  <div
   class="col-lg-4 mt-3" 
  v-for="(group, index) in groups" 
  :key="index"
  >
  <div class="card">
  <div class="card-header">{{ group.nama }}</div>
  <div class="card-body">
    <h5 class="card-title">{{ group.alamat }}</h5>
  </div>
  <div class="card-body">
    <h5 class="card-title">{{ group.pesanan }}</h5>
     
    
  </div>
  <div class="card-footer text-muted">
      <router-link 
      class="btn btn-primary" 
            :to="{ name: 'Detailgroups', params: { id: group.id } } "
              >Detail</router-link
            >
            </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
props: ["groups"],
};
</script>

<style>
</style>