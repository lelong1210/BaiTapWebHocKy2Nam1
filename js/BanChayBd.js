var xValues = ["Điện Thoại","Máy Tính","Phụ kiện","Thiết Bị Mạng","Máy tính Bảng"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("BanChayNhat", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Bán Chạy Nhất"
    }
  }
});