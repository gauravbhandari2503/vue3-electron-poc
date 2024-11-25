<template>
    <div class="movie-card">
      <img class="movie-image" :src="movie.image" :alt="movie.title" />
      <div class="movie-details">
        <h3 class="movie-title">{{ movie.title }}</h3>
        <p class="movie-description">{{ movie.description }}</p>
        <p class="movie-rating">⭐ {{ movie.rating }}/10</p>
      </div>
    </div>
  </template>


<script setup lang="ts">
import type { Movie } from '../Interface/MovieInterface';

const props = defineProps<{
  movie: Movie;
}>();
</script>

<style scoped>
.movie-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 250px;
  margin: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}
.movie-card:hover {
  transform: scale(1.05);
}
.movie-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.movie-details {
  padding: 1rem;
}
.movie-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
}
.movie-description {
  font-size: 0.9rem;
  color: inherit;
  margin: 0 0 0.5rem 0;
}
.movie-rating {
  font-size: 1rem;
  font-weight: bold;
  color: #ff9500;
}
</style>