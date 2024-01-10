const User = require('./User');
const Repairs = require('./Repairs');
const Vehicles = require('./Vehicles') 

User.hasMany(Vehicles, { foreignKey: "user_id" });

Vehicles.belongsTo(User/*, { foreignKey: "vehicles_id" }*/);

Repairs.belongsTo(Vehicles/*, { foreignKey: "repairs_id "}*/);

Vehicles.hasMany(Repairs, { foreignKey: "vehicles_id" });

module.exports = { User, Repairs, Vehicles };