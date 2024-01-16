//your JS code here. If required.
function convertToUpperCase() {
      var inputElement = document.getElementById("fname");
      inputElement.value = inputElement.value.toUpperCase();
    }

    // Attach the event listener to the input field
    document.getElementById("fname").addEventListener("blur", convertToUpperCase);