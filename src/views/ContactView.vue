<script setup lang="ts">
import UserCard from '../components/UserCard.vue';
</script>

<template>
  <div class="contact-page">
    <h1>Сторінка контактів</h1>
    <p>Це наша нова сторінка контактів!</p>

    <UserCard username="Student_1" :isActive="true" />
    <UserCard username="Student_2" :isActive="false" />
    <!--Помилка TypeScript при розкоментуванні:-->
    <!--Type 'number' is not assignable to type 'boolean'-->
   <!--<UserCard username="Student_3" :isActive="123" />-->
  </div>
</template>

<style scoped>
.contact-page {
  padding: 20px;
}
</style>