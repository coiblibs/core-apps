<style>
.color{ color: var(--project-color) !important; }
.flex,.row,.column{display: flex;}
.column{flex-direction: column; }
.p15{padding: 15px;}
.p30{padding: 30px;}
.text-center{text-align: center;}
.text-left{text-align: left;} 
.gap30{gap: 30px;}
#tabpanel-Stats .v-form.with-fill[data-v-28cbafed] {grid-template-columns: [start] minmax(0,1fr) [half] minmax(0,1fr) [full] !important;}
.divider{ border-bottom:1px solid var(--v-divider-color, var(--theme--form--field--input--border-color));}
.between{justify-content: space-between;}
.wfull{width: 100%;}

.currency:last-child{border: 0;}

td,th{padding: 10px 10px;text-align: right;border-bottom: solid 1px var(--theme--form--field--input--border-color);}
tr:last-child td {border: 0;}
.text-right{text-align: right;}
.container.right #tabpanel-Stats  section.row{flex-direction: column !important;} 
@media screen and (max-width: 960px) {
	#tabpanel-Stats section.row{flex-direction: column !important;}
}
#tabpanel-levels li .deselect,
#tabpanel-teams li .deselect{display:none;}
</style>
<template>
	<input :value="value" @input="handleChange($event.target.value)"   style="display: none;"/>
	<VSkeletonLoader v-if="!data" />
	<template v-else >
		<section class="row gap30 wfull  "  >
			<section v-for="(d,i) in data" :key="i"  style="flex:1;" class="column gap30 wfull" >
				<VSheet class="wfull">
					<div class="column p15 divider text-center ">
						<span>{{i}}</span>
						<h6 style="font-size: 2rem; font-weight: 600;" class="color">${{ d.totals.all.total_usdt  }}</h6>
						<span>Total  {{ d.totals.all.total_items }} Items</span>
					</div> 
					<div v-for="(c,currency) in d.totals.currency" :key="currency" class="row divider between currency" style=" padding: 15px 0;gap:15px">
						<div class="column " style="flex:1; gap: 0;justify-content: center;padding-left:15px;"> 
							<span> {{ currency }} </span>
							<h4  style="font-size: 1.3rem; font-weight: 600;" class="color">${{ c.total_usdt }} </h4>
							<span>	Total {{ c.total_items }} items</span>
						</div>  
						<div class="flex   " style="flex:2;background-color: var(--theme--form--field--input--border-color) ;border-radius:5px;">
							<div v-for="(s,status) in c.status" :key="status" style=" gap:0;padding: 5px 15px; align-items: center !important;justify-content: center;flex:1" class="text-center column wfull ">
								<VIcon :name="getIcon(status)" :color="getColor(status)"/> 
								<div class="color">${{ s   }}</div>
								<span>{{ status }}</span>
							</div>   
						</div>
					</div>
				</VSheet> 
				
				<VSheet >
					<table class="wfull">
						<thead>	
							<tr>
								<th>Total Items</th>
								<th>Total Usdt</th>
								<th>Total Amount</th>
								<th>Account</th>
								<th>Currency</th>
								<th>Status</th>
								<th>User Add Balance</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item,i) in d.items" :key="i">
								<td style="text-align: center;">{{ item.total_items }}</td>
								<td>{{ item.total_usdt  }}</td>
								<td>{{ item.total_amount  }}</td>
								<td>{{ item.account }}</td>
								<td>{{ item.currency }}</td>
								<td  > 
									<VIcon :name="getIcon(item.status)" :color="getColor(item.status)"/> 
								</td>
								<td  > 
									<VIcon :name="getIcon(item.user_add_balance)" :color="getColor(item.user_add_balance)"/>  
								</td>
							</tr>
						</tbody>
					</table> 

				</VSheet>
			</section> 
		</section> 
	
	</template>
  </template>
  
<script setup>
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  value: { 
    type: [Number, BigInt], // Integer yerine Number kullanmalısınız.
  },
});

const emit = defineEmits(['input']);

const data = ref(null);
const error = ref(null);

function handleChange(value) {
  emit('input', value);
}

async function fetchData() {
  if (!props.value) return; // props.value kontrolü
  try {
    console.log(props);
    const response = await fetch('/core-apps-endpoint/user-stats/' + props.value);
    if (!response.ok) {
      throw new Error('Bir hata oluştu'); 
    }
    data.value = await response.json();  
  } catch (err) {
    error.value = err.message; 
  }
}

const getColor = (status) => { 
  switch (status) {
    case 'completed': return '#2ECDA7';
    case 'waiting': return '#A2B5CD';
    default: return '#E35169';
  } 
};

const getIcon = (status) => { 
  switch (status) {
    case 'completed': return 'check';
    case 'waiting': return 'timer';
    default: return 'archive';
  } 
};

onMounted(fetchData);

watch(() => props.value, fetchData, { immediate: true });
</script>