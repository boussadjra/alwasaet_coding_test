<script setup lang='ts'>
import EmailHeader from './components/EmailHeader.vue';
import EmailSidebar from './components/EmailSidebar.vue';

</script>
<template>
    <div class="email-layout">
        <EmailSidebar />
        <EmailHeader />

        <slot></slot>

    </div>
</template>
<style scoped></style>