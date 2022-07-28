module.exports = (mongoose) => {
    var schema = mongoose.Schema(
        {
            FechaAtencion: String,

            LugarAtencion: String,
            Dni: String,
            Nombre: String,
            Sexo: String,
            Edad: String,
            HistoriaClinica: String,
            Empresa: String,
            MotivoPrincipal: String,
            MotivoSecundario: String,
            DiagnosticoPresuntivo: String,
            Tipo: String,
            MedicacionIndicada1: String,
            Cantidad1: String,
            MedicacionIndicada2: String,
            Cantidad2: String,
            AparatoComprometido: String,
            UltimaPcr: String,
            PruebaAntigeno: String,
            Resultado: String,
            MedicoTratante: String,
            SeTraslado: String,
            DescansoMedico: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    var medico = mongoose.Schema(
        {
            MedicoTratante: String,
        },
        { timestamps: true }
    );

    medico.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Medico = mongoose.model("medico", medico);

    const Atencion = mongoose.model("formulario", schema);
    return { Atencion, Medico };
};
