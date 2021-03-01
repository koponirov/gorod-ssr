<template>
  <img :src="iconPath" :alt="name"/>
</template>

<script>
export default {
  name: 'svg-icon',

  props: {
    name: { type: String, default: "image" },

    title: {
      type: String,
      default: null
    },

    f: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    iconPath() {
      let icon
      if (this.f) icon = require(`~/assets/icons/flags/${this.name}.svg`);
      else icon = require(`~/assets/icons/${this.name}.svg`);

      return icon
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

<style>
  .svg-icon {
    /* fill: currentColor; */
    height: 24px;
    width: 24px;
  }
</style>
