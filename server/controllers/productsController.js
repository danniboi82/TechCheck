
import db from"../models"



// Defining methods for the booksController
const controller = {
  userProducts: (req, res) => {
    console.log('hi')
    console.log(req.params)
    db.Products.findAll({
        where: {
          userId:req.params.id
        }
      })
      .then(dbModel =>{
console.log(dbModel.length)
       
        res.send(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
  console.log(req.params.id)
    db.Products.findOne({
        where: {
          id: req.params.id,
          
        }
      })
      .then(dbModel => {
      res.send(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    db.Products.create({
      userId:req.body.userId,
      
      category: req.body.category,
     tags: req.body.tags,
     computerInfo:req.body.computerInfo,
      productName: req.body.productName,
      productDescription: req.body.productDescription,
      serialNumber:req.body.serialNumber,
      userUploadImage1: req.body.userUploadImage1,
      userUploadImage2: req.body.userUploadImage2,
      condition:req.body.condition,
      price: req.body.price,
      warranty:req.body.warranty,
      status:req.body.status,
     packaging: req.body.packaging
      })
      .then(dbModel => {

res.send('product created')
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Products.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName
      }, {
        where: {
          id: req.params.id,
          inactive: false
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Products.update({
        inactive: true
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

export { controller as default };
