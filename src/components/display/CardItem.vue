<template>
    <div class="lg:card lg:bg-base-200 lg:w-[80%] m-auto max-lg:mt-[150px] lg:shadow-xl">
        <div class="card-body">
            <div class="text-center">
                <h2 class="text-4xl font-bold drop-shadow-xl" :class="'text-' + color">
                    {{ heading }}
                </h2>
                <h4 class="text-xl font-bold opacity-80 drop-shadow-xl">{{ subheading }}</h4>
            </div>

            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    color: String,
    heading: String,
    subheading: String,
});
</script>
