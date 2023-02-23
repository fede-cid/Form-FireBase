<template>
  <div>
    <label>{{ item.label }}</label>
    <div v-if="item.type === 'text'">
      <input type="text" :name="item.name" v-model="answer" required>
    </div>
    <div v-else-if="item.type === 'email'">
      <input type="email" :name="item.name" v-model="answer" required>
    </div>
    <div v-else-if="item.type === 'date'">
      <input type="date" :name="item.name" v-model="answer" required>
    </div>
    <div v-else-if="item.type === 'select'">
      <select :name="item.name" v-model="answer" required>
        <option v-for="option in item.options" :value="option.value">{{ option.label }}</option>
      </select>
    </div>
    <div v-else-if="item.type === 'checkbox'">
      <input type="checkbox" :name="item.name" v-model="answer" required>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      answer: ''
    }
  }
}
</script>