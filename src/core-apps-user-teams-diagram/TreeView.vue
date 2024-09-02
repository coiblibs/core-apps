<template>
  <li>
    {{ node.name }} sdf
    <ul v-if="node.children.length > 0">
      <TreeNode v-for="child in node.children" :key="child.id" :node="child" />
    </ul>
  </li>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  node: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
li {
  margin: 2px 0;
}
</style>
