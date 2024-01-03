const User = require('./User');
const Repairs = require('./Repairs');
const Vehicles = require('./Vehicles') 

User.belongstoMany(Repairs, { through: Vehicles, foreignKey: user_id})
Repairs.belongstoMany(Users, { through: Vehicles, foreignKey: repair_id})