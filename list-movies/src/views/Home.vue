<template>
  <v-container>
      <v-app-bar color="rgb(104, 105, 106)" flat app>
          <v-spacer></v-spacer>
          <v-app-bar-title>
              <v-text>
              Lista Filmes
              </v-text>
          </v-app-bar-title>
      </v-app-bar>
          <h1 id="p1">
              Procure por um filme
          </h1>
            <br/>
      <div id="movies-search">
          <div>
              <!-- adicionar v-model  para termosbusca !-->
          <v-text-field
          outlined
          placeholder="Busque por um filme"
          
          ></v-text-field>
          <v-btn
          dark>Buscar</v-btn>
          </div>
          <br/>
          <br/>
        <div>
        <div>
            <v-text>
                O nome do filme vai aqui
            </v-text>
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
    data: () => {
        //const baseURL = 'http://image.tmdb.org/t/p/'
    },
    mounted() {
        loginService.verificaLogin(this.$route.params.id)
        movieService.getFilmesPopulares()
    }

}
</script>

<style>
#p1{
    text-align: center;
}
</style>