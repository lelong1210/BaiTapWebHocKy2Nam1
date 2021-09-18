x1 = 0 
x2 = 0 
x3 = 0
function Tang1(){
    x1 = x1 + 1 ;
    document.getElementById('story1').innerHTML = x1;
}
function Giam1(){
    if(x1 <= 0){
        alert("Không Thể Xóa...");
    }else{
        x1 = x1 - 1 ;
        document.getElementById('story1').innerHTML = x1;
    }
}
function Tang2(){
    x2 = x2 + 1 ;
    document.getElementById('story2').innerHTML = x2;
}
function Giam2(){
    if(x2 <= 0){
        alert("Không Thể Xóa...");
    }else{
        x2 = x2 - 1 ;
        document.getElementById('story2').innerHTML = x2;
    }
}
function Tang3(){
    x3 = x3 + 1 ;
    document.getElementById('story3').innerHTML = x3;
}
function Giam3(){
    if(x3 <= 0){
        alert("Không Thể Xóa...");
    }else{
        x3 = x3 - 1 ;
        document.getElementById('story3').innerHTML = x3;
    }
}
function ThanhToan(){
    alert('Đơn Hàng Sẽ Được Đưa Tới Nhà Phân Phối');
}