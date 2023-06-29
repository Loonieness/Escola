import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {// parece estranho, mas é a config do sequelize
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: [3, 255],
            msg: 'Campo não pode ficar vazio.',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: [3, 255],
            msg: 'Campo não pode ficar vazio.',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'fotos',
    }); // chama o init do pai
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
