<template>
  <q-page>
    <div class="tw-absolute tw-inset-0">
      <!-- v-model:fullscreen="fullscreen" -->
      <q-carousel
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        v-model="slide"
        :autoplay="14800"
        ref="carousel"
        infinite
        padding
        @before-transition="
          () => {
            this.resetProgress();
          }
        "
        class="tw-w-full tw-h-full tw-py-8"
      >
        <template v-slot:default>
          <q-carousel-slide v-for="(d, i) in store.data" :name="i" :key="i">
            <div
              class="tw-bg-gray-100 tw-flex tw-flex-col md:tw-flex-row tw-h-full tw-justify-between"
            >
              <div class="tw-relative tw-w-full tw-h-full">
                <q-img
                  fit="contain"
                  class="tw-w-full tw-h-full"
                  :src="d._links.thumbnail.href"
                />
              </div>
            </div>
          </q-carousel-slide>
        </template>

        <!-- !!! animation-speed: 50000 = 15s !!! -->
        <template v-slot:control>
          <q-linear-progress
            :key="key"
            :value="progress"
            color="black"
            animation-speed="50000"
            class="tw-z-20 tw-h-[2px] tw-absolute tw-bottom-[78px] tw-left-0"
          />

          <q-carousel-control
            position="bottom"
            class="tw-bg-white tw-z-10 !tw-m-0 tw-h-[80px] q-gutter-xs tw-w-full tw-flex tw-justify-between tw-items-center"
          >
            <div class="tw-ml-4 tw-w-fit tw-m-0">
              <p
                class="tw-text-black tw-font-bold tw-text-lg md:tw-text-xl tw-overflow-ellipsis tw-max-w-[calc(100vw-160px)] tw-overflow-x-hidden tw-whitespace-nowrap"
              >
                {{ store.data[slide].title }}
              </p>
              <p class="tw-text-gray-900 tw-font-thin tw-text-sm">
                {{ store.data[slide].date }}
              </p>
            </div>
            <div
              class="tw-w-[160px] tw-mr-4 tw-h-fit tw-m-0 tw-flex tw-flex-row tw-justify-end tw-align-middle"
            >
              <!-- <q-btn
                class="tw-mx-4 no-shadow"
                square
                dense
                color="black"
                text-color="white"
                :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="
                  () => {
                    fullscreen = !fullscreen;
                  }
                "
              /> -->
              <q-btn
                square
                dense
                flat
                text-color="black"
                icon="skip_previous"
                @click="$refs.carousel.previous()"
              />
              <q-btn
                square
                dense
                flat
                text-color="black"
                icon="skip_next"
                @click="$refs.carousel.next()"
              />
            </div>
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

import { useDataStore } from "src/stores/data.js";

export default {
  components: {},
  setup() {
    const store = useDataStore();

    const progress = ref(0);

    let interval;

    return {
      store,
      slide: ref(0),
      progress,
      interval,
      // fullscreen: ref(false),
    };
  },
  methods: {
    resetProgress: function () {
      this.key += 1;

      this.progress = 0;
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        if (this.progress >= 1) {
          clearInterval(this.interval);
        }
        this.progress = this.progress + 1;
      }, 1);
    },
  },
  mounted() {
    this.resetProgress();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  data() {
    return {
      key: 1,
    };
  },
};
</script>

<style lang="scss">
.q-carousel__slide {
  padding-top: 0;
  // padding-right: 0;
  padding-bottom: 80px;
  // padding-left: 0;
}
</style>
