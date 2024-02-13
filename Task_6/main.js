// uppercase function
function Uppercase() {
   let textInput = document.getElementById('texinput');
    textInput.value = textInput.value.toUpperCase();
}

// lower case function
function Lowercase() {
  let textInput = document.getElementById('texinput');
    textInput.value = textInput.value.toLowerCase();
}

// formate text function
function format() {
    let textInput = document.getElementById('texinput');
    textInput.value = textInput.value.replace(/\s+/g, ' ').trim();
}

// copy text function
function copy() {
    let textInput = document.getElementById('texinput');
    textInput.select();
    document.execCommand('copy');
}

// clear all text function
function clearA() {
    document.getElementById('texinput').value = '';
}
