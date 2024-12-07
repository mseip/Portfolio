<template>
    <Navbar />

    <SectionItem v-for="view in views" :id="view.id">
        <component :is="view.component" />
    </SectionItem>

    <Footer />
</template>

<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
import SectionItem from "./components/SectionItem.vue";
import Footer from "./components/Footer.vue";

import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ProjectsView from "./views/ProjectsView.vue";

const views = [
    {
        id: "home",
        component: HomeView,
    },

    {
        id: "about",
        component: AboutView,
    },

    {
        id: "projects",
        component: ProjectsView,
    },
];
</script>
