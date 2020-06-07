<template>
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
</template>

<script>
import router from "@/router"

export default {
    data: () => ({
        goHome(){
            router.push({name: 'home', params: {id: this.$route.params.id}})
        },

        goLista(){
            router.push({name:'lista', params: {id: this.$route.params.id}})
        },

        goAssistidos(){
            router.push({name: 'assistidos', params: {id: this.$route.params.id}})
        }
    })

}
</script>

<style>

</style>