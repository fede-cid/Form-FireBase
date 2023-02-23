<template>
  <div class="form-container">
    <h2 class="form-title">User Information</h2>
    <form @submit.prevent="submitForm" class="form">
      <div class="form-field">
        <label for="name" class="form-label">Name:</label>
        <input type="text" id="name" v-model="result.name" required class="form-input">
      </div>
      <div class="form-field">
        <label for="LastName" class="form-label">Last Name:</label>
        <input type="text" id="LastName" v-model="result.last_name" required class="form-input">
      </div>
      <div class="form-field">
        <label for="Age" class="form-label">Age:</label>
        <input type="text" id="Age" v-model="result.age" required class="form-input">
      </div>
      <div class="form-field">
        <label for="email" class="form-label">Email:</label>
        <input type="text" id="email" v-model="result.email" required class="form-input">
      </div>
      <div class="form-field">
        <label for="description" class="form-label">Description:</label>
        <textarea id="description" v-model="result.description" required class="form-textarea"></textarea>
      </div>
      <div class="form-field">
        <button type="submit" class="form-submit-btn">Create Data</button>
      </div>
    </form>
  </div>
</template>

<style>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.form-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #46369f;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  padding: 2rem;
  border-radius: 1rem;
  background-color: #E5E5E5;
}

.form-field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  width: 100%;
}

.form-label {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #5e4caf;
}

.form-input,
.form-textarea {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #F0F0F0;
  width: 100%;
}

.form-textarea {
  height: 8rem;
  resize: none;
}

.form-submit-btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: #6a4caf;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.form-submit-btn:hover {
  background-color: #3E8E41;
}
</style>
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
        email: '',
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
