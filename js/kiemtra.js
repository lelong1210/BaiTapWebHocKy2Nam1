function CheckRong(){
    var arr = document.getElementsByTagName('input');
    var hoten = arr[1].value ;
    var matkhau = arr[2].value ;
    var sdt = arr[3].value ;
    var email = arr[4].value ;

    if(hoten == "" || matkhau == "" || sdt == "" || email == ""){
        alert('Các ô không được để trống');
    }
    else{
        alert('Đăng Ký Thành Công');
    }
}
function CheckTKMK(){
    var arr = document.getElementsByTagName('input');
    var hoten = arr[5].value ;
    var matkhau = arr[6].value ;

    if(hoten == "lql" && matkhau == "123"){
        location.replace('./ADMIN/TrangQuanTri.html');
    }
    else{
        alert('Thông tin không chính xác');
    }
}
function ThongBaoDaThem(){
    alert('Đã thêm vào giỏ hàng')
}
function DangNhapBang(){
    location.replace('./ADMIN/TrangQuanTri.html'); 
}