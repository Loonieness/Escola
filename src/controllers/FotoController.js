import multer from 'multer';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('foto');

class FotoController {
  async store(req, res) {
    return upload(req, res, (error) => { // se essa seta dá erro, é por que falta um return
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      return res.json(req.file);
    });
  }
}

export default new FotoController();
