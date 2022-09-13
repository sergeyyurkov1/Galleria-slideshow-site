import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => ({
    nextLink: "https://api.artsy.net/api/artworks?total_count=1",
    data: [],
    token: "",
    n: 1,
  }),

  getters: {
    splitData(state) {
      const dataCopy = [...state.data];

      let newData = [];
      for (let i = state.n; i > 0; i--) {
        newData.push(dataCopy.splice(0, Math.ceil(dataCopy.length / i)));
      }
      return newData;
    },
  },

  actions: {
    setToken(token) {
      this.token = token;
    },
    putData(data) {
      this.data.push(...data);
    },
    setNextLink(nextLink) {
      this.nextLink = nextLink;
    },
    setN(n) {
      this.n = n;
    },
  },
});
