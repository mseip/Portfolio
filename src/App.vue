<template>
    <Navbar />

    <SectionItem v-for="view in views" :id="view.id">
        <component :is="view.component" />
    </SectionItem>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import Navbar from "./components/Navbar.vue";
import SectionItem from "./components/SectionItem.vue";

import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";

const views = ref([
    {
        id: "home",
        component: HomeView,
    },
    {
        id: "about",
        component: AboutView,
    },
]);
</script>
