const Libro = require('../models/Libro');

exports.listarLibros = async (req, res) => {
  try {
    const libros = await Libro.findAll({
      order: [['id', 'ASC']]    
    });
    res.json({ ok: true, libros });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, msg: 'Error al listar libros' });
  }
};

exports.comprarLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const { cantidad } = req.body;

    const cant = parseInt(cantidad, 10);

    if (isNaN(cant) || cant <= 0) {
      return res.status(400).json({ ok: false, msg: 'Cantidad inválida' });
    }

    const libro = await Libro.findByPk(id);

    if (!libro) {
      return res.status(404).json({ ok: false, msg: 'Libro no encontrado' });
    }

    if (libro.stock < cant) {
      return res.status(400).json({
        ok: false,
        msg: 'Stock insuficiente',
      });
    }

    libro.stock = libro.stock - cant;
    await libro.save();

    return res.json({
      ok: true,
      msg: 'Compra exitosa',
      libro: {
        id: libro.id,
        titulo: libro.titulo,
        stockRestante: libro.stock,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, msg: 'Error al comprar libro' });
  }
};
