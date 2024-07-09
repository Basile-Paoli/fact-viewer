<script setup lang="ts">
import {FactLog} from "../interfaces/interfaces.ts";

const {logs} = defineProps<{
    logs: FactLog[]
}>()
</script>

<template>
<div class="bg-white m-6 p-8 w-[500px]">
    <div class="font-bold underline ">
        Logs
    </div>
    <div v-for="log in logs" class="mt-4">
        <div class="font-bold">
            {{ log.date.toDateString() }}
        </div>
        <div class="font-bold">
            {{ log.type }} Fact
        </div>
        <div class="text-nowrap overflow-hidden overflow-ellipsis">
            {{ log.message }}
        </div>
    </div>
</div>
</template>

<style scoped>

</style>