const User = require('./User');
const Repairs = require('./Repairs');
const Vehicles = require('./Vehicles') 

User.hasMany(Vehicles, { foreignKey: "user_id" });

Vehicles.belongsTo(User, { foreignKey: "vehicles_id" });

Repairs.belongsTo(Vehicles, { foreignKey: "repair_id "});

module.exports = { User, Repairs, Vehicles };