
var xValues = ["THIỆN","TẤN","HẢI","VIỆT","TOÀN","SƠN","NGHĨA","DŨNG","KHÁNH","HÒA","LONG","NGỌC"];
var yValues = [55, 49, 44, 24, 15,21,33,12,100,120,122,126];
var barColors = ["green","green","green","green","green","green","green","green","green","green","green","green"];

new Chart("KhachHangGiaoDichNhieuNhat", {
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
    //   text: "Lợi Nhuận Theo Tháng ($)"
    }
  }
});
