<script setup lang="ts">
import type { Field, ValidationError } from '@directus/types';
import { ref, unref } from 'vue';
import TabButton from './tab-button.vue';

const props = defineProps<{
	initialValues: Record<string, unknown>;
	modelValue: number;
	tabFields: Field[];
	fields: Field[];
	values: Record<string, unknown>;
	validationErrors: ValidationError[];
}>();

defineEmits<{
	(e: 'update:modelValue', value: number);
}>();

const buttons = ref([]);

// we can't use a computed here because document.activeElement isn't reactive
function getFocusIndex() {
	const index = buttons.value.findIndex((button) => button.$el.contains(document.activeElement));
	return index !== -1 ? index : props.modelValue;
}

function setFocusIndex(index: number) {
	buttons.value[index].$el.querySelector('button').focus();
}

function onKeyDown(event: KeyboardEvent) {
	const focusIndex = getFocusIndex();
	switch (event.key) {
		case 'ArrowLeft':
			if (focusIndex !== -1) {
				setFocusIndex((unref(buttons).length + focusIndex - 1) % unref(buttons).length);
			}
			break;
		case 'ArrowRight':
			if (focusIndex !== -1) {
				setFocusIndex((focusIndex + 1) % unref(buttons).length);
			}
			break;
	}
}

console.log("tabFields",props)
// console.log("modelValue",props.modelValue)
// console.log("values",props.values)
// console.log("fields",props.fields)
/*
<pre>{{ JSON.stringify(fields[modelValue],null,2) }} </pre>  
		
		<pre>{{ JSON.stringify(tabFields[modelValue] ,null,2) }} </pre>  
		*/
</script>

<template>
	<div>
		

		<div role="tablist" class="tab-list" @keydown="onKeyDown">
			<tab-button
				v-for="(field, index) in tabFields"
				ref="buttons"
				:key="field.field"
				:field="field"
				:fields="fields"
				:values="values"
				:validation-errors="validationErrors"
				:active="index === modelValue"
				@click="$emit('update:modelValue', index)"
			/> 
		</div> 	<slot />
	</div>
</template>

<style scoped lang="scss">
.tab-list {
	display: flex;
	gap: 0 0.5rem;
	padding: 0.5rem;
	border-radius: var(--theme--border-radius);
	background-color: var(--theme--background-subdued);
	flex-wrap: wrap; 
}
</style>
