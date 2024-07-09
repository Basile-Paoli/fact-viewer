<script setup lang="ts">
import {ref} from "vue";

const {type, getFact, } = defineProps<{
    type: string,
    getFact: () => Promise<string>
}>()

const fact = ref("")

const emit = defineEmits<{
    (event: "log-fact", text: string, type: string): void
}>()

const getNewFact = async () => {
    const text = await getFact()
    fact.value = text
    emit("log-fact", text, type)

}
</script>

<template>
    <div class="rounded-2xl shadow-xl border border-black/25 bg-white h-[300px] w-[400px] p-8 my-10">
        <div class="flex justify-between">
            <div>A cool <span class="font-bold underline">{{ type }}</span> Fact</div>
            <button @click="getNewFact"><img class="rounded-full bg-red-500 h-8" src="../assets/arrow-down.svg"/></button>
        </div>
        <div class="font-bold mx-2 mt-4">{{ fact }}</div>
    </div>
</template>

<style scoped>


</style>