<script>
export default {
    props: {
        image: String,
        title: String,
    }
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h3>{{ title }}</h3>
    </div>
    <div class="card-body">
      <img v-if="image" :src="image" aria-hidden="true" class="card-image" />
        <slot></slot>
    </div>
  </div>
  </template>
 
<style>
.card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}


</style>