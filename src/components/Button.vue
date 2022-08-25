<template>
    <div>
        <button class="btn" @click="run">Click</button>
        <h1>{{datas}}</h1>
        <h1>Button Child {{store.counter}}</h1>

        <p>{{store.doubleCount}}</p>

        <button @click="push">Push from Button</button>

    </div>
</template>

<script>
import { useCounterStore } from '../stores/counter'

export default {
    props:['datas'],
    setup (props,context) {
        let store = useCounterStore()

        let push = () =>{
            store.array.push(2)
        }

        let run = () =>{

            context.emit("childtoParent")            
            console.log("run")
        }


        return {run,store,push}
    }
}
</script>

<style lang="scss" scoped>

</style>