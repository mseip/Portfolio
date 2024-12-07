<template>
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
    <li>
        <details>
            <summary>Resume</summary>
            <ul class="p-2">
                <li><a href="assets/documents/resume.pdf" target="_blank">View Resume</a></li>
                <li><a href="assets/documents/resume.pdf">Download Resume</a></li>
            </ul>
        </details>
    </li>
    <li @click="switchTheme()">
        <SunIcon v-if="theme == 'dark'" class="h-[2.5em]" />
        <MoonIcon v-else class="h-[2.5em]" />
    </li>
</template>

<script setup lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/16/solid";
import { ref } from "vue";

const theme = ref("dark");

const switchTheme = () => {
    theme.value = theme.value == "dark" ? "light" : "dark";
    document.querySelector("body")?.setAttribute("data-theme", theme.value);
};
</script>

<style>
body {
    transition: background 0.5s;
}

html {
    scroll-behavior: smooth;
}
</style>
