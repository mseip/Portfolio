<template>
    <div
        class="navbar fixed bg-base-200 z-50 rounded-b-box m-4 w-[calc(100vw-2rem)] shadow-xl rounded-box"
    >
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </div>

                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                    <ContactBar />
                </ul>
            </div>
            <a class="btn btn-ghost text-xl"> Micah <span class="text-primary">Seip</span> </a>
        </div>

        <div class="navbar-end hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <ContactBar />
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import ContactBar from "./ContactBar.vue";
</script>
