import { defineStore } from "pinia";

export const useNavStore = defineStore({
  id: "navbar",
  state: () => ({
    isNavBodyOpen1: false,
    isNavBodyOpen2: false,
  }),

  actions: {
    toggleNavBody1() {
      this.isNavBodyOpen2 = false;
      this.isNavBodyOpen1 = !this.isNavBodyOpen1;
    },

    toggleNavBody2() {
      this.isNavBodyOpen1 = false;
      this.isNavBodyOpen2 = !this.isNavBodyOpen2;
    },
  },
});
