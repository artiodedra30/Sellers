const express = require('express');
const app = express() ;
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const {getFirestore} = require('firebase-admin/firestore')
const {initializeApp, cert} = require("firebase-admin/app")
const {sheets} = require('./sheets')

const {signin, signup} = require("./firebase") 
//Firebase
const admin = require("firebase-admin");

var serviceAccount = require("./secretKey.json");

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore()

app.post('/cards', async (req, res) => {
 const ref = db.collection('products')
 const snapshot = await ref.get()
 let products = snapshot.docs
 for (let i = 0; i < products.length; i++) {
const element = products[i].data();
} 
let elements = []
for (let j = 0; j < products.length; j++) {

  const height = products[j].data().height || "None";
  const decorations = products[j].data().Decorations || "NaN"
  const Price = products[j].data().Price || "None"
  const Shade = products[j].data().Shade || "Olive Green"
  const productid = products[j].id
  let card = {
    Price: Price,
    height: height ,
    decorations: decorations,
    Shade: Shade,
    productid: productid
  };
  elements.push(card)
  
}
res.send(elements)
});

app.post('/login', async (req, res) => {
  /* console.log('login backend');
     console.log(req.body.id);
     console.log(req.body.password); */

let certified = await signin(req.body.id, req.body.password)
let a = await certified
// console.log(a);
res.send(a)

});

app.post('/signup', async (req, res) => {
  /*console.log(req.body.signupID);
  console.log(req.body.signupPwd);
   console.log(req.body.confirmPwd); */

  let user = await signup(req.body.signupID, req.body.signupPwd)
  let b = await user
  console.log(b);
  res.send(b)
  
});

app.post('/buynow',  async (req, res) => {
  let promise = await sheets(req.body.id)
  let sheet = await promise
  console.log(sheet);
  res.send({message: "true"})
})

app.listen(3000, () => {
 console.log('example add');
});