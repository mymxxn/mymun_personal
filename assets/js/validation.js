var name_val = false;
var email_val = false;
var number_val = false;
var message_val = false;


$("#name").on('input', function () {
  this.value = this.value.replace(/[^a-zA-Z ]/, '')


  if (this.value.charAt(0) == " ") {
    $("#name_err").html("User name should not start with space")
    $(this).css({ borderColor: "red" })
    name_val = false;
  }

  else if (this.value.length < 3) {
    $("#name_err").text("User name should be atleast 2 character")
    $(this).css({ borderColor: "red" })
    name_val = false;

  }




  else if (this.value.length > 20) {
    $("#name_err").text("User name should be max 20  character")
    $(this).css({ borderColor: "red" })
    name_val = false;

  }


  else if (this.value.includes("  ")) {
    $("#name_err").text("User name should not have more spaces ")
    $(this).css({ borderColor: "red" })
    name_val = false;

  }



  else {
    $(this).css({ borderColor: "green" })
    $("#name_err").html("")
    name_val = true
  }
})




















$("#email").on('input', function () {
  var email_field = /^([\w-\.]+@([\w-]+\.)+[\w-]{1,20})?$/;

  if (this.value.length < 0) {
    email_err.html("email should not be blank")
    $(this).css({ borderColor: "red" })
    email_val = false;

  }
  else if (this.value.charAt(0) == " ") {
    $("#email_err").html("Email should not start with space")
    $(this).css({ borderColor: "red" })
    name_val = false;
  }

  else if (this.value.includes("  ")) {
    $("#email_err").text("Email should not have more 2 spaces ")
    $(this).css({ borderColor: "red" })
    name_val = false;

  }

  else if (!email_field.test(this.value)) {
    $("#email_err").html("invalid format")
    $(this).css({ borderColor: "red" })
    email_val = false;

  }
  else {
    $("#email_err").html("")
    $(this).css({ borderColor: "green" })
    email_val = true
  }

})




$("#number").on('input', function () {
  this.value = this.value.replace(/[^0-9]/, '').replace(/(\..*)\./, '$1');;
  if (this.value.length != 10) {
    $("#number_err").html("Enter 10 number")
    $(this).css({ borderColor: "red" })
    number_val = false;

  }

  else {
    $("#number_err").html("")
    $(this).css({ borderColor: "green" })
    number_val = true;

  }


})







$("#message").on('input', function () {
  if (this.value.length < 6) {
    $("#message_err").html("Enter atleast 5 words")
    $(this).css({ borderColor: "red" })
    message_val = false
  }
  else {
    $(this).css({ borderColor: "green" })
    $("#message_err").html("")
    message_val = true;
  }




})







//form submission


$("#submit-form").submit((e) => {
  e.preventDefault()

  if (name_val == true && email_val == true && number_val == true && message_val == true) {
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbwuCiR3-JEqYKzH4bEeU-41cz_nKw7mQYrRngUd4gHxkucHWmzE7QZuGiljPGgKf4iT/exec",
      data: $("#submit-form").serialize(),
      method: "post",
      success: function (response) {
        alert("Form submitted successfully")
        window.location.reload()
        //window.location.href="https://google.com"
      },
      error: function (err) {
        alert("Something Error")

      }
    })
  }

  else {


    $("#name").css({ borderColor: "red" })
    $("#email").css({ borderColor: "red" })
    $("#number").css({ borderColor: "red" })
    $("#message").css({ borderColor: "red" })

  }

})