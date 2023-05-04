import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //  Index
  async index(req, res) {
    try {
      const users = await User.findAll(); //  traz todos os usuários do BD
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id); //  traz todos os usuários do BD
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update

  // Delete
}

export default new UserController();
