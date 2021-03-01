<template lang="pug">
  modal.watcher-modal-overlay(v-if="idx>=0" @close="closeModal" :showHeader="false" :st="{width:'730px', background: '#2e303f', height: '270px', borderRadius: '5px', overflow: 'hidden'}")
    .watcher-modal-inner
      .wrapper-info-block(v-if="items[idx][number].default")
        .info-block
          .department-avatar-wrapper
            //img(:src="`/files/committee-img/support_big.jpg`" )
            img(:src="require(`@/assets/img/committee-img/support_big.jpg`)" )
            .online
              img.online-img(:src="require(`~/assets/icons/flags/online.svg`)" )
          .info
            .name-container
              p.name {{ $t('department') }}
        p.application {{ $t('defaultModalText') }}
      .info-block(v-else)
        .avatar-wrapper
          //img(:src="`/files/committee-img/${items[idx][number].img}_big.jpg`")
          img(:src="require(`@/assets/img/committee-img/${items[idx][number].img}_big.jpg`)")
          .flag
            img.flag-img(:src="iconPath" v-if="items[idx][number].country")
            //svg-round-icon(v-if="items[idx][number].country" :name='items[idx][number].country' :id="idx+'pc'" width="50" height="50" circleColor="2E303F")
        .info
          .name-container
            p.name {{ items[idx][number].name }}
            p.country(v-if="items[idx][number].country") {{ $t(items[idx][number].country) }}

      a.contact(v-if="items[idx][number].te" :href="items[idx][number].te" target="_blank")
        svg-icon(name='telegram' class="social-icon")
        p Telegram
      a.contact(v-if="items[idx][number].fb" :href="items[idx][number].fb" target="_blank")
        svg-icon(name='fb_big' class="social-icon")
        p Facebook
      a.contact(v-if="items[idx][number].vk" :href="items[idx][number].vk" target="_blank")
        svg-icon(name='vk_big' class="social-icon")
        p VKontakte
      a.contact(v-if="items[idx][number].lin" :href="items[idx][number].lin" target="_blank")
        svg-icon(name='lin' class="social-icon")
        p LinkedIn
      a.contact(v-if="items[idx][number].tw" :href="items[idx][number].tw" target="_blank")
        svg-icon(name='twitter' class="social-icon")
        p Twitter
      a.contact(v-if="items[idx][number].inst" :href="items[idx][number].inst" target="_blank")
        svg-icon(name='inst_big' class="social-icon")
        p Instagram
      a.contact(v-if="items[idx][number].wa" :href="items[idx][number].wa" target="_blank")
        svg-icon(name='whatsapp' class="social-icon")
        p Whatsapp
</template>

<script>
import Modal from "@/components/Modal";
import SvgIcon from './SvgIcon';
import SvgRoundIcon from './SvgRoundIcon';
export default {
  name: "WatcherModalCard",
  components: {
    Modal,
    SvgIcon,
    SvgRoundIcon,
  },
  props: ['items', 'idx', 'number'],
  computed: {
    iconPath() {
      let icon
      return icon = require(`~/assets/icons/flags/${this.items[this.idx][this.number].country}.svg`);
    },
  },
  methods: {
    closeModal() {
      this.$emit('close-modal',  -1);
    }
  },
}
</script>

<style scoped lang="scss">
.watcher-modal-overlay {
  .watcher-modal-inner {
    position: absolute;
    top: 0;
    width: 100%;
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .application {
      padding: 20px 60px 0 40px;
      margin-bottom: 0;
      font-weight: 300;
      font-size: 17px;
      line-height: 20px;
      letter-spacing: -0.05em;
      color: #C7CBDE;
    }

    .info-block {
      display: flex;
      margin-left: 40px;

      img {
        border-radius: 50%;
        display: block;
        margin: 0 auto;
        height: 100%;
        width: 100%;
        z-index: 10;
        object-fit: cover;
      }

      .avatar-wrapper {
        position: relative;
        width: 170px;
        height: 170px;




        .flag {
          position: absolute;
          bottom: 10px;
          right: -12px;
          width: 40px;
          height: 40px;
          border-radius: 50%;

          .flag-img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 100px;
            box-shadow: 0 0 0 8px rgb(46, 48, 63), 0 0 13px #333;
          }
        }
      }

      .department-avatar-wrapper {
        position: relative;
        width: 140px;
        height: 140px;

        .online {
          position: absolute;
          bottom: 10px;
          right: -8px;
          width: 25px;
          height: 25px;
          border-radius: 50%;

          .online-img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 100px;
            box-shadow: 0 0 0 5px rgb(46, 48, 63), 0 0 13px #333;
          }
        }



      }
      .info {
        margin-left: 25px;
        display: flex;
        align-items: center;

        .name-container {
          position: relative;
          text-align: left;
          width: 150px;

          .name {
            font-size: 24px;
            overflow-wrap: break-word;
            width: min-content;
          }

          .country {
            position: absolute;
            font-weight: 300;
            font-size: 18px;
            line-height: 18px;
            text-align: center;
            letter-spacing: -0.05em;
            color: #C7CBDE;
            top: 80px
          }
        }
      }
    }

    .contact {
      display: flex;
      min-width: 270px;
      height: 270px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(52, 125, 254, 0.5);

      .social-icon {
        height: 70px;
        width: 70px;
      }

      p {
        margin-top: 9px;
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;

        color: #FFFFFF;
      }
    }
  }
}
</style>
