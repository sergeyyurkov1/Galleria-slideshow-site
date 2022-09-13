<template>
  <q-layout
    view="hHh lpR fFf"
    container
    class="tw-h-screen tw-m-auto tw-max-w-[1920px]"
  >
    <q-header
      reveal
      class="tw-mx-4 bg-primary text-white !tw-bg-white tw-h-20 tw-border-b-2"
    >
      <q-toolbar class="tw-p-0 tw-h-full tw-w-full">
        <q-toolbar-title
          class="tw-text-black tw-font-bold tw-text-2xl sm:tw-text-4xl"
          >galleria.</q-toolbar-title
        >

        <q-btn
          square
          class="tw-text-gray-500"
          flat
          dense
          @click.prevent="startStopSlideshow"
          >{{
            this.slideshow === false ? "Start Slideshow" : "Stop Slideshow"
          }}</q-btn
        >
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- <router-view v-if="slideshow" v-slot="{ Component }">
        <transition>
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
      <router-view v-else></router-view> -->
      <!-- <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view> -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  created() {
    if (this.slideshow === false) this.$router.replace({ path: "/" });
  },
  methods: {
    startStopSlideshow: function () {
      if (this.slideshow === false) this.$router.replace({ path: "/s" });
      if (this.slideshow === true) this.$router.replace({ path: "/" });
      this.slideshow = !this.slideshow;
    },
  },
  data() {
    return {
      slideshow: false,
    };
  },
};
</script>
