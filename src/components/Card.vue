<script setup>
defineProps({
  name: String,
  status: String,
  species: String,
  image: String,
  location: String,
  episode: String
})
</script>

<template>
  <div class="card">
    <img :src="image" alt="Image" class="card_img" />
    <div class="card_text">
      <div class="section">
        <h2 class="card_title">{{ name }}</h2>
        <h3 :class="{ card_status: true, Alive: status === 'Alive', Dead: status !== 'Alive' }">
          {{ status }} - {{ species }}
        </h3>
      </div>
      <div class="section">
        <span>Last known location:</span>
        <p>{{ location }}</p>
      </div>
      <div class="section">
        <span>First seen in:</span>
        <p>{{ episode }}</p>
      </div>
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 600px;
  height: 220px;
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.card_text {
  flex-direction: column;
  padding: 0.75rem;
}

.section {
  justify-content: flex-start;
  margin-bottom: 15px;
}

.card_title {
  margin-bottom: 5px;
  color: #fff;
}

.card_status {
  color: #fff;
}

.card_status:before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 8px;
}
.card_status.Alive:before {
  background-color: green;
}

.card_status.Dead:before {
  background-color: red;
}

span {
  color: rgb(158, 158, 158);
}

p {
  margin-top: 8px;
  color: #fff;
}
</style>
