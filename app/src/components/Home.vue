<template>
  <div class="page page--home">
    <a href="https://vuewordpress.com">
      <img src="https://res.cloudinary.com/evanagee/image/upload/c_scale,w_700/v1580244758/VueWP/VWP-hero.png" />
    </a>
    <h1 class="mt-6">Welcome!</h1>
    <p>
      You'll probably want to remove all of this stuff, but hey it at least it works!
    </p>
    <p>If you'd like to edit the contents of this page take a look at <code>src/components/Home.vue</code></p>
    <p class="mb-10">
      ~
      <a href="https://evanagee.com/">Evan Agee</a>
    </p>
    <recent-posts-widget limit="5" class="mb-10">Recent Posts</recent-posts-widget>
    <pages-widget limit="5">Pages</pages-widget>

<h2>Vuetify</h2>
 <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn text>Share</v-btn>

      <v-btn
        color="purple"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>



  </div>
</template>

<script>
import RecentPostsWidget from './widgets/RecentPosts.vue';
import PagesWidget from './widgets/Pages.vue';

export default {
  components: {
    RecentPostsWidget,
    PagesWidget,
  },
};
</script>

<style type="postcss"></style>
