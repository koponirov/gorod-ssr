<template lang="pug">

    .watcher-block(@click="changeIdx" :key="index+'cw'" )
      //фэйковые наблюдатели
      .watcher-img-wrapper(v-if="item.default")
        //img.watcher-preview-img(:src="`/files/committee-img/${item.img}.svg`" alt="item.img")
        img.watcher-preview-img(:src="require(`@/assets/img/committee-img/${item.img}.svg`)" alt="item.img")

      //настоящие наблюдателм
      .watcher-img-wrapper(v-else)
        img.watcher-preview-img(:src="require(`@/assets/img/committee-img/${item.img}.jpg`)" alt="item.img")
        div.flag(v-if="item.country" :name='item.country' :id="index+'cw'" width="25" height="25" circle-color="21202F")
          img.flag-img(:src="iconPath")

      .watcher-info
        p.watcher-title(v-html="item.name")

</template>

<script>

export default {
  name: "WhatcherCard",
  props: ["item", "index", "number"],
  computed: {
    iconPath() {
      let icon
      return icon = require(`~/assets/icons/flags/${this.item.country}.svg`);
    },
  },
  methods: {
    changeIdx() {
      this.$emit('change-idx', {index: this.index, number: this.number});
    }
  },
}
</script>

<style scoped lang="scss">
.watcher-block {
  margin-bottom: 8px;
  width: 135px;
  height: 135px;
  border-radius: 5px;
  background: rgba(46, 48, 63, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background-color 50ms ease-in-out;
  cursor: pointer;

  .watcher-img-wrapper {
    width: 79px;
    height: 79px;
    margin: 5px auto;
    position: relative;

    .watcher-preview-img {
      border-radius: 50%;
      display: block;
      margin: 0 auto;
      height: 100%;
      width: 100%;
      z-index: 10;
      object-fit: cover;
    }

    .flag {
      position: absolute;
      right: -10px;
      bottom: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;

      .flag-img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 100px; /* Радиус скругления */
        box-shadow: 0 0 0 5px #21202F, 0 0 13px #333; /* Параметры теней */
        transition: box-shadow 50ms ease-in-out;
      }

    }
  }

  .watcher-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      max-width: 80%;
    }

    .watcher-title {
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      letter-spacing: -0.05em;
      margin-bottom: 10px;
      text-align: center;
    }

    .watcher-crop-desc {
      text-align: center;
      font-weight: 300;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: -0.05em;
      color: #C7CBDE;
      margin: 5px 0 27px 0;
    }

    .watcher-link {
      font-weight: 300;
      font-size: 15px;
      line-height: 18px;
      letter-spacing: -0.05em;
      color: #347DFE;
    }

    .news-full-desc {
      display: none;
    }
  }
}

.watcher-block:hover {
  background-color: #2f303f;
  .watcher-img-wrapper {
    .flag {

        .flag-img {

          box-shadow: 0 0 0 5px #2f303f, 0 0 13px #333; /* Параметры теней */
        }



    }
  }
}

</style>
