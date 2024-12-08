<template>
    <CardItem color="secondary" heading="Projects" subheading="My Works">
        <h2 class="my-[25px] text-center italic opacity-60">
            TIP: Click on a language to highlight the projects that use it!
        </h2>

        <!-- TODO: This should be a grid -->
        <div class="flex justify-around flex-wrap p-8">
            <div class="card bg-base-100 shadow-xl hover:scale-[1.1] transition-transform mb-4 mx-4"
                v-for="lang in projects.languages" :key="lang[0]" @click="toggleLanguage(String(lang[0]))"
                :class="selLang == lang[0] ? 'selected-card' : ''">
                <div class="card-body">
                    <h2 class="card-title">{{ lang[0] }}</h2>
                    <div class="flex items-center">
                        <progress class="progress w-[80%]" :class="colors[Math.floor(Math.random() * colors.length)]"
                            :value="lang[1]" max="100"></progress>
                        <span class="font-bold ml-2">{{ lang[1] }}%</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="divider"></div>

        <div class="flex justify-around flex-wrap p-8">
            <div v-for="project in projects.projects" class="card bg-base-100 w-96 shadow-xl mb-4"
                :class="project.tools.includes(selLang) ? 'selected-card' : ''">
                <figure v-if="project.image" class="bg-top" :style="'background-image: url(\'' + project.image + '\')'">
                    <div class="min-h-[200px]"></div>
                </figure>

                <div class="card-body">
                    <h2 class="card-title">{{ project.title }}</h2>
                    <p>{{ project.description }}</p>
                    <div class="text-right">
                        <a class="link link-primary mr-2" target="_blank" v-if="project.url" :href="project.url">URL</a>
                        <a class="link link-secondary" target="_blank" v-if="project.vcs" :href="project.vcs">Source
                            Code
                        </a>
                    </div>

                    <div class="card-actions justify-end">
                        <div v-for="tag in project.tools" class="badge badge-outline mr-1">
                            {{ tag }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CardItem>
</template>

<style>
.selected-card {
    box-shadow: 0 0 4px 0 rgba(255, 190, 0, 0.4);
}
</style>

<script setup lang="ts">
import { ref } from "vue";

import CardItem from "@/components/display/CardItem.vue";

import projects from "@/data/projects";

const colors = [
    "progress-primary",
    "progress-secondary",
    "progress-accent",
    "progress-info",
    "progress-success",
    "progress-warning",
    "progress-error",
];

const selLang = ref("");

const toggleLanguage = (language: string) => {
    if (selLang.value == language) {
        selLang.value = "";
        return;
    }

    selLang.value = language;
}
</script>
