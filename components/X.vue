<template lang="pug">
  .lazy-image(:class="loaded ? 'loaded' : ''")
    img.lazy-image__to(:src="toLoad", ref="loadedEl", :style="{opacity: loaded ? 1 : 0}")
</template>

<script>
export default {
  name: 'xx',
    data() {
        return {
            loaded: false,
            toLoad: ''
        }
    },
    watch: {
        visible(visible) {
            if (visible && !this.loaded) {
                this.$refs.loadedEl.onload = () => this.loaded = true
                this.toLoad = this.to
            }
        }
    },
    props: {
        to: {
            type: String,
            required: true,
        },
        visible: {
            type: Boolean,
            default: () => false
        }
    }
}
</script>

<style lang="scss">
.lazy-image__to {
    opacity: 0;
    transition: opacity .4s ease-in;
}
.lazy-image.loaded .lazy-image__to {
    opacity: 1;
}
.lazy-image.loaded .lazy-image__from {
    opacity: 0;
}
</style>
