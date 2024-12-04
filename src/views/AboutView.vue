<template>
    <h1>This is an about page</h1>

    <button class="btn btn-primary" @click="counter.increment()">{{ counter.count }}</button>
</template>

<script lang="ts" setup>
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
</script>
