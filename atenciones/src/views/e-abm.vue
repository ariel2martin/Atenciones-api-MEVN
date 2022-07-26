<template>
  <v-container>
    <v-card class="mx-auto" max-width="400">
      <v-data-table
        :headers="tableheaderMedico"
        :items="tablaMedico"
        :items-per-page="5"
        class="elevation-3 pa-4"
        :loading="loading"
        loading-text="Leyendo la base de datos"
        :search="search"
        :custom-filter="filterText"
      >
        <template v-slot:top>
          <v-toolbar-title>Listado de Medicos</v-toolbar-title>
          <v-toolbar flat>
            <v-text-field
              v-model="search"
              label="Busca y filtra"
              class="mx-4"
            ></v-text-field>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>

        <template v-slot:item.comandos="{ item }">
          <v-icon small @click="deleteMedico(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:footer.page-text>
          <v-btn
            :color="Complementario2"
            class="ma-2"
            @click="overlayAgregaMedico = true"
          >
            <v-icon small> mdi-plus </v-icon>Agregar
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
    <v-overlay :value="overlayAgregaMedico">
      <v-card class="mx-auto" elevation="24" :color="Complementario3">
        <v-card-text>
          <v-form ref="form">
            <v-text-field
              v-model="nuevoMedico[0].nombre"
              :rules="[(v) => !!v || 'Faltó el nombre']"
              required
              label="Nombre"
            ></v-text-field>

            <v-btn
              :color="Complementario4"
              class="mr-4"
              @click="agregaMedico(nuevoMedico)"
            >
              Agregar </v-btn
            ><v-btn
              :color="Complementario5"
              class="mr-4"
              @click="overlayAgregaMedico = false"
            >
              Cancelar
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-overlay>
  </v-container>
</template>
<script>
import axios from "axios";
import config from "../../configuraciones.js";
export default {
  components: { config },
  data() {
    return {
      loading: true,
      overlayAgregaMedico: false,
      search: "",
      tableheaderMedico: [
        {
          text: "MedicoTratante",
          align: "start",
          sortable: true,
          value: "MedicoTratante",
        },
        { text: "Desde", value: "desde", width: "30px" },
        { text: "", value: "comandos", width: "10px" },
      ],
      tablaMedico: [],
      nuevoMedico: [{ nombre: "" }],
      axiosHeaders: {
        headers: { "Content-type": "application/json" },
        params: {},
      },

      Complementario1: config.colors.complemento1,
      Complementario2: config.colors.complemento2,
      Complementario3: config.colors.complemento3,
      Complementario4: config.colors.complemento4,
      Complementario5: config.colors.complemento5,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    filterText(value, search, item) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value
          .toString()
          .toLocaleLowerCase()
          .indexOf(search.toLocaleLowerCase()) !== -1
      );
    },

    async getData() {
      await axios
        .get("http://localhost/api/medicotratante", this.axiosHeaders)
        .then((res) => {
          for (var i in res.data) this.tablaMedico.push(res.data[i]);

          //          console.log(res.data[1]);
          this.loading = false;
        })
        .catch((e) => {
          console.log(e);
          return;
        });
    },
    async deleteMedico(item) {
      let donde = this.tablaMedico.findIndex((i) => i === item);
      console.log("borrando: ", item.MedicoTratante);

      if (donde > -1) {
        await axios
          .delete(
            "http://localhost/api/medicotratante/" + item.id,
            this.axiosHeaders
          )
          .then((res) => {
            this.tablaMedico.splice(donde, 1);
          })
          .catch((e) => {
            console.log(e);
            return;
          });
      } else alert("No puedo manejar este nombre: " + item.MedicoTratante);
    },
    async agregaMedico(datos) {
      //this.listado.push(datos);

      for (var i in datos) {
        if (datos[i].nombre > " ") {
          let nuevo = this.normalize(datos[i].nombre);
          if (!this.medicoDuplicado(nuevo)) {
            console.log("agrego: ", nuevo);
            let payload = { MedicoTratante: nuevo };

            await axios
              .post(
                "http://localhost/api/medicotratante",
                payload,
                this.axiosHeaders
              )
              .then((res) => {
                this.tablaMedico = [];
                (this.nuevoMedico = [{ nombre: "" }]),
                  (this.overlayAgregaMedico = false);
                this.getData();
              })
              .catch((e) => {
                console.log(e);
                return;
              });
          } else {
            alert("Este medico ya está en la lista");
          }
        }
      }
    },
    medicoDuplicado(nombr) {
      if (
        this.tablaMedico.find((e) => e.MedicoTratante == nombr) == undefined
      ) {
        return false;
      } else {
        this.nuevoMedico = [{ nombre: nombr }];
        return true;
      }
    },

    normalize(string) {
      //return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      return string
        .trim()
        .replace("  ", " ")
        .replace("  ", " ")
        .replace("  ", " ")
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    },
  },
};
</script>
