<template>
    <div class=""
    v-if="chartComponents.length > 0"
    v-for="(item, index) in chartComponents" 
    :key="index"
    >
        <div class="" 
        style="background-color: azure; margin: 10px 0 10px 0; padding: 20px"
        v-for="(chart) in filterList(item.id)"
        :draggable="true"
        @dragstart="(evt:any) => startDrag(evt, index)"
        @drop="(evt:any) => onDrop(evt, index)"
        @dragenter.prevent
        @dragover.prevent
        >
            {{ chart.chart.__name}}
            <component :is="chart.chart"/>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Chart from '~/components/Chart.vue';
import ChartArea from '~/components/ChartArea.vue';
import ChartBar from '~/components/ChartBar.vue';
import ChartColumn from '~/components/ChartColumn.vue';
import PieChart from '~/components/PieChart.vue';

const chartComponents = ref([
    {id: 0, chart: Chart},
    {id: 1, chart: ChartArea},
    {id: 2, chart: ChartBar},
    {id: 3, chart: ChartColumn},
    {id: 4, chart: PieChart},
])

const items = ref([
    {id: 0, chart: "Chart", list:1},
    {id: 1, chart: "ChartArea", list:1},
    {id: 2, chart: "ChartBar", list:2},
    {id: 3, chart: "ChartColumn", list:2},
    {id: 4, chart: "PieChart", list:1},
])

const filterList = (id:any) => {
    return chartComponents.value.filter((item) => item.id === id)
}

const startDrag = (evt:any, item:any) => {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item)
      console.log(item)
}

const onDrop = (evt:any, id:any) => {
    const itemId = evt.dataTransfer.getData('itemID')
    const currentChart = chartComponents.value.splice(itemId, 1)
    chartComponents.value.splice(id, 0, {
        id: currentChart[0].id, chart: currentChart[0].chart
    })
}
</script>