<template>
  <div class="dashboard">
    <div class="text-h5 text-left mb-2">Dashboard</div>
    <v-divider></v-divider>
    <apexchart type="line" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data: () => ({
    series: [
      {
        name: "AUM",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: "PRICE",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ],
    noData: {
      text: "Loading...",
    },
    chartOptions: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: [
        "01/01/2003",
        "02/01/2003",
        "03/01/2003",
        "04/01/2003",
        "05/01/2003",
        "06/01/2003",
        "07/01/2003",
        "08/01/2003",
        "09/01/2003",
        "10/01/2003",
        "11/01/2003",
      ],
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        title: {
          text: "Points",
        },
        min: 0,
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          },
        },
      },
    },
    overdueSeries: [{ name: "Overdue MOCs", data: [8, 10] }],
    overdueOptions: {
      title: {
        text: "Overdue MOCs",
        align: "center",
        style: {
          fontSize: "15px",
          fontWeight: "500",
          fontFamily: "Roboto",
        },
      },
      labels: ["Temporary", "Emergency"],
    },
  }),
  mounted() {
    axios
      .get("real-time-attest.trustexplorer.io/api/nexo/snapshot")
      .then((response) => {
        /*for (let i = 0; i < response.data.length; i++) {
          this.data.series.push(response.data[i].value);
          this.data.chartOptions.labels.push(response.data[i].key);
        }*/
        console.log(response.data + "+");
      });
  },
};
</script>

<style scoped>
</style>
