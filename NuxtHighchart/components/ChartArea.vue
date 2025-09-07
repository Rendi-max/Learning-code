<template>
    <div>
        <highcharts :options="options" />
    </div>
</template>
<script lang="ts" setup>

const props = defineProps({
    chart:{
        type:String,
        default: 'area'
    }
})

const options = ref({
    chart: {
        type: props.chart
    },
    title: {
        text: 'Bawakdhewak'
    },
    series: [
        {
        name: 'Yah mau bagaimana lagi',
        data: [2, 4, 1, 0 ,10,12,1,6,10,6],
        color: '#FF00FF',
        },
        {
        name: 'Yah mau',
        data: [2, 1, 1, 10 ,5,4,3,9,15,7],
        color: '#00FFFF',
        },
        {
        name: 'bagaimana lagi',
        data: [5, 4, 1, 20 ,9,10,2,3,20,3],
        color: '#FF0F0F',
        },
    ],
    yAxis: {
        title: {
            text: 'Number of Employees'
        },
        gridLineWidth: 1
    },

    xAxis: {
        title:{
            text: 'Cihuyyy'
        },
        accessibility: {
            rangeDescription: 'Range: 2010 to 2020'
        },
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        },
        line:{
            dataLabels:{
                enabled: true
            }
        },
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
});

</script>