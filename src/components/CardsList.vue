<script setup>
import { onMounted, ref, inject } from 'vue'
import { fetchCharacters } from '@/api/fetchCharacters'
import Card from './Card.vue'

let chars = inject('characters')

const firstEpisodeNames = ref([])
let currentPage = ref(1)
const pages = ref('')

const fetchData = async (page) => {
  const data = await fetchCharacters('', '', page)
  for (const character of data.results) {
    const firstEpisodeUrl = character.episode[0]

    const episodeResponse = await fetch(firstEpisodeUrl)
    const episodeData = await episodeResponse.json()

    const firstEpisodeName = episodeData.name
    character.firstEpisodeName = firstEpisodeName
  }
  chars.value = data
  pages.value = data.info
}

onMounted(() => {
  fetchData(currentPage.value)
})

const nextPage = async () => {
  if (currentPage.value < pages.value.pages) {
    currentPage.value++
    fetchData(currentPage.value)
  }
}

const prevPage = async () => {
  if (currentPage.value > 1) {
    currentPage.value--
    fetchData(currentPage.value)
  }
}
</script>

<template>
  <main class="cards">
    <div class="container">
      <Card
        v-for="char in chars.results"
        :key="char.id"
        :name="char.name"
        :status="char.status"
        :species="char.species"
        :image="char.image"
        :location="char.location.name"
        :episode="char.firstEpisodeName"
      />
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <button @click="nextPage" :disabled="currentPage === pages.pages">Next</button>
    </div>
  </main>
</template>

<style scoped>
.cards {
  background-color: rgb(39, 43, 51);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 600px);
  gap: 20px;
}

.pagination {
  display: flex;
  gap: 20px;
}

.pagination button {
  width: 100px;
  height: 50px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
}

.pagination button:hover {
  color: gray;
}
</style>
