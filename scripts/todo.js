"use strict";
const submitBtn = document.getElementById("submitBtn");
const messageDiv = document.getElementById("messageDiv");
const userIdInput= document.getElementById("userIdInput")


window.onload = function () {
  submitBtn.onclick = onSubmitBtnInput;
};

function onSubmitBtnInput() {

    fetch(`https://jsonplaceholder.typicode.com/todos/${userIdInput.value}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
      let message = `UserId:${data.id} <br/> Title: ${data.title} <br/> Completed: ${data.completed}`;
      //messageDiv.replaceChildren(message);
messageDiv.innerHTML = message;
});
}



