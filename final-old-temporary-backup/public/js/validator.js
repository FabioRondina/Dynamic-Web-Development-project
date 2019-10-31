function validate(){

  var name = $("#name").val();
  var email = $("#email").val();
  var password = $("#password").val();
  var checkPassword = $("#checkPassword").val();
  // console.log(name + " " + password + " " + checkPassword)

  if (name !="" && email !="" && password !="" && checkPassword !=""){
      if(password === checkPassword){// if fields not empty and password match
        console.log("valid data");
        return true;
      }else{
        alert("password are not matching");
        return false;
      }//end internal if
  }else{
    alert("Please fill all the fields");
    return false;
  }
}

function validateLogin(){
  var email = $("#email").val();
  var password = $("#password").val();

  // console.log(name + " " + password + " " + checkPassword)

  if ( email !="" && password !="" ){
      // console.log("valid data");
      return true;
  }else{
    alert("Please fill all the fields");
    return false;
  }
}
