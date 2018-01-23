import db from "../models"

const controller = {
    findId: (req, res) => {
        db.users.findAll({
          where: {
            active: true
          }
        })
          .then(dbModel => {
            console.log(dbModel)
          })
          .catch(err => res.status(422).json(err));
      },
      create: (req, res) => {
console.log('hey')
console.log(req.body)

        db.Purchases.bulkCreate(
            req.body.array
         
        )
          .then(dbModel => {
          
            console.log(dbModel)
        const prodsToUpdate=[]
            for(let i=0;i<req.body.array.length;i++){
              prodsToUpdate.push(req.body.array[i].proudctId)
            }           
            console.log(typeof prodsToUpdate[0])
         for(let i=0;i<prodsToUpdate.length;i++){
        db.Products.update({
          status:'sold'
          }, {
            where: {
              id: prodsToUpdate[i],
             
            }
          }).then(fun=>{
              res.send('done')
            })
        }
          })
          .catch(err => res.status(422).json(err));
      },
}

export default controller;