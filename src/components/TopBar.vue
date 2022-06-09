<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-dense md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button @click="menuIcon === 'close' ? closeSheet() : showNavigation = true" class="md-icon-button">
            <md-icon>{{ menuIcon }}</md-icon>
          </md-button>
          <h2>
            {{ menuTitle }}
          </h2>
        </div>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>{{ iconRightFirst }}</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>{{ iconRightSecond }}</md-icon>
          </md-button>
        </div>
      </div>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">MemeIt</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>home</md-icon>
          <span class="md-list-item-text">Home</span>
        </md-list-item>

        <md-list-item>
          <md-icon>chat</md-icon>
          <span class="md-list-item-text">Chat</span>
        </md-list-item>

        <md-list-item>
          <md-icon>person</md-icon>
          <span class="md-list-item-text">Account</span>
        </md-list-item>
      </md-list>
    </md-drawer>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showNavigation: false
    }
  },

  props: {
    menuIcon: String,
    menuTitle: String,
    iconRightFirst: String,
    iconRightSecond: String
  },

  methods: {
    closeSheet: function () {
      this.$root.$children[0].closeSheet()
    }
  }
}
</script>