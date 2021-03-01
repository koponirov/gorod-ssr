<template>
  <div class="wrapper">
    <img :src="iconPath"  class="img" />
  </div>


</template>

<script>
export default {
  name: 'svg-icon',

  props: {
    name: {
      type: String,
      required: true
    },

    width: {
      type: String,
    },
    height: {
      type: String,
    },
    id: {
      type: String,
    },
    circleColor: {
      type: String,
    }


  },

  computed: {
    iconPath() {
      let icon
      return  icon = require(`~/assets/icons/flags/${this.name}.svg`);



      // if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
      //   icon = icon.default;
      // }
      // return icon.url;
    },

    className() {
      return 'svg-icon svg-icon--' + this.name;
    }
  }
};
</script>

<style lang="scss" scoped>
  div {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    img.img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 100px; /* Радиус скругления */
      box-shadow: 0 0 0 5px #21202F, 0 0 13px #333; /* Параметры теней */
      transition: box-shadow 50ms ease-in-out;
    }

  }

  .svg-icon {
    /* fill: currentColor; */
    height: 24px;
    width: 24px;
  }
</style>
