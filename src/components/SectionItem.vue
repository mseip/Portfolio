<template>
    <div class="section min-h-screen" :id="id">
        <slot />
    </div>
</template>

<script lang="ts" setup>
defineProps({ id: String });
</script>
