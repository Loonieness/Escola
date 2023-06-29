import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
//  todo model que a gente criar precisará passar por aqui
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];// transforma o model em array para percorrer ele

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models)); // se esse for verdadeiro, passa para o outro
