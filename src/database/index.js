import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
//  todo model que a gente criar precisará passar por aqui
import Aluno from '../models/Aluno';
import User from '../models/User';

const models = [Aluno, User];// transforma o model em array para percorrer ele

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
