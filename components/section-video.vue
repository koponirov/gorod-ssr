<template lang="pug">
section.video
  //- h2.title(v-html="$t('Презентация проекта за 3 минуты')")
  .container
    .about
      h1(v-html="$t('gorodTitle')")
      p(v-html="$t('gorodDescription')")

    button.button(@click="play = true")
      svg-icon.play-btn(name="play")

  youtube-player(
    v-if="play",
    v-bind:videoId="urlYoutube",
    @close="play = false"
  )
</template>


<script>
import SvgIcon from "./SvgIcon";
import YoutubePlayer from "./YoutubePlayer";

export default {
  components: {
    SvgIcon,
    YoutubePlayer,
  },
  data() {
    return {
      play: false,
      lang:"en",
    };
  },
  beforeCreate() {

  },


  computed: {
    urlYoutube() {
      return this.lang === "ru" ? "EPTQxTYwkdI" : "sx_HF_-5vHs";
    },
  },
};
</script>

<style scoped lang="scss">
  .video {
    overflow: hidden;
    margin-bottom: 0;
    position: relative;
    background-image: url("../assets/img/video/poster-gorod-2-1440.jpg");
    background-position: 0 50%;
    background-size: cover;
    width: 100vw;
    min-width: 300px;

    @media (max-width: 480px) and (orientation: portrait) {
      background-image: url("../assets/img/video/poster-gorod-2-768.jpg");
      height: 100vh;
    }


    .container {
      display: flex;
      position: relative;
      min-height: 700px;

      @media (max-width: 480px) {
        height: 100vh;
        min-width: 300px;
        width: 100vw;
        padding: 0 20px;
        margin: 0;
        flex-direction: column;
      }
    }

    .about {
      width: 40%;
      // height: 100%;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (max-width: 480px) and (orientation: portrait) {
        width: 100%;
        height: 90%;
      }
    }

    // Градиент для фона
    &:after {
      content: "";
      position: absolute;
      top: -16%;
      left: -75%;
      width: 400%;
      height: 207%;
      background: radial-gradient(at 34% 30%, transparent -6%, #1b1a28 22%);
      pointer-events: none;
    }

    button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(0%, -50%);
      margin: 0;
      display: block;
      width: 100px;
      height: 100px;
      padding: 0;
      background: #25417c;
      border: 1px solid #347dfe;
      border-radius: 50%;
      cursor: pointer;
      z-index: 1;

      @media (max-width: 480px) and (orientation: portrait) {
        top: 70%;
        transform: translate(-50%, 0%);
      }

      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        width: calc(100% - 10px);
        height: calc(100% - 10px);
        background: #347dfe;
        border-radius: 50%;
        transition: all 0.2s;
      }

      &:hover:before {
        opacity: 1;
        transition: all 0.2s;
      }
    }

    svg.play-btn {
      position: relative;
      top: 2px;
      left: -4px;
      width: 60%;
      height: 60%;
      color: #fff;
    }
  }
</style>
