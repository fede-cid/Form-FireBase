<template>
  <div>
    <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Create Result</h2>
    <form @submit.prevent="submitForm" style="display: flex; flex-direction: column;">
      <div style="margin-bottom: 1rem;">
        <label for="name" style="margin-right: 1rem;">Name:</label>
        <input type="text" id="name" v-model="result.name" required style="padding: 0.5rem;">
      </div>
      <div style="margin-bottom: 1rem;">
        <label for="LastName" style="margin-right: 1rem;">Last Name:</label>
        <input type="text" id="LastName" v-model="result.last_name" required style="padding: 0.5rem;">
      </div>
      <div style="margin-bottom: 1rem;">
        <label for="Age" style="margin-right: 1rem;">Age:</label>
        <input type="text" id="Age" v-model="result.age" required style="padding: 0.5rem;">
      </div>
      <div style="margin-bottom: 1rem;">
        <label for="description" style="margin-right: 1rem;">Description:</label>
        <textarea id="description" v-model="result.description" required style="padding: 0.5rem;"></textarea>
      </div>
      <div>
        <button type="submit" style="padding: 0.5rem 1rem; background-color: #007bff; color: #fff; border: none; border-radius: 0.25rem;">Create Result</button>
      </div>
    </form>
  </div>
</template>
<script>
import { getFirestore, collection, addDoc } from 'firebase/firestore';
export default {
  name: 'CreateResult',
  data() {
    return {
      result: {
        name: '',
        last_name: '',
        age: '',
        description: '',
      },
    };
  },
  methods: {
    async submitForm() {
      const db = getFirestore();
      try {
        const docRef = await addDoc(collection(db, 'results'), this.result);
        console.log('Result added with ID: ', docRef.id);
        this.$router.push('/results');
      } catch (e) {
        console.error('Error adding result: ', e);
      }
    },
  },
};
</script>
