<script setup lang='ts'>
import { useRoute } from 'vue-router';

const route = useRoute();


</script>
<template>
    <header class="email-layout__header">
        <div class="email-layout__header__title">
            <h1>{{ route.name }}</h1>
        </div>
    </header>
</template>


<style scoped></style>