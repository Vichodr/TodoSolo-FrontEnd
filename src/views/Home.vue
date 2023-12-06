<template>
  <div style="padding-top: 100px">
    <CardContainer containerTitle="Lo mas popular" :cards="featuredProducts" />
    <CardContainer containerTitle="Echale un vistazo" :cards="LookUp"/>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import CardContainer from "../components/CardContainer.vue";

export default {
  components: {
    Card,
    CardContainer,
  },
  data() {
    return {
      featuredProducts: [
        {
          imageUrl:
            "https://res.cloudinary.com/djx6viedj/image/upload/t_trimmed_square_512/q86muhxyl5ghxrb3mltmugzzhcfh",
          title: "CPU Intel® Core I5-10400",
        },
        {
          imageUrl:
            "https://res.cloudinary.com/djx6viedj/image/upload/t_trimmed_square_512/mkxaflsukbofpk79lbcv2iv9gg2y",
          title: "Monitor LG 27MP400 FHD 27",
        },
        {
          imageUrl:
            "https://res.cloudinary.com/djx6viedj/image/upload/t_trimmed_square_512/elskam5g68o08m6x8a4jnnhwbuy2",
          title: "Notebook Lenovo V14 G2 I5-1135G7",
        },
        {
          imageUrl:
            "https://res.cloudinary.com/djx6viedj/image/upload/t_trimmed_square_512/z6okin87v8p939f8esdrhfd4w4ul",
          title: "Computador Lenovo ThinkCentre M80s",
        },
        {
          imageUrl:
            "https://res.cloudinary.com/djx6viedj/image/upload/t_trimmed_square_512/6784qmh11bld396mum07kh77gvmf",
          title: "Smartphone Motorola G14",
        },
      ],
      LookUp: [
        {
          imageUrl:
            "https://megadrivestore.cl/896-large_default/amd-ryzen-5-5600g-39-ghz-6-nucleos-12-hilos-16-mb-de-cache-socket-am4.jpg",
          title: "AMD RYZEN 5 5600G",
        },
        {
          imageUrl:
            "https://sipoonline.cl/wp-content/uploads/2023/09/AMD-Ryzen-5-5500-100-100000457BOX.png",
          title: "AMD RYZEN 5 5500",
        },
        {
          imageUrl:
            "https://media.spdigital.cl/thumbnails/products/o1rjkwxk_6d597d0b_thumbnail_512.jpg",
          title: "MEMORIA DDR4 8GB KINGSTON KINGSTON FURY BEAST 3200MHZ",
        },
        {
          imageUrl:
            "https://asset.msi.com/resize/image/global/product/product_10_20200818095729_5f3b3589ae480.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
          title: "PLACA MADRE MSI A520M-A PRO",
        },
        {
          imageUrl:
            "https://resource.logitechg.com/d_transparent.gif/content/dam/gaming/en/non-braid/hyjal-g502-hero/g502-hero-gallery-1-nb.png",
          title: "MOUSE GAMER LOGITECH USB G502 HERO",
        },
      ],
    };
  },
};
</script>

<style>
body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
}
</style>
