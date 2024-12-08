<template>
    <div class="section min-h-[90vh] mb-8" :id="id">
        <slot />
    </div>
</template>

<script lang="ts" setup>
defineProps({ id: String });
</script>
