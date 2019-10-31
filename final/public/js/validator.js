function validate(){

  var password = $("#passwordReg").val();
  var checkPassword = $("#checkPasswordReg").val();
  // console.log(name + " " + password + " " + checkPassword)

  if(password === checkPassword){// if fields not empty and password match
    console.log("valid data");
    return true;
  }else{
    alert("password are not matching");
    return false;
  }//end internal if
}//end function
