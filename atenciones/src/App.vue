<template>
  <v-app>
    <v-navigation-drawer app class="fondito" v-model="drawer" temporary>
      <perfect-scrollbar>
        <v-icon
          small
          style="margin-left: 92%; color: grey"
          @click="drawer = !drawer"
        >
          mdi-close
        </v-icon>

        <v-list>
          <v-card style="background: transparent">
            <v-list-item class="pb-3">
              <v-list-item-avatar>
                <v-img src="@/assets/img/logo.jpg"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Ariel Martin</v-list-item-title>
                <v-list-item-subtitle
                  >ariel2martin@gmail.com</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-list>
        <v-divider></v-divider>
        <v-list nav dense>
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item :href="item.href" :to="{ name: item.href }" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </perfect-scrollbar>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Demo</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    selectedItem: 0,
    items: [
      {
        href: "graficodinamico",

        text: "Gráfico dinámico",
        icon: "mdi-swap-vertical-variant",
      },
      {
        href: "sorteo",

        text: "Grupos de juegos",
        icon: "mdi-tournament",
      },

      {
        href: "tabla",

        text: "Tabla",
        icon: "mdi-form-select",
      },
      {
        href: "asign",

        text: "Aplicar",
        icon: "mdi-shuffle",
      },
      {
        href: "peer",

        text: "Videoconferencia",
        icon: "mdi-video-outline",
      },
      {
        href: "relays",

        text: "IoT relays",
        icon: "mdi-electric-switch",
      },
    ],
  }),
};
</script>
<style scoped>
.fondito:before {
  overflow: hidden;
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  opacity: 0.3;
  background-image: url("assets/img/green-leaf.png");
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
}

.ps {
  height: inherit;
}
</style>
