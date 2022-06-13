<template>
  <div id="app">
    <div v-if="offline">
      Je bent offline
    </div>
    <top-bar
    :menu-icon="'menu'"
    :menu-title="'Home'"
    :icon-right-first="'search'"
    :icon-right-second="'more_vert'"
    ></top-bar>
    <md-tabs class="md-transparent" md-alignment="fixed">
      <md-tab @click="selected = 'memes'" id="tab-home" md-label="Memes"></md-tab>
      <md-tab @click="selected = 'fails'" id="tab-pages" md-label="Fails"></md-tab>
      <md-tab @click="selected = 'tweets'" id="tab-posts" md-label="Tweets"></md-tab>
    </md-tabs>
    <div class="c-image__masonry">
      <template v-for="(object, index) in objects.data">
        <md-card v-if="object.type === selected || selected === ''" :key="index">
          <md-card-media-cover>
            <md-card-media>
              <img v-on:click="openSheet(object)" v-if="object.imageUrl" :src="object.imageUrl" />
              <p>
                Likes: {{ object.likes }}
              </p>
              <p>
                Dislikes: {{ object.dislikes }}
              </p>
            </md-card-media>
          </md-card-media-cover>
        </md-card>
      </template>
    </div>
    <div class="c-sheet" :class="{'active': selectedObject.name}">
      <top-bar
          :menu-icon="'close'"
          :menu-title="selectedObject.name"
          :icon-right-first="'share'"
          :icon-right-second="'more_vert'"
      ></top-bar>
      <img :src="selectedObject.imageUrl" />
    </div>
    <footer-tabs
        :icons="opened ? openedIcons : closedIcons"
        :object-id="selectedObject.id"
    ></footer-tabs>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import FooterTabs from "@/components/FooterTabs";
import objects from "../objects.json";

export default {
  name: 'App',

  data() {
    return {
      selected: "",
      objects: objects,
      selectedObject: [],
      opened: false,
      offline: false,
      openedIcons: [
        {
          "icon": "thumb_up",
          "label": "Like"
        },
        {
          "icon": "favorite",
          "label": "Favorite"
        },
        {
          "icon": "thumb_down",
          "label": "Dislike"
        }
      ],
      closedIcons: [
        {
          "icon": "person",
          "label": "Person"
        },
        {
          "icon": "group",
          "label": "Group"
        }
      ]
    }
  },

  components: {
    FooterTabs,
    TopBar
  },

  mounted() {
    /* eslint-disable */
    fetch('https://www.google.com')
    .catch(error => {
      this.offline = true;
    })
  },

  methods: {

    openSheet: function (object) {
      this.opened = true
      this.selectedObject = object
    },

    closeSheet: function () {
      this.opened = false
      this.selectedObject = []
    },

    updateCounter: function (counter, objectId) {
      for (let i = 0; i<this.objects.data.length; i++) {
        if (this.objects.data[i].id === objectId) {
          counter === 'Dislike' ?
              this.objects.data[i].dislikes++ :
              this.objects.data[i].likes++
        }
      }
    }
  }
}
</script>