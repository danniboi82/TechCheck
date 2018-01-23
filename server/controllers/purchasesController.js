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

        // db.Purchases.bulkCreate(
            
         
        // )
        //   .then(dbModel => {
        //     console.log(dbModel)
        //   })
          // .catch(err => res.status(422).json(err));
      },
}

export default controller;