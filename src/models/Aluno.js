import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {// parece estranho, mas é a config do sequelize
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      peso: Sequelize.FLOAT,
      altura: Sequelize.FLOAT,
    }, {
      sequelize,
    }); // chama o init do pai
    return this;
  }
}
