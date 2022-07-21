<template>
  <v-layout>
    <v-card elevation="6" class="mx-auto">
      <v-card-text>
        <v-select :items="Tipo" label="Tipo de atención"></v-select>
        <v-text-field
          type="datetime-local"
          id="birthdaytime"
          name="birthdaytime"
        ></v-text-field>

        <v-select
          :items="LugarAtencion"
          label="Lugar de la atención"
        ></v-select>
      </v-card-text>
    </v-card>
  </v-layout>
</template>
<script>
import config from "../../configuraciones.js";
import axios from "axios";

export default {
  components: { config },
  data() {
    return {
      Tipo: ["Foo", "Bar", "Fizz", "Buzz"],
      LugarAtencion: [],
    };
  },

  methods: {
    async getData() {
      const axiosHeaders = {
        headers: {},
        params: {},
      };

      await axios
        .get("./derivados.json", axiosHeaders)
        .then((res) => {
          for (var i in res.data) this.tableData.push(res.data[i]);
          this.loading = false;
        })
        .catch((e) => {
          console.log(e);
          return;
        });
    },
    Left(s, n) {
      if (n > s.length) n = s.length;
      return s.substring(0, n);
    },
    Right(s, n) {
      var t = s.length;
      if (n > t) n = t;
      return s.substring(t - n, t);
    },
    ExtractNumber(value) {
      var n = parseInt(value);
      return n == null || isNaN(n) ? 0 : n;
    },
  },
};
</script>
<style scoped lang="scss">
@import "./configuraciones.scss";
</style>
