<template>
  <v-container>
      <v-app-bar color="rgb(104, 105, 106)" flat app>
          <v-spacer></v-spacer>
              Lista Filmes

      </v-app-bar>
          <h1 id="p1">
              Procure por um filme
          </h1>
            <br/>
      <div id="movies-search">
          <div>
              
          <v-text-field
          outlined
          placeholder="Busque por um filme"
          v-model='termo'
          ></v-text-field>
          <v-btn
          dark
          @click="buscaFilmes(termo)"
          >Buscar</v-btn>
          </div>
          <br/>
          <br/>
        <div>
        <div>
           <!-- INSERIR AQUI IMAGEM PARA CRIAR TEMPLATE PARA UTILIZAR NO V-FOR !-->
        </div>
        </div>
              
      </div>
      
  </v-container>
  
</template>

<script>
import loginService from "@/services/loginService"
import movieService from '@/services/movieService'
export default {
    data: () => ({

        termo: '',
        //const baseURL = 'http://image.tmdb.org/t/p/'
    }),

    methods: {
        buscaFilmes(termo){
            movieService.getFilmes(termo);
        }
    },
    
    mounted() {
        loginService.verificaLogin(this.$route.params.id)
        
    }

}
</script>

<style>
#p1{
    text-align: center;
}
</style>