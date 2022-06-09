<template>
  <div class="phone-viewport sticky-footer-bar">
    <md-bottom-bar class="md-accent" md-sync-route md-theme="bottom-bar-teal">
      <md-bottom-bar-item to="/components/bottom-bar/posts/1" v-for="(icon, index) in icons" :key="index" :md-label="icon.label" :md-icon="icon.icon" @click="updateCounter(icon.label)">
      </md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>

export default {

  props: {
    icons: Array,
    objectId: Number
  },

  methods: {
    updateCounter: function (counter) {
      if (this.objectId) {
        this.$root.$children[0].updateCounter(counter, this.objectId)
      }
    }
  }
}
</script>