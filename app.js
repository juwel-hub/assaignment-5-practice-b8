let count = 0;

const allbtn = document.getElementsByClassName("add-btn");

for (const btn of allbtn) {
  btn.addEventListener("click", function handleSelect(event) {
    count += 1;

    const plaseName = event.target.parentNode.childNodes[1].innerText;
    // console.log(plaseName);
    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
    // console.log(price);
    const cart = document.getElementById("selected-place-container");
    const li = document.createElement("li");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    p.innerText = plaseName;
    p2.innerText = price;

    li.appendChild(p);
    li.appendChild(p2);
    const budged = document.getElementById("budget").innerText;
    const converted = parseInt(budged);
    if (converted - parseInt(price) < 0) {
      alert("low badget please rechurge your manibag");
      return;
    }
    document.getElementById("budget").innerText = converted - parseInt(price);
    cart.appendChild(li);
    totalCost("total-cost", parseInt(price));
    // -----grand total-------

    // console.log(convertTotalCost);
    grandTotalCost("others");

    setInnerText("cart-count", count);
  });
}
function totalCost(id, value) {
  const totalCost = document.getElementById(id).innerText;
  const ntotalCost = parseInt(totalCost);
  // console.log(ntotalCost);

  const total = ntotalCost + parseInt(value);
  document.getElementById(id).innerText = total;
  setInnerText("total-cost", total);
}
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function grandTotalCost(category) {
  const totalCost = document.getElementById("total-cost").innerText;
  const convertedCost = parseInt(totalCost);
  if (category == "bus") {
    setInnerText("grand-total", convertedCost + 100);
  } else if (category == "train") {
    setInnerText("grand-total", convertedCost - 200);
  } else if (category == "flight") {
    setInnerText("grand-total", convertedCost + 500);
  } else {
    setInnerText("grand-total", convertedCost);
  }
}
