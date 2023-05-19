<script setup lang='ts'>
import AppButton from '@/components/inputs/AppButton.vue';

import { useRouter } from 'vue-router';

const router = useRouter();

const goToInbox = () => {
    router.push('/inbox');
};

</script>
<template>
    <div class="home">

        <div class="home__hero">
            <h1>
                Alwasaet coding test
            </h1>
            <AppButton @click="goToInbox" variant="primary">Got to My Inbox</AppButton>
        </div>
    </div>
</template>


<style scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

}

.home__hero {
    display: grid;
    justify-content: center;
    gap: 12px;
}
</style>