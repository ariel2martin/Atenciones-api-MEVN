const db = require("../models");
//console.log("controller", db);
const Formulario = db.formulario.Atencion;
const Medico = db.formulario.Medico;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.Nombre) {
    res.status(400).send({ message: "debe tener Nombre" });
    return;
  }

  const elFormulario = new Formulario({
    FechaAtencion: req.body.FechaAtencion,
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
    Cantidad1: req.body.Cantidad1,
    MedicacionIndicada2: req.body.MedicacionIndicada2,
    Cantidad2: req.body.Cantidad2,
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
          "hubo un error al intentar grabar en la base de datos.",
      });
    });
};
exports.MedicoTratanteAlta = (req, res) => {
  // Validate request
  if (!req.body.MedicoTratante) {
    res.status(400).send({ message: "debe tener Nombre" });
    return;
  }

  const elFormulario = new Medico({
    MedicoTratante: req.body.MedicoTratante,
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

exports.MedicoTratanteLista = (req, res) => {
  Medico.find(
    {},
    {
      MedicoTratante: 1,
      desde: { $dateToString: { format: "%d/%m/%Y", date: "$updatedAt" } },
    }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error al leer la base de datos",
      });
    });
};

exports.MedicoTratanteDelete = (req, res) => {
  const id = req.params.id;

  Medico.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `no se puede borrar el medico con id=${id}. parece que no está en la lista!`,
        });
      } else {
        res.send({
          message: "borrado OK",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Fallo al borrar medico con id=" + id,
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
