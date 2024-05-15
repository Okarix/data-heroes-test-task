<script setup>
import { ref, provide } from 'vue'
import Header from './components/Header.vue'
import CardsList from './components/CardsList.vue'

const chars = ref([])

provide('characters', chars)
</script>

<template>
  <Header />
  <CardsList />
</template>
