<template>
  <div id="app">
  	<div v-formato.maiusculo>Listas</div>
  	<lv-lista titulo="Aviões" :lista="avioes"></lv-lista>
  	<lv-lista titulo="Carros" :lista="carros"></lv-lista>
  </div>
</template>

<script>

import Carro from './servicos/carros'
import Aviao from './servicos/avioes'
import LvLista from './Lista.vue'

export default {
  name: 'app',
  data(){
  	return {
  		avioes: '',
  		carros: ''
  	}
  },
  components:{LvLista},
  mounted(){
    Carro.lista().then(dado => this.carros = dado.data)
    Aviao.lista().then(dado => this.avioes = dado.data)
  }
}
</script>
