module.exports = function(sequelize, DataTypes) {
  var Purchases = sequelize.define("Purchases", {
    orderNum:{
      type:DataTypes.STRING
    },
  sellerId:{
    type:DataTypes.STRING
  },
  buyerId:{
    type:DataTypes.STRING
  },
    
   
   
   proudctId:{
      type:DataTypes.STRING
    },
    itemPrice:{
      type:DataTypes.STRING
    },
    finalPrice:{
      type:DataTypes.STRING
    },
 
  
    
  
  
  }, {
    timestamps: true
  });
  return Purchases;
};
