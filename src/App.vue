<script setup lang="ts">
import FactCard from "./components/FactCard.vue";
import httpClient from "./httpClient.ts";
import {ref} from "vue";
import {FactLog} from "./interfaces/interfaces.ts";

const logs = ref<FactLog[]>([])
function addLog(text: string, type: string)  {
    logs.value.push({
        date: new Date(),
        message: text,
        type: type,
    })
}
</script>

<template>
    <div class="flex justify-evenly ">
        <div>
            <FactCard type="Math" :get-fact="httpClient.getMathFact" @log-fact="addLog"></FactCard>
            <FactCard type="Date" :get-fact="httpClient.getDateFact" @log-fact="addLog"></FactCard>
        </div>
        <div v-for="log in logs">{{log.message}}</div>
    </div>
</template>

<style scoped>

</style>