function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    function validateEmail(email) {

        let email = document.getElementById('email').value;
        if(email!=''){
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          console.log(re.test(String(email).toLowerCase()))
          this.emailTest = re.test(String(email).toLowerCase())
          if (this.emailTest != true) {
            this.toastr.warning("please enter valid email")
            return;
          }
    
        }
        }
  }