<template>
	<div>
	  <h1>{{ name }}</h1>
	  <p>{{ description }}</p>
	  <!-- Diğer içerikler buraya -->
	</div>
  </template>
  
  <script setup>
  import { defineProps, toRefs } from 'vue';
  
  // Props tanımları
  const props = defineProps({
	value: {
	  type: [Array, Object],
	  default: () => []
	},
	displayTemplate: {
	  type: String,
	  default: ''
	},
	disabled: {
	  type: Boolean,
	  default: false
	},
	collection: {
	  type: String,
	  required: true
	},
	field: {
	  type: String,
	  required: true
	},
	loading: {
	  type: Boolean,
	  default: false
	},
	primaryKey: {
	  type: [String, Number],
	  required: true
	},
	enableCreate: {
	  type: Boolean,
	  default: true
	},
	enableSelect: {
	  type: Boolean,
	  default: true
	},
	filter: {
	  type: [Object, null],
	  default: null
	}
  });
  
  // Props'ları tanıtma
  const { collection, field, primaryKey } = toRefs(props);
  
  console.log(collection);
  console.log(field  );
  console.log(primaryKey );
  </script>
  
  <style scoped>
  /* Stil tanımları buraya */
  </style>
  