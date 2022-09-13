<template>
  <q-page>
    <!-- class="tw-px-3 tw-m-1 tw-absolute tw-inset-0" -->
    <q-infinite-scroll
      @load="getData"
      debounce="1000"
      class="tw-px-[13px] tw-m-1 tw-mt-0"
    >
      <div class="tw-flex tw-mb-8 tw-gap-8">
        <template v-for="(i, ii) in store.splitData" :key="ii">
          <div
            class="tw-flex-[1_1_100%] sm:tw-flex-[1_1_50%] md:tw-flex-[1_1_25%]"
          >
            <template v-for="(j, jj) in i" :key="jj">
              <CardComponent
                :src="j._links.thumbnail.href"
                :title="j.title"
                :date="j.date"
              />
            </template>
          </div>
        </template>
      </div>
      <template v-slot:loading>
        <div class="row justify-center q-my-md tw-mb-8">
          <q-spinner-ios color="black" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </q-page>
</template>

<script>
import { useDataStore } from "src/stores/data.js";

import CardComponent from "src/components/CardComponent.vue";

export default {
  name: "IndexPage",
  components: { CardComponent },
  setup() {
    const store = useDataStore();
    return { store };
  },
  methods: {
    getToken: async function () {
      const r = await this.$axios.post(
        "https://api.artsy.net/api/tokens/xapp_token?client_id=c465d92811cda139c009&client_secret=3341781ff826d2774819b16dc491c954"
      );
      this.store.setToken(r.data.token);
    },
    getData: async function (index, done) {
      if (this.store.token === "") {
        await this.getToken();
      }

      const artworks = await this.$axios.get(this.store.nextLink, {
        headers: {
          "X-XAPP-Token": this.store.token,
        },
      });
      this.store.putData(artworks.data._embedded.artworks);
      this.store.setNextLink(artworks.data._links.next.href);

      done();
    },
  },
  watch: {
    n: {
      handler(val) {
        this.store.n = val;
      },
      immediate: true,
    },
  },
  computed: {
    n() {
      if (this.$q.screen.lt.sm) {
        return 1;
      } else if (this.$q.screen.sm) {
        return 2;
      } else {
        return 4;
      }
    },
  },
};
</script>
