<template>
  <div>
<!-- leaving hide-on-scroll for the moment at least, because it disturbs link targeting to take out...   -->
    <v-app-bar app dark color="dark-blue" :hide-on-scroll="hideWhen">
<!--      <v-toolbar-items max-width>-->

      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon class="hidden-sg-and-up" @click="sidebar = !sidebar" color="blue">
        </v-app-bar-nav-icon>
      </span>
<!--      <v-img src="/resources/image/combatcovid.png" max-width="50px"></v-img>-->
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          <span class="bar-title">{{ $static.metadata.siteName }}</span>
        </router-link>
      </v-toolbar-title>
<!--      <v-spacer></v-spacer>-->

      <v-list class="hidden-sm-and-down"
                       v-for="(item, key) in items"
                       :key="item.label">
          <v-btn text :color="item.color" :class="item.class" exact :to="item.name">{{item.label}}</v-btn>
      </v-list>
      <v-spacer></v-spacer>

      <v-menu
              left
              bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" color="yellow">
            <v-icon>{{ extrasIcon }}</v-icon>
          </v-btn>
        </template>
      </v-menu>

    </v-app-bar>
    <v-navigation-drawer appf v-model="sidebar" temporary absolute width="200" id="drawer">
      <v-list dense nav>
        <div
                v-for="item in items"
                :key="item.name"
        >
          <v-btn text exact :to="item.name">{{item.label}}</v-btn>
        </div>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<static-query>
  query{
    metadata{
      siteName
    }
  }
</static-query>

<script>

  import { mdiDotsVertical, mdiDotsHorizontal } from '@mdi/js'
  import BookmarksMenu from './BookmarksMenu';

  export default {
    name: "Nav",
    components: { BookmarksMenu },
    data: function () {
      return {
        sidebar: false,
        choicesBar: false,
        ccwhIcon: '/resources/images/combatcovid.png',
        extrasIcon: mdiDotsVertical,
        designIcon: mdiDotsHorizontal,
        items: [
          {name: '/', label: 'Home', color: 'teal', class: 'spaced-btn'},
          {name: '/finder', label: 'Finder', color: 'blue', class: 'soft-antwerp-light'},
          {name: '/viewer', label: 'Viewer', color: 'blue', class: 'soft-antwerp-light' },
          {name: '/documentation', label: 'Documentation', color: 'teal', class: 'spaced-btn'},
          {name: '/about', label: 'About', color: 'teal', class: 'spaced-btn'}
        ]
      }
    },
    computed: {
      hideWhen: function () {
        if (typeof window !== 'undefined') {
          const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
          return w <= 640
        } else {
          return false
        }
      }
    }
  }
</script>

<style scoped>
  a {
    color: white;
    text-decoration: none;
  }

  a:visited {
    color: white;
  }

  /* a:active{
    background:red;
  } */

  .bar-title {
    font-size: small;
    padding: 0 1em;
  }
  .below-bar {
    margin-top: 60px;
    padding: 10px;
    background-color: white;
  }
  .our-bar {
    width: 100%;
  }
  .v-toolbar.v-toolbar--absolute {width: auto !important;}

  .v-toolbar__content, .v-toolbar__extension {
    padding: 0 !important;
  }
  .momento {
    background-color: white;
    height: 400px;
    padding: 10px;
  }
  .momento-text {
    text-align: center;
    vertical-align: center;
  }
  .spaced-btn {
    margin: 0 2px;
  }
  .soft-antwerp-light {
    color: #2b8cb4 !important;
    margin: 2px;
  }
</style>
