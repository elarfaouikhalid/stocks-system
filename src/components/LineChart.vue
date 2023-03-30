<template>
  <div>
    <apexchart ref="chart" :options="chartOptions" :series="chartSeries" type="line" height="100"></apexchart>
  </div>
</template>
  
<script>
import ApexCharts from 'apexcharts';
import axios from 'axios';
import { mapActions, mapGetters } from "vuex";
// import eventBus from '@/event-bus'

export default {
  name: 'CustomerChart',
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'line',
          toolbar: {
            show: false,
          },
          selection: {
            enabled: false
          },
          pan: {
            enabled: false,
          },
          zoom: {
            enabled: false,
          },
        },
        xaxis: {
          labels: {
            show: false,
          },
          title: {
            text: '',
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
          title: {
            text: '',
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        title: {
          text: 'Customer Chart',
          align: 'center',
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#fff'
          }
        },
        grid: {
          borderColor: '#f1f1f1',
          show: false,
        },
        stroke: {
          width: 2,
        },
      },
      chartSeries: [],
    };
  },
  mounted() {
  //   eventBus.$on('fetchCustomerChartData', (days) => {
  //   this.fetchChartData(days);
  // });
  // this.fetchChartData(this.getDays);
  },
  methods: {
    ...mapActions({
        "fetchCustomerChartData": "customer/fetchCustomerChartData"
    }),
    fetchChartData(Days) {
      this.fetchCustomerChartData(Days)
        .then((data) => {
          const { labels, counts } = data;
          this.chartSeries = [{ data: counts }];
          this.chartOptions.xaxis.categories = labels;
          this.buildChart();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    buildChart() {
      this.chart = new ApexCharts(this.$el, {
        chart: {
          type: 'line',
        },
        series: this.chartSeries,
        ...this.chartOptions,
      });
      this.chart.render();
    },
    updateChart(Days) {
      this.fetchChartData(Days);
    }
  },
  computed: {
    ...mapGetters({ 
      "getDays": "customer/getDay",
      "getCustomerChartData": "customer/getCustomerChartData"
    }),
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
    // EventBus.$off('updateCustomerChart', this.updateChart);
  },
};
</script>
<style scoped>
.apexcharts-xaxis-tick {
  opacity: 0;
}
</style>