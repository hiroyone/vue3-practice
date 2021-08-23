const app = Vue.createApp({
  data: function () {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart: function (id) {
      this.cart.push(id);
    },
  },
});
