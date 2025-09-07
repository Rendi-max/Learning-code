<template>
    <div>
        <highcharts :options="options" />
    </div>
</template>
<script lang="ts" setup>

const props = defineProps({
    chart:{
        type:String,
        default: 'pie'
    }
})

const options = ref({
    chart: {
        type: props.chart,
    },
    title: {
        text: 'Bawakdhewak'
    },
    series: [
        {
            name: 'Browser',
            colorByPoint: true,
            data: [
                {
                    name: 'Chrome',
                    y: 30.00,
                    drilldown: 'Chrome',
                },
                {
                    name: 'Safari',
                    y: 15.00,
                    drilldown: 'Safari'
                },
                {
                    name: 'Firefox',
                    y: 10,
                    drilldown: 'Firefox'
                },
                {
                    name: 'Edge',
                    y: 15,
                    drilldown: 'Edge'
                },
                {
                    name: 'Opera',
                    y: 12,
                    drilldown: 'Opera'
                },
                {
                    name: 'Internet Explorer',
                    y: 15,
                    drilldown: 'Internet Explorer'
                },
                {
                    name: 'Other',
                    y: 3,
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
        type:'category'
    },
    legend: false
    ,

    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7,
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        },
    },
    tooltip:{
        useHTML: true,
        formatter: function () {
        // Set the tooltip's background color to match the point's color
        return `<div style="background-color: ${this.point.color}; padding: 10px; color: #fff; border-radius: 5px">
                    <strong s>${this.point.name}</strong><br>
                    Value: ${this.y}%
                </div>`;
        },
        borderRadius: 10,
        borderWidth: 3,

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

console.log(options.value)
</script>