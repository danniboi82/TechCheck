
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
        console.log(dbModel)
        function getDbDate () {
          const split=JSON.stringify(dbModel.dataValues.createdAt);
     const dbDate = split.split(':')
     const splitDate=dbDate[0].split('-')
    const dayCreated =splitDate[2].split('T')
    const removed=splitDate[0].split('"')
   
   const dates=splitDate[1]+'-'+dayCreated[0]+'-'+removed[1]
  return dates
         }
       const  createdOn=getDbDate()
         const product={
id:dbModel.dataValues.id,
userId:dbModel.dataValues.userId,
productName:dbModel.dataValues.productName,
serialNumber:dbModel.dataValues.serialNumber,
category:dbModel.dataValues.category,
price:dbModel.dataValues.price,
productDescription:dbModel.dataValues.productDescription,
condition:dbModel.dataValues.condition,
warranty:dbModel.dataValues.warranty,
packaging:dbModel.dataValues.packaging,
userUploadImage1:dbModel.dataValues.userUploadImage1,
userUploadImage2:dbModel.dataValues.userUploadImage2,
verified:dbModel.dataValues.verified,
createdAt:createdOn

         }
      res.send(product)
      })
      .catch(err => res.status(422).json(err));
  },
  scrape:function(req,res){

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
