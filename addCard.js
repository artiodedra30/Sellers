let addCards = async (backend_url) => {
   let res = await fetch(backend_url, {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
   });
 let cardsElements = await res.json()

let cards = document.querySelector("#cards")

cardsElements.forEach(card => { 
  let price = card.Price
  let height = card.height
  let decorations = card.decorations
  let shade = card.Shade
  let productid = card.productid
  
  let wraperDiv =  document.createElement('div');
  let ContainerDiv = document.createElement('div');
  let ProductDetailsDiv = document.createElement('div');
  let TitleHeading = document.createElement('h1');
  let StarSpan = document.createElement('span');
  let icon1 = document.createElement('i');
  let icon2 = document.createElement('i');
  let icon3 = document.createElement('i');
  let icon4 = document.createElement('i');
let icon5 = document.createElement('i');

let InformationParagraph = document.createElement('p');

let ControlDiv = document.createElement('div');

let Btn = document.createElement('button');

let PriceSpan = document.createElement('span');
let ShoppingCartSpan = document.createElement('span');
let CartIcon = document.createElement('i');
let BuySpan = document.createElement('span');

let ProductImgDiv = document.createElement('div');
let ProductImg = document.createElement('img');

let InfoDiv = document.createElement('div');
let DescHeading = document.createElement('h2');
let PropertiesUl = document.createElement('ul');
let HeightList = document.createElement('li');


let ShadeList = document.createElement('li');
let DecorationList = document.createElement('li');
let MaterialList = document.createElement('li');


// Attributes
wraperDiv.id = productid
ContainerDiv.id = "container" 
ProductDetailsDiv.className = "product-details"

TitleHeading.textContent = "CHRISTMAS TREE"

StarSpan.classList.add("hint-star", "star")
icon1.classList.add("fa", "fa-star") 
icon1.setAttribute("aria-hidden", "true")
icon2.classList.add("fa", "fa-star") 
icon2.setAttribute("aria-hidden", "true")
icon3.classList.add("fa", "fa-star") 
icon3.setAttribute("aria-hidden", "true")
icon4.classList.add("fa", "fa-star") 
icon4.setAttribute("aria-hidden", "true")
icon5.classList.add("fa", "fa-star-o") 
icon5.setAttribute("aria-hidden", "true")

InformationParagraph.className = "information"
InformationParagraph.textContent = "Let's spread the joy , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas."

ControlDiv.className = "control"

Btn.className = "btn"
Btn.setAttribute("onclick" ,`buyNow(${productid})`)
PriceSpan.className = "price"
PriceSpan.textContent = `$ ${price}`
ShoppingCartSpan.className = "shopping-cart"
CartIcon.classList.add("fa", "fa-shopping-cart")
CartIcon.setAttribute("aria-hidden","true")
BuySpan.className = "buy"
BuySpan.textContent = "Get now"
ProductImgDiv.className = "product-image"
ProductImg.src = "https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
ProductImg.alt = ""

InfoDiv.className = "info"
DescHeading.textContent = "Description"
HeightList.textContent = `Height: ${height} Ft`
ShadeList.textContent = `Shade: ${shade}`
DecorationList.textContent = `decoration: ${decorations}`
MaterialList.textContent = "Material: Eco-Friendly"



//append elements

ContainerDiv.appendChild(ProductDetailsDiv)
ContainerDiv.appendChild(ProductImgDiv)

ProductDetailsDiv.appendChild(TitleHeading)
ProductDetailsDiv.appendChild(StarSpan)
StarSpan.appendChild(icon1)
StarSpan.appendChild(icon2)
StarSpan.appendChild(icon3)
StarSpan.appendChild(icon4)
StarSpan.appendChild(icon5)
ProductDetailsDiv.appendChild(InformationParagraph)

ProductDetailsDiv.appendChild(ControlDiv)
ControlDiv.appendChild(Btn)
Btn.append(PriceSpan, ShoppingCartSpan, BuySpan)
ShoppingCartSpan.appendChild(CartIcon)

ProductImgDiv.appendChild(ProductImg)
ProductImgDiv.appendChild(InfoDiv)
InfoDiv.append(DescHeading, PropertiesUl)
PropertiesUl.append(HeightList, ShadeList, DecorationList, MaterialList)


console.log(ContainerDiv);
// console.log(cards);

cards.append(wraperDiv);
wraperDiv.appendChild(ContainerDiv)

});
}

addCards("http://localhost:3000/cards")


