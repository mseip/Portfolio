<template>
    <div class="section min-h-[90vh] max-xl:mb-4" :id="id">
        <slot />
    </div>
</template>

<script lang="ts" setup>
defineProps({ id: String });
</script>
