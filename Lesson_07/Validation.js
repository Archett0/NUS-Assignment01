function validateForm() {
    var errorFlag = false;
    var errorMsg = "";

    var name = document.getElementById("username").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementsByName("gender");

    if (name == null || name.length == 0) {
        errorFlag = true;
        errorMsg += "Name can not be blank! ";
    } else if (name.length > 15) {
        errorFlag = true;
        errorMsg += "Name should be within 15 letters long! ";
    }
    if (age == null || !(!isNaN(parseFloat(age)) && isFinite(age))) {
        errorFlag = true;
        errorMsg += "Age should be numeric! ";
    } else if (age < 1) {
        errorFlag = true;
        errorMsg += "Age should not be negative number! ";
    }
    var genderFlag = false;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderFlag = true;
            break;
        }
    }
    if (genderFlag == false) {
        errorFlag = true;
        errorMsg += "Gender must be selected! ";
    }

    if (errorFlag) {
        console.log(errorMsg);
        document.getElementById("errors").value = errorMsg;
    } else {
        document.getElementById("output").value = constructOutput();
    }
}

function constructOutput() {
    var res = "";
    var name = document.getElementById("username").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementsByName("gender");
    var phone = document.getElementById("phone").value;
    var hobbies = document.getElementsByName("hobbies");
    res += "Name=" + name + " Age=" + age + " Phone=" + phone;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            res += " Gender=" + gender[i].value;
            break;
        }
    }
    res += " Hobbies=";
    for (var i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
            res += hobbies[i].value + ",";
        }
    }
    res = res.substring(0, res.length - 1);
    console.log(res);
    return res;
}