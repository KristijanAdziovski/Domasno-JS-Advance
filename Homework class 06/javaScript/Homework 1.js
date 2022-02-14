function Product(name, category, hasDiscount, price) {
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
  }

  let product = [new Product("Milk","food",0,8),new Product("Yogurt","food",3,13),new Product("Beef","food",2,80),new Product("Skopsko","drink",3,19)
  , new Product("Barovo","drink",1,120),new Product("Marlboro","tobacco",0,16),new Product("Pastrmka","food",0,36),new Product("Zdravje Radovo","food",3,25)
  , new Product("Winson","tobacco",0,12),new Product("Coca-cola","drink",5,45),new Product("Takovo apple","drink",3,38),new Product("Oslic","food",0,22),new Product("Apple","food",3,45)
  , new Product("Orange","fruit",2,23),new Product("Banana","fruit",5,19)];

// Get produck by price greater than 20
function Price(price){
    console.log(`The name od produt is ${price.name} and price is : ${price.price}`);
}
console.log("===========Product nad price");
product.filter(p=>p.price>20).forEach(Price);
// Get product by category food
function Food(product) {
    console.log(`Product on discount is : ${product.name} and the discount is : ${product.hasDiscount}`);
}
console.log("======Has Discount=======")
product.filter(p=>p.hasDiscount>0 & p.category=="food").forEach(Food)
// average price of product thath  are on discount
function discount(currentSum, grade){
 
    return  currentSum += grade 
}
let averageProduct=product.filter(p=>p.hasDiscount>=1).map(p=>p.price)
.reduce(discount,0);
console.log("======= Average=======")
console.log(`Sum of average price of all product that are on discount is ${averageProduct/product.filter(p=>p.hasDiscount>=1).length}`);
// sort brodut by price
function copyArray(array){
    let copiedArray = [];
    array.forEach(item => copiedArray.push(item));
    return copiedArray;
}
console.log("Vowel products")
let productVowel = product.filter(p=>p.hasDiscount<1).filter(pr=>pr.name.startsWith("A")
 || pr.name.startsWith("E") || pr.name.startsWith("I") || pr.name.startsWith("O")||
  pr.name.startsWith("U")).map(product=>`${product.name}`);
  console.log(`The product who start with vowel and dont have discopunt are : ${productVowel}`)

  let copy = copyArray(product);
copy.sort((c1, c2) => c1.price - c2.price); 
console.log("======New Array =======")
console.log(copy);


