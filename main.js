const app = Vue.createApp({
  data: function () {
    return {
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      inventory: 0,
      inStock: false,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
      cart: 0,
    };
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
