<template>
    <CardItem color="default" heading="Contact Me" subheading="Get in Touch">
        <div class="flex min-w-full flex-wrap items-center justify-center mt-4">
            <div role="tablist" class="tabs tabs-bordered">
                <input type="radio" name="contact_tab" role="tab" class="tab" aria-label="Send me a Message"
                    v-model="choice" checked value="message" />

                <input type="radio" name="contact_tab" role="tab" class="tab" aria-label="Send me an Email"
                    v-model="choice" value="email" />
            </div>
        </div>

        <div v-if="choice == 'message'" class="my-8">
            <div class="flex justify-center">
                <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email*</span>
                            </label>

                            <input v-model="form.email" type="email" placeholder="Contact Email"
                                class="input input-bordered" required />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name*</span>
                            </label>

                            <input v-model="form.name" type="text" placeholder="Contact Name"
                                class="input input-bordered" required />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Message*</span>
                            </label>

                            <textarea v-model="form.message" name="message" id="message" placeholder="My message..."
                                class="textarea textarea-bordered h-[150px]" required></textarea>
                        </div>

                        <p v-if="messagesDisabled" class="text-error text-center text-sm my-2 italic">
                            API is not enabled. Use alternative
                            methods.
                        </p>

                        <div class="form-control mt-6">
                            <input type="submit" class="btn btn-primary" value="Send" :disabled="!valid"
                                @click.prevent="message" />
                        </div>
                    </form>
                </div>

                <div class="h-[500px] max-w-[60%] flex items-center max-lg:hidden">
                    <div class="pl-8">
                        <h1 class="text-4xl font-bold text-primary">Leave a Message</h1>
                        <h2 class="text-lg mt-4 font-bold opacity-80">
                            You can use the form to get in touch.
                        </h2>
                        <h2 class="text-lg font-bold opacity-80">
                            If you prefer to use an alternative method, select the other tab.
                        </h2>

                        <div class="mt-8">
                            <button class="btn btn-outline btn-primary lg:mr-4" @click="copy(profile.contact.email)">
                                Copy Email
                            </button>
                            <button class="btn btn-outline btn-secondary" @click="copy(profile.contact.phone)">
                                Copy Phone
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="text-center py-8">
            <div class="inline-block font-bold">
                <h2 class="text-secondary text-md opacity-70">Email</h2>
                <h3 class="text-primary text-lg">You can email me at:</h3>
                <h1 class="my-4 text-2xl">{{ profile.contact.email }}</h1>

                <div class="mt-8 grid sm:grid-cols-2 gap-4">
                    <button class="btn btn-outline btn-primary" @click="copy(profile.contact.email)">
                        Copy
                    </button>
                    <a class="btn btn-outline btn-secondary" :href="'mailto:' + profile.contact.email" _target="_blank">
                        Open
                    </a>
                </div>

                <div class="divider py-8">Or</div>

                <h2 class="text-primary text-md opacity-70">Phone</h2>
                <h3 class="text-secondary text-lg">You can message me at:</h3>
                <h1 class="my-4 text-2xl">{{ profile.contact.phone }}</h1>

                <div class="mt-8 grid sm:grid-cols-2 gap-4">
                    <button class="btn btn-outline btn-primary" @click="copy(profile.contact.phone)">
                        Copy
                    </button>
                    <a class="btn btn-outline btn-secondary" :href="'tel:' + profile.contact.phone" _target="_blank">
                        Open
                    </a>
                </div>
            </div>
        </div>
    </CardItem>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { useToast } from "vue-toastification";

import profile from "@/config/profile";
import deploy from "@/config/deploy";

import CardItem from "@/components/display/CardItem.vue";

const toast = useToast();

const choice = ref("message");
const loading = ref(false);
const form = reactive({
    email: "",
    name: "",
    message: ""
});

const copy = (msg: string) => {
    navigator.clipboard.writeText(msg);
    toast.success(`Copied "${msg}"`);
};

const messagesDisabled = computed(() =>
    deploy.api == ""
);

const valid = computed(() =>
    form.email != "" && form.name != "" && form.message != "" &&
    form.email.includes("@") && form.name.length >= 2 && !loading.value
);

const reset = () => {
    form.email = "";
    form.name = "";
    form.message = "";

    loading.value = false;
}

const message = () => {
    if (!valid.value) return;
    loading.value = true;

    const req = new FormData();

    req.append("email", form.email);
    req.append("name", form.name);
    req.append("message", form.message);

    fetch(deploy.api, {
        method: "POST",
        body: req
    }).then(res => {
        reset();

        if (res.status != 200) {
            toast.error("Failed to send message!");
            return;
        }

        toast.success(`Sent message!`);
    }).catch(err => {
        reset();

        toast.error("Error sending message!");
        console.error(err);
    });
}
</script>
