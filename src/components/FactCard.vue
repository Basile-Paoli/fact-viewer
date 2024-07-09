<script setup lang="ts">
import {ref} from "vue";

const {label, getFact} = defineProps<{
    label: string,
    getFact: () => Promise<string>
}>()

const fact = ref("")

const getNewFact = async () => {
    fact.value = await getFact()
}
</script>

<template>
    <div class="rounded-2xl shadow-xl border border-black/25 bg-white h-[300px] w-[400px] p-8 m-4">
        <div class="flex justify-between">
            <div>A cool <span class="font-bold underline">{{ label}}</span> Fact</div>
            <button @click="getNewFact" ><img class="bg-red-500 h-8" src="../assets/arrow-down.svg"/> </button>
        </div>
        <div class="font-bold mx-2 mt-4">{{fact}}</div>
    </div>
</template>

<style scoped>

</style>