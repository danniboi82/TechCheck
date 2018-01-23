module.exports = function (sequelize, DataTypes) {

    const Op = sequelize.Op;

    var Products = sequelize.define("Products", {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
          },
        userId: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        productName: { 
            type: DataTypes.STRING 
        },
        serialNumber: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        productDescription: { 
            type: DataTypes.STRING 
        },
        condition: {
            type: DataTypes.STRING
        },
        warranty: {
            type: DataTypes.STRING
        },
        packaging: {
            type: DataTypes.STRING
        }, 
        userUploadImage1: { 
            type: DataTypes.STRING 
        },
        userUploadImage2: { 
            type: DataTypes.STRING 
        },
        verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        status: {
            type: DataTypes.STRING
        }
    });
    return Products;
};
