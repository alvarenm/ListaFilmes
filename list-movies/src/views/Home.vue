<template>
  <div class="home">
      <h1> Home </h1>
      <br>
  <v-card id="login">
      <v-card-title>
        Login
      </v-card-title>

      <v-card-content>
      <input
      required
      type="email"
      placeholder="Email:"
      > 
      </v-card-content>
  </v-card>
  </div>

  
</template>
<style  >
#login {

   padding: 4em;
    border-radius: 40px;
    margin-top: 5em;
    margin-right: 9em;
    margin-left: 9em;
    
    line-height: 4em;
    box-shadow: 5px 5px 15px rgba(204, 204, 204);
}
</style>

  
<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
