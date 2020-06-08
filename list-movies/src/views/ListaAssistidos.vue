<template>
    <v-container>
    <v-app-bar id="appbar" color="rgb(104, 105, 106)" flat app>
          <v-row>
              <h4>Lista Filmes</h4>
            </v-row>
            <v-row>
                <v-btn
                icon
                @click="goHome()"
                ><v-icon>mdi-magnify</v-icon>
                Busca de filmes
                </v-btn>
            </v-row>
            <v-row>
              <v-btn
              icon
              @click="goLista()"
              ><v-icon>mdi-popcorn</v-icon>
              Minha Lista de Filmes
              </v-btn>
            </v-row>
            <v-row>
            <v-btn
              icon
              @click="goAssistidos()"
              ><v-icon>mdi-check</v-icon>
              Meus filmes assistidos
              </v-btn>
            </v-row>
      </v-app-bar>
        <v-container>
            <v-row align="center" justify="center">
          <h4>Lista de filmes assistidos de {{conta.nome}}</h4>
      </v-row>
      <v-spacer/>
      <v-spacer/>
      <v-container v-if="val">
          <v-card v-for="filme in filmes" :key="filme.index" tile>
            <v-row v-if="filme.id != null">
            <v-col cols="4">
              <v-card-title>
                  {{filme.title}}
              </v-card-title>
            <v-spacer></v-spacer>
              <v-card-text>
                <v-img
                    :src ="`http://image.tmdb.org/t/p/original/${filme.poster_path}`" 
                    alt=''
                    width="140px"
                    /> 
              </v-card-text>
                </v-col>
                <v-col cols="5">
                   <v-card-text>
                       <br/>
                       <br/>
                       <br/>
                       {{filme.overview}}
                   </v-card-text>
                </v-col>
                <br/>   
                </v-row>
                <v-spacer/>
          </v-card>        
        </v-container>
    </v-container>
    </v-container>

</template>

<script>
import router from "@/router"
import loginService from '@/services/loginService'

export default {
    data: () => ({
        conta: [],
        filmes: [],
        val: false,

        goHome(){
            router.push({name: 'home', params: {id: this.$route.params.id}})
        },

        goLista(){
            router.push({name:'lista', params: {id: this.$route.params.id}})
        },

        goAssistidos(){
            router.push({name: 'assistidos', params: {id: this.$route.params.id}})
        }
    }),

    mounted(){
        loginService.verificaLogin(this.$route.params.id)
        this.conta = loginService.getConta(this.$route.params.id)
        if(this.conta.listaAssistidos.length > 1){
            this.filmes = loginService.getListaAssistidos(this.conta.id)
            this.val = true
        }
    }

}
</script>

<style>

</style>