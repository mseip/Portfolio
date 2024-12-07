<template>
    <div class="hero relative top-[100px] mb-[100px] min-h-[calc(100vh/2)]">
        <div class="hero-content flex-col lg:flex-row">
            <img
                src="/assets/me.png"
                class="max-w-xs me rounded-lg shadow-2xl mr-8 max-lg:hidden"
            />

            <div class="max-lg:text-center">
                <h2 class="text-xl opacity-80 font-bold text-secondary mb-4">Web Developer</h2>
                <h1 class="text-5xl font-bold">Hi, I'm <span class="text-primary">Micah</span></h1>

                <div class="max-lg:block lg:hidden p-8">
                    <img
                        src="/assets/me_mobile.png"
                        class="max-w-xs h-[200px] me rounded-lg shadow-2xl m-auto"
                    />
                </div>

                <p class="py-6 max-w-85 max-lg:w-full max-lg:p-10">
                    <!-- TODO: Change me -->
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                    exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>

                <div class="mt-4 grid lg:grid-cols-3 gap-4 lg:max-w-[70%] max-lg:px-8">
                    <button class="btn btn-outline btn-primary">About Me</button>
                    <button class="btn btn-outline btn-secondary">View Projects</button>
                    <button class="btn btn-outline">Contact Me</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.me {
    filter: saturate(125%);
}
</style>
