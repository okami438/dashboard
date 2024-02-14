<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue';
import Chart from 'chart.js/auto';

const chartCanvas = ref(null);
const chartContainer = ref(null);
let chartInstance = null;

onMounted(() => {
  renderChart();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

const renderChart = () => {
  const ctx = chartCanvas.value.getContext('2d');
  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['01 Apr', '02 Apr', '03 Apr', '04 Apr', '05 Apr', '06 Apr', '07 Apr'],
      datasets: [
        {
          label: 'Sales',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  handleResize();
};

const handleResize = () => {
  chartCanvas.value.width = chartContainer.value.clientWidth;
  if (chartInstance) {
    chartInstance.resize();
  }
};
</script>

<template>
  <div class="chart card" ref="chartContainer">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>


<style scoped lang="scss">
.chart {
  background-color: white;
  border-radius: 12px;
  position: relative;

  canvas {
    padding: 2rem;
    display: flex;
    width: 100%;
    height: 100%;
  }
}
</style>