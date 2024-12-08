<template>
    <footer class="footer bg-base-200 items-center p-4">
        <aside class="grid-flow-col items-center">
            <img src="/assets/logo/logo-round.png" alt="Logo" class="h-[3em] w-[3em] mr-2" />
            <p class="font-bold base-content">
                Copyright © {{ new Date().getFullYear() }} - Micah Seip
            </p>
        </aside>

        <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a :href="profile.github" target="_blank">
                <img src="/assets/icons/github.svg" width="24" height="24" alt="GitHub logo" />
            </a>
            <a :href="profile.linkedin" target="_blank">
                <img src="/assets/icons/linkedin.svg" width="24" height="24" alt="Linkedin logo" />
            </a>
        </nav>
    </footer>
</template>

<script setup lang="ts">
import profile from "@/config/profile";
</script>
