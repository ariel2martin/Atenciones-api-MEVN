<template>
  <div>
    <v-data-table
      :headers="tableheader"
      :items="tableData"
      :items-per-page="12"
      class="elevation-1"
      :loading="loading"
      loading-text="Loading... Please wait"
      multi-sort
      :search="search"
      :custom-filter="filterText"
    >
      <template v-slot:top>
        <v-toolbar-title> </v-toolbar-title>
        <v-toolbar flat>
          <v-text-field
            v-model="search"
            label="Busca y filtra"
            class="mx-4"
          ></v-text-field>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">More info about {{ item.name }}</td>
      </template>
    </v-data-table>
  </div>
</template>
<script>
//import { Table, TableColumn } from "element-ui";
import axios from "axios";
import config from "../../configuraciones.js";
export default {
  components: { config },
  data() {
    return {
      show: true,

      loading: true,
      search: "",
      tableheader: [
        {
          text: "Derivado",
          align: "start",
          sortable: true,
          value: "concepto",
        },
        { text: "Año", groupable: true, value: "año" },
        { text: "Mes", value: "mes" },
        { text: "metros cúbicos", align: "end", sortable: false, value: "m3" },
      ],
      tableData: [],
      selected: [],
      targetVal: [],
      datosgrafico: [],

      Complementario1: config.colors.complemento1,
      Complementario2: config.colors.complemento2,
      Complementario3: config.colors.complemento3,
      Complementario4: config.colors.complemento4,
      Complementario5: config.colors.complemento5,
    };
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
      const axiosHeaders = {
        headers: {},
        params: {},
      };

      await axios
        .get(
          "https://raw.githubusercontent.com/ariel2martin/presentacion/master/dist/derivados.json",
          axiosHeaders
        )
        .then((res) => {
          // if (res.data[i].concepto == "Nafta Grado 3 (Ultra)")
          for (var i in res.data) this.tableData.push(res.data[i]);

          this.loading = false;
          //console.warn(this.tableData);
        })
        .catch((e) => {
          console.log(e);
          return;
        });

      this.tableData.sort(function (a, b) {
        if (a.concepto > b.concepto) {
          return 1;
        }
        if (a.concepto < b.concepto) {
          return -1;
        }

        if (a.concepto == b.concepto) {
          if (a.año > b.año) {
            return 1;
          }
          if (a.año < b.año) {
            return -1;
          }

          if (a.año == b.año) {
            if (parseInt(a.mes) > parseInt(b.mes)) {
              return 1;
            }
            if (parseInt(a.mes) < parseInt(b.mes)) {
              return -1;
            }
            return 0;
          }
        }
      });

      let primeravez = true;
      let cambioconcepto = "nada";
      let puntero = 0;
      let valor = 0;
      // *
      for (var i in this.tableData) {
        if (cambioconcepto != this.tableData[i].concepto) {
          if (cambioconcepto != "nada") {
            primeravez = false;
            puntero++;
          }
          cambioconcepto = this.tableData[i].concepto;
          this.datosgrafico.push({
            text: cambioconcepto,
            value: [],
          });
        }
        //console.warn(puntero);
        valor = Math.floor(parseInt(this.tableData[i].m3) / 1000);
        if (primeravez) {
          this.selected.push(valor);
          this.targetVal.push(valor);
          this.datosgrafico[0].value.push(valor);
        } else {
          this.datosgrafico[puntero].value.push(valor);
        }
      }
      //* /
      //console.log(this.targetVal);
    },
  },
};
</script>
<style scoped lang="scss">
@use "sass:math";
@import "./configuraciones.scss";
body {
  font-family: "Mada", sans-serif;
  background: $background;
}

span {
  color: white;
}

svg {
  width: 80%;
  text {
    fill: grey;
    font-family: "Mada", sans-serif;
  }
}

line {
  stroke: #555;
  stroke-width: 2px;
}

select {
  font-family: "Mada", sans-serif;
  background: #444;
  color: #ccc;
  border: 0;
  width: 200px;
  margin: 0 0 25px;
  outline: 0;
  cursor: pointer;
  height: 35px;
  option {
    font-family: "Mada", sans-serif;
  }
}
</style>
