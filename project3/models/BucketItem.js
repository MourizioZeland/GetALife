module.exports = function(sequelize, DataTypes) {
    var BucketItem = sequelize.define("BucketItem", {
      
      
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },

      category: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },

      imagelink: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },

      public: {
        type: Boolean,
        default: false,
        
      }

    });
  
   BucketItem.associate = function(models) {
      // We're saying that a budgett should belong to an user
      // A Budget can't be created without an User due to the foreign key constraint
      BucketItem.hasMany(models.Budget, {
        onDelete: "cascade"
        }
      );
    };
  
    return BucketItem;
  };
  