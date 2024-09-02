<template>
	<input :value="value" @input="handleChange($event.target.value)" style="display: none;" />
	<section>
	  <VSheet class="column" v-for="(v, i) in value || []">
		<!-- <h3>${{value?.investments?.coins?.amount_usdt.toFixed(2)}}</h3>
		<p>Total items {{value?.investments?.coins?.count}}</p> -->
		<VDivider />
		<!-- <VList >
			<VListItem v-for="(item, i) in value?.investments?.coins?.items || []" :key="i" style="display: flex;"> 
				<VList>
					<span>{{ item.type }}</span>
					<h4>${{ item.amount_usdt }}</h4>
					<span>Total {{ item.count }} items</span> 
				</VList>    
				<VListItem v-for="(account, i) in item?.wallets || []" :key="i" class="column">
					<span>{{ i }}</span> 
					<h4>${{ account.amount_usdt }}</h4>
					<span>Total {{ account.count }} items</span>
				</VListItem>	 
			</VListItem>
		</VList> -->
	  </VSheet>
	</section>
	<pre>{{ JSON.stringify(value, null, 2) }}</pre>
  </template>
  
  <style scoped>
  section { display: flex; gap: 30px; width: 100% !important; }
  section > * { width: 100% !important;  }
  h3{font-size: 2rem;font-weight: bold;line-height: inherit;height: inherit !important;padding: 1rem 0;}
  .row{display: flex;}
  .column{display: flex;flex-direction: column;}
  section span{font-size: 0.8rem;}
  </style>
  
  <script>
  
  export default {
	props: {
	  value: {
		type: Object,
	
		// default: () => ({
		//   investments: {
		// 	coins: {
		// 	  item_count: 0,
		// 	  item_sum_amount: 0,
		// 	  items: []
		// 	}
		//   }
		// }),
	  },
	},
	emits: ['input'],
	setup(props, { emit }) {
	  function handleChange(value) {
		emit('input', value);
	  }
  
	  return { handleChange };
	},
  };
  </script>
  