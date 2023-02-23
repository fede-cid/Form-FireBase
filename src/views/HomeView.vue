<template>
  <div>
    <h1></h1>
    <HelloWorld msg="Bienvenido a Vue.js"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  mounted() {
    console.log('Componente HomeView montado correctamente.');
  }
}
</script>
