<script setup>
import { ref, inject, watch } from 'vue'
import { fetchCharacters } from '@/api/fetchCharacters'

const searchTerm = ref('')
const status = ref('')

let chars = inject('characters')

const applySearch = async () => {
  const data = await fetchCharacters(searchTerm.value, status.value)
  chars.value = data
  console.log(chars.value)
}

watch(status, () => {
  applySearch()
})
</script>

<template>
  <div class="container">
    <header class="header">
      <img class="header_img" src="../components/icons/headerLogo.svg" alt="Logo" />

      <div class="header_right">
        <div>
          <input v-model="searchTerm" class="header_input" type="text" />
          <button class="header_button" @click="applySearch">Применить(поиск)</button>
        </div>

        <div class="header_category">
          <label class="header_label" for="category">Status</label>
          <select class="header_select" name="category" v-model="status">
            <option class="header_option" value="alive">Alive</option>
            <option class="header_option" value="dead">Dead</option>
            <option class="header_option" value="unknown">Unknown</option>
          </select>
        </div>
      </div>
    </header>
    <h1 class="title">The Rick and Morty characters</h1>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  font-weight: 700;
  font-size: 60px;
}

.header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.header_img {
  width: 300px;
  height: 60px;
}

.header_right {
  display: flex;
  gap: 40px;
}

.header_input {
  height: 55px;
  padding-left: 10px;
  font-size: 20px;
  border-radius: 8px;
}

.header_button {
  height: 50px;
  border-radius: 8px;
  border: none;
  padding: 5px;
  margin-left: 10px;
  background-color: rgb(60, 62, 68);
  color: #fff;
  cursor: pointer;
}

.header_button:hover {
  color: gray;
}

.header_category {
  border: 1px solid black;
  height: 55px;
  border-radius: 8px;
  padding: 8px 5px;
}

.header_label {
  font-size: 20px;
  margin-right: 10px;
}

.header_select {
  height: 40px;
  border: none;
  outline: none;
  font-size: 18px;
  cursor: pointer;
}

.header_select:hover {
  color: gray;
}
</style>
