<template>
    <div>
        <h1>This is test </h1>
        <ul>
            <li v-for="(item,index) in store.data" :key="index" >{{item}}</li>
            <h1>{{store.addArray}}</h1>
            
            <button @click="add">Add to counter js pinia</button>

            <button @click="store.increment" >Change Uppercase</button>

        </ul>
    </div>
</template>

<script>
import { useCounterStore } from '../stores/counter';

export default {
    setup () {

        let store = useCounterStore()

        let add = () =>{
            store.array.push(1)
        }

        let run = () => {
            store.increment()
        }
        

        return {store,add,run}
    }
}
</script>

<style lang="scss" scoped>

</style>