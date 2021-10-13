function isNumeric(value) {
    if (typeof value != "string") {
        return false;
    }
    return !isNaN(value) && !isNaN(parseFloat(value));
}

function checkInput() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num1Length = document.getElementById("number1").value.length;
    var num2Length = document.getElementById("number2").value.length;

    if (num1Length == 0 && num2Length == 0) {
        document.getElementById("inform").innerHTML = "Chưa nhập giá trị hợp lệ cho cả 2 ô";
    } else if (num1Length == 0 && num2Length != 0) {
        document.getElementById("inform").innerHTML = "Chưa nhập giá trị hợp lệ cho ô Số thứ nhất";
    } else if (num1Length != 0 && num2Length == 0) {
        document.getElementById("inform").innerHTML = "Chưa nhập giá trị hợp lệ cho ô Số thứ hai";
    } else {
        if (isNumeric(num1) == false && isNumeric(num2) == true) {
            document.getElementById("inform").innerHTML = "Giá trị ở ô Số thứ nhất không phải là số";
        } else if (isNumeric(num1) == true && isNumeric(num2) == false) {
            document.getElementById("inform").innerHTML = "Giá trị ở ô Số thứ hai không phải là số";
        } else if (isNumeric(num1) == false && isNumeric(num2) == false) {
            document.getElementById("inform").innerHTML = "Giá trị ở cả 2 ô không phải là số";
        } else {
            document.getElementById("inform").innerHTML = "";
        }
    }
}

function Calculate() {
    var check = false;
    operation = document.getElementsByName("operation");

    for (var i = 0; i < operation.length; i++) {
        if (operation[i].checked) {
            var num1 = document.getElementById("number1").value;
            var num2 = document.getElementById("number2").value;
            if (isNumeric(num1) == true && isNumeric(num2) == true) {
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                if (i == 0) {
                    document.getElementById("result").value = num1 + num2;
                }
                if (i == 1) {
                    document.getElementById("result").value = num1 - num2;
                }
                if (i == 2) {
                    document.getElementById("result").value = num1 * num2;
                }
                if (i == 3) {
                    document.getElementById("result").value = num1 / num2;
                }
            } else {
                checkInput(); // Nếu như 2 số nhập vào không phải là số thực thì gọi hàm checkInput()
            }
            check = true;
        }
    }
    if (check == false)
        document.getElementById("inform").innerHTML = "Chưa chọn phép tính";
}