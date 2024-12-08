<template>
    <CardItem color="primary" heading="About Me" subheading="Timeline" class="mb-8">
        <div class="m-auto pt-[50px] max-xl:hidden">
            <h2 class="mb-[50px] text-center italic opacity-60">
                TIP: You can hover over a point for more details!
            </h2>

            <ul class="timeline">
                <li v-for="(time, i) in about.timeline" :key="time.name">
                    <hr v-if="i > 0" :class="time.complete ? 'bg-secondary' : ''" />
                    <div v-if="i % 2 == 0" class="timeline-start timeline-box">
                        <div class="tooltip tooltip-primary" :data-tip="time.description">
                            <span class="font-bold">{{ time.date }}</span> - {{ time.name }}
                        </div>
                    </div>

                    <div class="timeline-middle">
                        <div class="tooltip tooltip-primary" :data-tip="time.description">
                            <CheckBadgeIcon class="w-[1em]" />
                        </div>
                    </div>

                    <div v-if="i % 2 == 1" class="timeline-end timeline-box">
                        <div class="tooltip tooltip-primary" :data-tip="time.description">
                            <span class="font-bold">{{ time.date }}</span> - {{ time.name }}
                        </div>
                    </div>

                    <hr v-if="i < about.timeline.length - 1" :class="time.complete ? 'bg-secondary' : ''" />
                </li>
            </ul>
        </div>

        <div class="xl:hidden max-xl:grid grid-cols-2 gap-4 mt-4">
            <div v-for="time in about.timeline" :key="time.name" class="rounded-md bg-base-300 p-4">
                <h2 class="font-bold">
                    <span class="text-secondary">{{ time.date }}</span> - {{ time.name }}
                </h2>

                <p class="mt-2">{{ time.description }}</p>
            </div>
        </div>

        <div class="mt-8">
            <div class="md:flex w-full mt-8">
                <div class="flex-grow place-items-center md:w-[45%]">
                    <h2 class="text-3xl text-primary font-bold text-center">UI/UX Skils</h2>

                    <ul>
                        <li v-for="skill in about.skills.ui" class="list-inside list-disc my-2">
                            <span class="font-bold text-accent">{{ skill[0] }}</span>
                            <span class="ml-4 block">{{ skill[1] }}</span>
                        </li>
                    </ul>
                </div>

                <div class="divider divider-horizontal max-md:hidden"></div>

                <div class="flex-grow place-items-center md:w-[45%] max-md:mt-12">
                    <h2 class="text-3xl text-primary font-bold text-center">Server Skils</h2>

                    <ul>
                        <li v-for="skill in about.skills.server" class="list-inside list-disc my-2">
                            <span class="font-bold text-accent">{{ skill[0] }}</span>
                            <span class="ml-4 block">{{ skill[1] }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </CardItem>
</template>

<script setup lang="ts">
import { CheckBadgeIcon } from "@heroicons/vue/16/solid";

import CardItem from "@/components/display/CardItem.vue";

import about from "@/config/about";
</script>
