<template>
  <div class="results">
    <h2 class="results-title">Resultados</h2>
    <div class="results-grid">
      <div v-for="result in results" :key="result.id" class="result-card">
        <p class="result-name">Nombre : {{ result.name }}</p>
        <p class="result-lastname">Apellido : {{ result.last_name }}</p>
        <p class="result-age">Edad : {{ result.age }}</p>
        <p class="result-age">email : {{ result.email }}</p>
        <p class="result-description">{{ result.description }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.results {
  padding: 1rem;
}

.results-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
}

.result-card {
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 1rem;
  transition: transform 0.2s ease;
  background-color: #f1f2f6;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.result-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
}

.result-name {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #2980b9;
}

.result-lastname {
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #7f8c8d;
}

.result-age {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #34495e;
}

.result-description {
  font-size: 1rem;
  color: #2c3e50;
}
</style>
<script>
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default {
  name: 'Results',
  data() {
    return {
      results: [],
      loading: true,
    };
  },
  async mounted() {
    const db = getFirestore();
    const resultsCol = collection(db, 'results');
    const resultsSnapshot = await getDocs(resultsCol);
    this.results = resultsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    this.loading = false;
  },
};
</script>