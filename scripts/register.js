'use strict';
//Gọi dữ liệu từ local
const userArr = getFromStorage("userArr") || [];
//Đặt biến
var firstNameEl = document.getElementById('input-firstname');
var lastNameEl = document.getElementById('input-lastname');
var userNameEl = document.getElementById('input-username');
var passwordEl = document.getElementById('input-password');
var passWordConfirmEl = document.getElementById('input-password-confirm');

document.getElementById('btn-submit').addEventListener('click', function(e) {
    e.preventDefault();

    // tạo obj chứa giá trị input
    const user = new User (
        firstNameEl.value,
        lastNameEl.value,
        userNameEl.value,
        passwordEl.value 
    );
    userArr.push(user);
    console.log(userArr);
    
    // lưu mảng chứa vào local
    saveToStorage("userArr", userArr);
    
    //Kiểm tra dữ liệu tránh người dùng nhập thiếu
    if(firstNameEl.value.trim().length === 0) {
        alert('First Name không được để trống!');
        return;
    }
    if(lastNameEl.value.trim().length === 0) {
        alert('Last Name không được để trống!');
        return;
    }
    if(userNameEl.value.trim().length === 0) {
        alert('User Name không được để trống!');
        return;
    } 
    if(passwordEl.value.trim().length === 0) {
        alert('Password không được để trống!');
        return;
    }
    if(passwordEl.value.length < 8) {
        alert('Password phải trên 8 ký tự!');
        return;
    }
    //Kiểm tra password và confirmPassword 
    if(passWordConfirmEl.value !== passwordEl.value) {
        alert('Confirm Password bị sai!');
        return;
    }
    // Kiểm tra UserName trùng lặp
    if(
        !userArr.every((x) => (x.userName !== user.userName ? true : false))
    ) {
        alert('UserName đã có người sử dụng!');
    }
    window.location.href = "../pages/login.html";
    clear();
});
function clear() {
    firstNameEl.value = '';
    lastNameEl.value = '';
    userNameEl.value = '';
    passwordEl.value = '';
    passWordConfirmEl.value = '';
}
