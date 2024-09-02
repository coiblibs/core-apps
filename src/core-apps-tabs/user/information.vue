<script setup lang="ts">  
const props = withDefaults(
	defineProps<{ 
		primaryKey: number | string; 
		tabName: number | string; 
		tabsName: number | string; 
	}>(),
	{
	 
	}
);

// const { primaryKey,tabName,tabsName } = toRefs(props);
</script>
<template>

{{ primaryKey }}
{{ tabName }}
{{ tabsName }}
<!-- <VButton @click="logEvent('click', $event)">
  My Button
</VButton>  -->
</template>

<style>
.v-form.with-fill{ 
grid-template-columns: [start] minmax(0,1fr) [half] minmax(0,1fr) [full] !important;
  gap: var(--theme--form--row-gap) var(--theme--form--column-gap) !important;
}
 
.group-raw{grid-column: start/fill !important}
</style>