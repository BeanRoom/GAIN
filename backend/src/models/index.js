import Sequelize from 'sequelize';
import path from 'path';

import { Account } from './Account';

const config = require(path.join(__dirname, '..', 'config', 'dbconfig.json'))['gain'];
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config  
)

const User = Account(sequelize, Sequelize);

export { sequelize, Sequelize, User };  