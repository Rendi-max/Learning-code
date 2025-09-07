<template>
    <div>
        <highcharts :options="options" />
    </div>
</template>
<script lang="ts" setup>

const props = defineProps({
    chart:{
        type:String,
        default: 'column'
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
            name: 'Browsers',
            colorByPoint: true,
            data: [
                {
                    name: 'Chrome',
                    y: 63.06,
                    drilldown: 'Chrome'
                },
                {
                    name: 'Safari',
                    y: 19.84,
                    drilldown: 'Safari'
                },
                {
                    name: 'Firefox',
                    y: 4.18,
                    drilldown: 'Firefox'
                },
                {
                    name: 'Edge',
                    y: 4.12,
                    drilldown: 'Edge'
                },
                {
                    name: 'Opera',
                    y: 2.33,
                    drilldown: 'Opera'
                },
                {
                    name: 'Internet Explorer',
                    y: 0.45,
                    drilldown: 'Internet Explorer'
                },
                {
                    name: 'Other',
                    y: 1.582,
                    drilldown: null
                }
            ]
        }
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
        type:'category'
    },
    legend: false
    ,

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