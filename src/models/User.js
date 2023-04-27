import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {// parece estranho, mas é a config do sequelize
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255], //  limite mínimo e máximo do campo
            msg: 'Campo nome deve ter entre 3 a 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: { //  esse campo não existe na base de dados
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50], //  limite mínimo e máximo do campo
            msg: 'A senha precisa ter entre 6 a 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
    }); // chama o init do pai

    // ++++++ Antes de salvar, pega a senha, faz um hash dela, coloca no password_hash e envia pro DB ++++++ //
    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });

    return this;
  }
}
