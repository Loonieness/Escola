import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Igor',
      sobrenome: 'Souza',
      email: 'joabalmeida@gmail.com',
      idade: 24,
      peso: 70,
      altura: 1.75,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
