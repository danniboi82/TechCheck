import db from "../models"
import sgMail from '@sendgrid/mail'
const sengrido =process.env.sendgrid 
sgMail.setApiKey(sengrido);
const controller = {
  findId: (req, res) => {
   
    console.log(req.body)
   
      .then(dbModel => {
       
      
      }).then(fun=>{
        // res.send(productsArray)
      })
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {

    db.Purchases.bulkCreate(
      req.body.array

    )
      .then(dbModel => {


        const prodsToUpdate = []
        for (let i = 0; i < req.body.array.length; i++) {
          prodsToUpdate.push(req.body.array[i].proudctId)
        }

        for (let i = 0; i < prodsToUpdate.length; i++) {
          db.Products.update({
            status: 'sold'
          }, {
              where: {
                id: prodsToUpdate[i],

              }
            }).then(fun => {
res.end('done')
            })
        }
      })
      .catch(err => res.status(422).json(err));
  },
email: (req, res) => {
   
    console.log(req.body)
   db.Users.findOne({
     where:{
       id:req.body.userId}
   })
      .then(dbModel => {
       console.log(dbModel)
       const name = dbModel.dataValues.firstName + ' ' + dbModel.dataValues.lastName
       const msg = {
        to: req.body.email,
        from: 'TechCheck@donotreply.com',
        subject: 'Reqister Your Email With TechChecks ',
        text: 'click me ',
         html: name >'<strong>Thank you for buying with Tech Check. Your order is being procsessed <br/></strong>',
      };

      sgMail.send(msg);
      
      }).then(fun=>{
        res.send('done')
      })
      .catch(err => res.status(422).json(err));
  },
}

export default controller;