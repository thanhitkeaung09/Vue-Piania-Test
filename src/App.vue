<template>
  <div>
    <Button :datas="arr" @childtoParent="runEmit"></Button>
    <Test></Test>

    <h1>{{store.name}}</h1>

    <h1 v-for="(item,index) in store.array" :key="index" >{{item}}</h1>
    <ul>
      <li v-for="(item,index) in arr" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import Button from './components/Button.vue';
import Test from './components/Test.vue';
import { useCounterStore } from './stores/counter';
export default {
    setup() {

      let store = useCounterStore()
      let arr = ref(["a","b","c","d"]) 

      let runEmit = () =>{
        console.log("a")
      }

        return {arr,runEmit,store};
    },
    components: { Button, Test }
}
</script>

<style lang="scss" >
  .btn{
    padding: 10px;
    background-color: blue;
  }
</style>