import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    isLoggedIn: true
  }),

  actions: {
    logAction() {
      this.isLoggedIn = !this.isLoggedIn;
    },
    userIsAdmin() {
      this.user = "admin";
    },
    userIsStudent() {
      this.user = "student";
    },
  },
});
