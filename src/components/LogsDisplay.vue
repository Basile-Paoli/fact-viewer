<script setup lang="ts">
import {FactLog} from "../interfaces/interfaces.ts";
import formatDate from "../utils/date-format.ts";
import {computed} from "vue";

const {logs} = defineProps<{
    logs: FactLog[]
}>()
const reverseLogs = computed(() => logs.slice().reverse())


</script>

<template>
<div class="bg-white m-6 p-8 w-[500px] max-h-full overflow-auto">
    <div class="font-bold underline ">
        Logs
    </div>
    <div v-for="log in reverseLogs" class="mt-4">
        <div class="font-bold">
            {{ formatDate(log.date)}}
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