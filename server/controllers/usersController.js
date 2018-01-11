import sendGridkey from '../../sendgrid.txt'
import db from "../models"
import bcrypt from'bcrypt'

import sgMail from '@sendgrid/mail'
const saltRounds =10;

const sengrido =process.env.sendgrid ||sendGridkey
// Defining methods for the booksController process.env.sendgrid ||
const controller = {
  findAll: (req, res) => {
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
  findById: function (req, res) {
    db.Users.findOne({
      where: {
        id: req.params.id,
        active: true
      }
    })
      .then(dbModel => {
        if (dbModel) {
          res.json(dbModel);
        } else {
          res.status(404).json({
            message: 'Id not found.'
          });
        }
      })
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body)
    let name = req.body.firstName + ' ' + req.body.lastName
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      if (err) {


        console.log(err)
      }
      db.Users.findOne({
        where: {
          email: req.body.email
        }
      }).then(function (data) {
        if (data != null) {
console.log(data)
          console.log('hi')
          res.send('already')


        }
else{
   db.Users.create({
     email: req.body.email,
     password: hash,
     firstName: req.body.firstName,
     lastName: req.body.lastName,
     profilePic: req.body.profilePic,
     phoneNumber: req.body.phoneNumber,
     address: req.body.address,
     dateOfBirth: req.body.dateOfBirth,
   })
      .then(dbModel => {
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(sengrido);

      // href = "<a href='localhost:8000.com/email/verification/"
        // email = req.body.email + "'" + "> Click Here To Register <a/>"
       // let fullEmail = href.concat(email);

          // console.log(fullEmail)

        const msg = {
          to: req.body.email,
          from: 'techtricks@donotreply.com',
          subject: 'Reqister Your Email With TechChecks ',
          text: name + ' ' + "Please Click The Link to Register Your Email" + " " + "https://localhost:3000/email/verification/" + req.body.email
          // html: '<strong>' + name + ' ' + 'Please Click The Link to Register Your Email <br> </strong>',
        };

        sgMail.send(msg);
        res.send('user Created')
      })
      .catch(err => res.status(422).json(err));
    }
  })
    })
  },
  update: function (req, res) {
    db.Users.update({
     active:false
    }, {
        where: {
          email: req.params.email,
          active: true
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Users.update({
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
