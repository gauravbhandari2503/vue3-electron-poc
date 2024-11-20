<template>
    <div class="movies-section">
      <h1 class="section-title">Movies Section</h1>
      <div class="movies-grid">
        <MovieCard
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </div>
  </template>
<script lang="ts" setup>
import MovieCard from './../Components/MovieCard.vue';
import type { Movie } from '../Interface/MovieInterface';
import { ref } from 'vue';
const movies = ref<Movie[]>([
    {
        image: 'https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg',
        title: 'The Shawshank Redemption',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        rating: 9.2,
        id: 1,
    },
    {
        image: 'https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg',
        title: 'The Godfather',
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        rating: 9.2,
        id: 2,
    },
    {
        image: 'https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg',
        title: 'The Godfather: Part II',
        description: 'The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.',
        rating: 9.2,
        id: 3,
    },
    {
        image: 'https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg',
        title: '12 Angry Men',
        description: 'A dissenting juror in a murder trial slowly manages to convince the others that the case is not as obviously clear as it seemed in court.',
        rating: 9.2,
        id: 4,
    },
]);
console.log(movies.value);
</script>
<style scoped>
.movies-section {
  padding: 2rem;
  text-align: center;
}
.section-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
}
.movies-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}
</style>