
var xValues = ["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"];
var yValues = [55, 49, 44, 24, 15,21,33,12,100,120,122,126];
var barColors = ["green","green","green","green","green","green","green","green","green","green","green","green"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Lợi Nhuận Theo Tháng ($)"
    }
  }
});
