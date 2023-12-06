<!-- CardContainer.vue -->
<template>
  <div class="card-container">
    <h2>{{ containerTitle }}</h2>
    <div class="cards">
      <Card
        v-for="(card, index) in cards"
        :key="index"
        :imageUrl="card.imageUrl"
        :title="card.title"
      />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
  props: {
    containerTitle: String,
    cards: Array,
  },
};
</script>

<style scoped>
.card-container {
  text-align: left;
}

h2 {
  margin-bottom: 15px;
  font-size: 29px;
  margin-left: 20px;
}

.cards {
  display: flex;
  justify-content: space-around;
}
</style>
