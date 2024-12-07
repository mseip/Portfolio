<template>
    <div class="section min-h-[90vh]" :id="id">
        <slot />
    </div>
</template>

<script lang="ts" setup>
defineProps({ id: String });
</script>
