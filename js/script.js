let ferstTitle = document.querySelector("h1");
//console.log(ferstTitle.innerText);
ferstTitle.innerText = "Shop Online";
//console.log(ferstTitle);

let colorBody = document.getElementById("myBody");
//console.log(colorBody);
colorBody.style.backgroundColor = "yellow";
//console.log(colorBody);

let footerAddress = document.querySelector(".footer__address");
//console.log(footerAddress.innerText);
footerAddress.innerText = "via Francesco Manzo 53, Salerno";
//console.log(footerAddress);

let itemsLink = document.querySelectorAll("a");
//console.log(itemsLink);
for(let i = 0; i < itemsLink.length; i++){
    itemsLink[i].classList.add("active");
}
//console.log(itemsLink);


let itemsImage = document.querySelectorAll("img");
//console.log(itemsImage);
for(let i = 0; i < itemsImage.length; i++){
    itemsImage[i].classList.toggle("visibility");
}
//console.log(itemsImage);

let itemsPrice = document.querySelectorAll(".items__price");
//console.log(itemsPrice);
for(let i = 0; i < itemsPrice.length; i++){
    itemsPrice[i].style.color = "red";
}
console.log(itemsPrice);