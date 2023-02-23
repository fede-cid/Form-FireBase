<template>
  <div class="results">
    <h2>Resultados</h2>
    <div class="results-grid">
      <div v-for="result in results" :key="result.id" class="result-card">
        <p>{{ result.name }}</p>
        <p>{{ result.last_name }}</p>
        <p>{{ result.age }}</p>
        <p>{{ result.description }}</p>
      </div>
    </div>
  </div>
</template>
<style>
.results {
  padding: 1rem;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
}

.result-card {
  border: 1px solid #ccc;
  padding: 1rem;
  transition: transform 0.2s ease;
}

.result-card:hover {
  transform: scale(1.05);
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