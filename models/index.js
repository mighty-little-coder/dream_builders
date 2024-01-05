const User = require('./User');
const Repairs = require('./Repairs');
const Vehicles = require('./Vehicles') 

// User.belongstoMany(Repairs, { through: Vehicles, foreignKey: user_id })

// Repairs.belongstoMany(User, { through: Vehicles, foreignKey: repair_id })

// User.hasMany(Vehicles, { through: Vehicles, foreignKey: repair_id })

// Vehicles.belongstoMany(User, { through: Vehicles, foreignKey: vehicles_id })

module.exports = {User, Repairs, Vehicles}