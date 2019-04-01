<template>
   <iframe :src="src" style="height:75vh;width:100%"></iframe>
</template>

<script>
export default {
  name: 'web',
  created(){
      this.src= this.$route.params.outSideUrl
      console.log(this.src)
  },
  data(){
      return{
          src:''
      }
  },
  props: {
  
  },
  computed: {
   
  }
}
</script>

<style>

</style>
