const { materias } = require('../controller/materia.controller.js');

const seguir = (req, res, next) => {
  next();
};

const existeMateriaByID = (req, res, next) => {
  const id = req.params.id;
  const idx = materias.findIndex(m => m.id === id);
  if (idx < 0) {
    return res.status(404).json({
      error: `No se encuentra la materia con el ID ${id}`
    });
  }
  next();
};

module.exports = { seguir, existeMateriaByID };