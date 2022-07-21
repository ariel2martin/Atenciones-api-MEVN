const db = require("../models");
const Formulario = db.formulario;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.Nombre) {
    res.status(400).send({ message: "debe tener Nombre" });
    return;
  }

  const elFormulario = new Formulario({
    FechaAtencion: req.body.FechaAtencion,
    DiaAtencion: req.body.DiaAtencion,
    HoraAtencion: req.body.HoraAtencion,
    LugarAtencion: req.body.LugarAtencion,
    Dni: req.body.Dni,
    Nombre: req.body.Nombre,
    Sexo: req.body.Sexo,
    Edad: req.body.Edad,
    HistoriaClinica: req.body.HistoriaClinica,
    Empresa: req.body.Empresa,
    MotivoPrincipal: req.body.MotivoPrincipal,
    MotivoSecundario: req.body.MotivoSecundario,
    DiagnosticoPresuntivo: req.body.DiagnosticoPresuntivo,
    Tipo: req.body.Tipo,
    MedicacionIndicada1: req.body.MedicacionIndicada1,
    Cantidad: req.body.Cantidad,
    MedicacionIndicada2: req.body.MedicacionIndicada2,
    Cantidad: req.body.Cantidad,
    AparatoComprometido: req.body.AparatoComprometido,
    UltimaPcr: req.body.UltimaPcr,
    PruebaAntigeno: req.body.PruebaAntigeno ? req.body.PruebaAntigeno : false,
    Resultado: req.body.Resultado,
    MedicoTratante: req.body.MedicoTratante,
    SeTraslado: req.body.SeTraslado,
    DescansoMedico: req.body.DescansoMedico,
  });

  // Save Formulario in the database
  elFormulario
    .save(elFormulario)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "hubo un error al inetentar grabar en la base de datos.",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Formulario.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Formularios.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Formulario.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Formulario with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Formulario with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Formulario.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Formulario with id=${id}. Maybe Formulario was not found!`,
        });
      } else res.send({ message: "Formulario was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Formulario with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Formulario.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Formulario with id=${id}. Maybe Formulario was not found!`,
        });
      } else {
        res.send({
          message: "Formulario was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Formulario with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Formulario.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Formularios were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Formularios.",
      });
    });
};

exports.findAllPublished = (req, res) => {
  Formulario.find({ published: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Formularios.",
      });
    });
};