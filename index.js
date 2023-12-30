// const li = document.querySelectorAll("li");
const td = document.querySelectorAll(["#section"]);
const tr = document.querySelectorAll(["#ed", "#tech", "#details"]);

// li.forEach((e) => {
//   const deleteButton = document.createElement("button");
//   deleteButton.textContent = "D";
//   deleteButton.style.backgroundColor = "#FCAF50";
//   deleteButton.style.color = "#fff";
//   e.appendChild(deleteButton);
//   deleteButton.addEventListener("click", () => {
//     if (e.parentElement.childElementCount > 2) {
//       e.remove();
//     }
//   });
// });

td.forEach((e) => {
  const addbtn = document.createElement("button");
  addbtn.textContent = "Add";
  addbtn.style.backgroundColor = "#4CAF50";
  addbtn.style.color = "#fff";
  e.append(addbtn);

  addbtn.addEventListener("click", () => {
    const firstChild = e.querySelector("li");
    if (firstChild && firstChild.nodeType == 1) {
      const clone = firstChild.cloneNode(true);
      e.insertBefore(clone, addbtn);
    }
  });
});

tr.forEach((e) => {
  const addbtn = document.createElement("button");
  addbtn.textContent = "Add";
  addbtn.style.backgroundColor = "#4CAF50";
  addbtn.style.color = "#fff";
  e.querySelector("tr").append(addbtn);

  addbtn.addEventListener("click", () => {
    const firstChild = e.querySelector("#demo");
    if (firstChild && firstChild.nodeType == 1) {
      const clone = firstChild.cloneNode(true);
      firstChild.parentElement.append(clone);
    }
  });
});

function printresume() {
  const styleElement = document.createElement("style");
  const cssRule = `
    body > * {
        font-size: 0.5em !important;
    }
`;

  styleElement.textContent = cssRule;

  document.body.appendChild(styleElement);

  setTimeout(() => {
    document.body.removeChild(styleElement);
    $("button").fadeIn("fast");
  }, 1000);

  setTimeout(function () {
    $("button").fadeOut(0);
    window.print();
    // alert("Thank you!");
  }, 0);

  // const newbutton = document.createElement("button");
  // newbutton.innerHTML = `<button id="printresume" onclick="printresume()">Download</button>`;

  // body.append(newbutton)
  // console.log(newbutton)
}
