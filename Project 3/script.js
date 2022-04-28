function validate() {
    const name1 = document.getElementById("inputName1");
    const email = document.getElementById("inputEmail1");
    const errorElement = document.getElementById("error");
  
    let messages = [];
  
    if (name1.value === "" || name1.value == null) {
      messages.push("Name is required");
      name1.focus();
      name1.style.border = "solid 2px red";
    }
  
    if (email.value === "" || email.value == null) {
      messages.push("Email is required");
      email.focus();
      email.style.border = "solid 2px red";
    } 
    else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    ) {
      messages.push("Please enter correct email");
      email.focus();
      email.style.border = "solid 2px red";
    }
  
    if (messages.length > 0) {
      errorElement.innerText = messages.join(", ");
      return false;
    }
  
    return true;
  }

  function validate2() {
    const email2 = document.getElementById("inputEmail2");
    if (email2.value === "" || email2.value == null) {
      alert("Email is required");
      email2.focus();
      email2.style.border = "solid 2px red";
      return false;
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email2.value)
    ) {
      alert("Please enter correct email");
      email2.focus();
      email2.style.border = "solid 2px red";
      return false;
    } else {
      alert("Subscribed");
      email2.value = "";
      email2.style = "";
    }
    return true;
  }
  