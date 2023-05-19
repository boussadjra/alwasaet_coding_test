<script setup lang="ts">
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router'
import EmailLayout from './layouts/EmailLayout/EmailLayout.vue';
import AuthLayout from './layouts/AuthLayout.vue';

const route = useRoute();

const layout = computed(() => {
  switch (route.meta.layout) {
    case 'email-layout':
      return EmailLayout;
    case 'auth-layout':
      return AuthLayout;
    default:
      return 'div';

  }
});

</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<style scoped lang="scss"></style>
