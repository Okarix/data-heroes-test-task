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
          <button class="header_button" @click="applySearch">Apply(Search)</button>
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
  align-items: center;
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
  border: 1px solid #ccc;
}

.header_button {
  height: 55px;
  border-radius: 8px;
  border: none;
  padding: 0 20px;
  margin-left: 10px;
  background-color: rgb(60, 62, 68);
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.header_button:hover {
  background-color: rgb(75, 77, 83);
  transform: scale(1.05);
}

.header_button:active {
  transform: scale(1);
  background-color: rgb(50, 52, 58);
}

.header_category {
  display: flex;
  align-items: center;
  background-color: rgb(60, 62, 68);
  border: none;
  border-radius: 8px;
  padding: 0 15px;
  height: 55px;
  transition: background-color 0.3s;
}

.header_category:hover {
  background-color: rgb(75, 77, 83);
}

.header_label {
  font-size: 18px;
  margin-right: 10px;
  color: #fff;
}

.header_select {
  height: 35px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 18px;
  cursor: pointer;
  color: #fff;
  padding: 0 5px;
  background-repeat: no-repeat;
  background-position: right 10px top 50%;
  background-size: 12px auto;
  padding-right: 30px;
}

.header_select:hover {
  color: #ccc;
}

.header_option {
  background-color: rgb(60, 62, 68);
  color: #fff;
}
</style>
