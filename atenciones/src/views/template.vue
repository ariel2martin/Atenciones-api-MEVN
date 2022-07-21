<template>
  <v-container>
    <v-row no-gutters>
      <v-col class="mx-0 mb-3">
        <v-banner color="secondary" class="text-center">123</v-banner>
      </v-col>
      <v-divider class="mx-4" vertical></v-divider>
      <v-col class="mx-0 mb-3">
        <v-banner color="secondary" class="text-center">456</v-banner>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ABadge from "@/components/ABadge.vue";
import config from "../../configuraciones.js";
import axios from "axios";
export default {
  components: { ABadge, config },
  data() {
    return {
      elSwitch: true,
      result: [{ name: "agua" }],

      tableData: [],
    };
  },

  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
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
