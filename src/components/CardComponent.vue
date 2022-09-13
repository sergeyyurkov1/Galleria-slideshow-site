<template>
  <q-card square flat class="my-card tw-mt-8">
    <q-img :src="src">
      <div
        class="!tw-bg-black !tw-bg-opacity-30 absolute-full text-subtitle2 flex flex-center tw-flex-col tw-justify-end tw-items-start"
      >
        <div class="tw-m-4">
          <p
            class="tw-text-lg sm:tw-text-xl md:tw-text-xl tw-font-bold ellipsis-3-lines"
          >
            {{ title }}
          </p>
          <p class="tw-text-sm tw-font-thin tw-text-gray-200">{{ date }}</p>
        </div>
      </div>
    </q-img>
  </q-card>
</template>

<script>
export default {
  props: ["src", "title", "date"],
  name: "CardComponent",
};
</script>
