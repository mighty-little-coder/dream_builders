const User = require('./User');
const Repairs = require('./Repairs');
const Vehicles = require('./Vehicles') 

User.hasMany(Vehicles, { through: Vehicles, foreignKey: repair_id })

// Vehicles.Belongsto(User, { through: Vehicles, foreignKey: vehicles_id })

