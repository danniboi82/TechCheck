import sendGridkey from '../../sendgrid.js'
import db from "../models"
import bcrypt from'bcrypt'
import jwtSecret from '../../jwtSecret'
import sgMail from '@sendgrid/mail'
import jwt, { verify } from 'jsonwebtoken'
const secret = process.env.jwt_secret || jwtSecret
const saltRounds =10;
const sengrido =process.env.sendgrid ||sendGridkey
sgMail.setApiKey(sengrido);
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
    console.log('look here')
    console.log(req.params.id)
    db.Users.findOne({
      where: {
        id: req.params.id,
        active: true
      }
    })
      .then(dbModel => {
        
      function getDbDate () {
        const split=JSON.stringify(dbModel.dataValues.createdAt);
   const dbDate = split.split(':')
   const splitDate=dbDate[0].split('-')
  const dayCreated =splitDate[2].split('T')
  const removed=splitDate[0].split('"')
 
 const dates=splitDate[1]+' '+dayCreated[0]+' '+removed[1]
return dates
       }
      const fullDate= getDbDate()
    const userProfilePage={
id:dbModel.dataValues.id,
email:dbModel.dataValues.email,
firstName:dbModel.dataValues.firstName,
lastName:dbModel.dataValues.lastName,
profilePic:dbModel.dataValues.profilePic,
phoneNumber:dbModel.dataValues.phoneNumber,
verified:dbModel.dataValues.verified,
active:dbModel.dataValues.active,
createdAt:fullDate

        }
        res.send(userProfilePage)
       // console.log(dbModel)
        // if (dbModel) {
      
        // } else {
        //   res.status(404).json({
        //     message: 'Id not found.'
        //   });
      //  }
      })
      .catch(err => res.status(422).json(err));
  },
  signIn: function (req, res) {
    
    db.Users.findOne({
      where: {
        email: req.body.email
      }
    }).then(function (userSign) {
         //if the database enycrpted password and non enypyted email from the database 
       //match create a JWT token and send it to the front end for storage
      bcrypt.compare(req.body.password, userSign.password).then(function (pass) {
        if (pass === true && req.body.email === userSign.email) {

         const splitAddy = userSign.dataValues.address.split(' ');
         const homeAdress = splitAddy[0] + ' ' + splitAddy[1];
         const homeCity = splitAddy[2];
         const homeState = splitAddy[3];
        const  homeZipCode = splitAddy[4]
         const fullName = userSign.dataValues.firstName + ' ' + userSign.dataValues.lastName;
          const currentUser = {
            userId: userSign.dataValues.id,
            email: userSign.dataValues.email,
            firstName: userSign.dataValues.firstName,
            lastName: userSign.dataValues.lastName,
            fullName: fullName,
            profilePic: userSign.dataValues.profilePic,
            phoneNumber: userSign.dataValues.phoneNumber,
            address: homeAdress,
            city: homeCity,
            state: homeState,
            zipCode: homeZipCode,
            verified:userSign.verified,
            dateOfBirth:userSign.dateOfBirth
          }
        
          const token = jwt.sign({
            auth: currentUser.userId,
            agent: req.headers['user-agent'],
            currentUser:{ currentUser },
            exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60, // Note: in seconds!
          }, secret);
          res.send(token)
         
         //if the database enycrpted password and non enypyted email from the database don't match
         //send the front end a string of noMatch telling the front end to prompt the user to retry 
        } else {
          res.status(404).send("noMatch");
          console.log('you got it wrong')
        }
      });

    })
  },
  signOut: function (req, res) {
    
 res.send('User signed out')
  },
  create: function (req, res) {
  
  console.log(saltRounds)
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
 
      db.Users.findOne({
        where: {
          email: req.body.email
        }
        }).then(newUser=>{
          console.log(newUser.dataValues.id)
          const name = newUser.dataValues.firstName + ' ' + newUser.dataValues.lastName
          const msg = {
            to: req.body.email,
            from: 'TechCheck@donotreply.com',
            subject: 'Reqister Your Email With TechChecks ',
            text: 'click me ',
             html: name +' <br> <a href='+'http://localhost:3000/api/users/verification/' +newUser.dataValues.id +'><strong> <button>Please Click This Link to Register Your Email</button></a></strong>',
          };
  
          sgMail.send(msg);
          res.send('user Created')
        })

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
 verification: function (req, res) {
console.log(req.params.id)
    db.Users.update({
      verified:true
    }, {
        where: {
          id: req.params.id,
          active: true
        }
      })
      .then(dbModel => {
        
        db.Users.findOne({
          where:{
            id:req.params.id
          }
        }).then(verify=>{
          console.log(verify)
       const name =verify.dataValues.firstName+ ' '+verify.dataValues.lastName
  
          res.send(name)
        })

      })
      .catch(err => res.status(422).json(err));
  },
  forgot: function (req, res) {
   
        db.Users.findOne({
           
            where: {
              email: req.params.email
              
            }
        
          })
          .then(forgottenUser => {
          console.log(forgottenUser)
            // const token = jwt.sign({
            //   auth: forgottenUser.userId,
            //   agent: req.headers['user-agent'],
            //   currentUser:{ forgottenUser },
            //   exp: Math.floor(new Date().getTime() / 1000) , // Note: in seconds!
            // }, secret);
         
            const name = forgottenUser.dataValues.firstName + ' ' + forgottenUser.dataValues.lastName
            const msg = {
              to: req.params.email,
              from: 'TechCheck@donotreply.com',
              subject: 'TechCheck Account Recovery',
              text: 'click me ',
               html: name +' <br> <a href='+'http://localhost:3000/api/users/recover/' +forgottenUser.dataValues.id +'><strong><button style="color:blue">Reset Password</button></a></strong><br>Note:This link will expire in one hour',
            
            };
    
            sgMail.send(msg);
            res.send('sent')
            
          })
          .catch(err => res.status(422).json(err));
      },
      recovery: function (req, res) {
        console.log('hi')
        console.log(req.params)
        
        bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        db.Users.update({
         password:hash
        }, {
            where: {
              id: req.params,
              active: true
            }
          })
          .then(forgottenUser => {
         
            res.send('Sucsessfully changed password')
        
          })
        
          .catch(err => res.status(422).json(err));
        })
        
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
