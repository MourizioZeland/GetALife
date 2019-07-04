module.exports = function(sequelize, DataTypes) {
    var Comments = sequelize.define("Users", {
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        imageLink: {
            type: DataTypes.STRING,
            allowNull: true,
      },

      public: {
        type: Boolean,
        default: false,
        
      }


    });


Users.associate = function(models) {
    // Associating user with budget
    // When an user is deleted, also delete any associated budgets
    Comments.belongsTo(models.BucketItems, {
        foreignKey: {
          allowNull: false
    
        }});
  };

 



  return Comments;

  
};