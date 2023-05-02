import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //  Index
  async(req, res) {
    try {

    } catch (e) {
      return res.json(null);
    }
  }

  // Show

  // Update

  // Delete
}

export default new UserController();
