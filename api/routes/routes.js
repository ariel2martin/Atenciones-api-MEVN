module.exports = app => {
    const comando = require("../controllers/controller.js");

    var router = require("express").Router();

    router.post("/medicotratante/", comando.MedicoTratanteAlta);
    router.get("/medicotratante/", comando.MedicoTratanteLista);
    router.delete("/medicotratante/:id", comando.MedicoTratanteDelete);

    router.post("/", comando.create);

    router.get("/", comando.findAll);


    router.get("/published", comando.findAllPublished);


    router.get("/:id", comando.findOne);


    router.put("/:id", comando.update);

    router.delete("/:id", comando.delete);


    router.delete("/", comando.deleteAll);

    //path que escucha la app
    app.use("/api", router);

};
