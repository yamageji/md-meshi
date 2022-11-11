<script lang="ts" setup>
type Props = {
  ogpTitle: string;
  image: string;
};
const props = defineProps<Props>();
</script>

<template>
  <cld-image public-id="ogp/base.jpg">
    <cld-transformation
      color="#44403C"
      :overlay="{
        fontFamily: 'Noto Sans JP',
        fontSize: 64,
        textAlign: 'left',
        text: props.ogpTitle,
      }"
    />
    <cld-transformation
      flags="layer_apply"
      gravity="north_west"
      x="612"
      y="110"
    />
    <cld-transformation :overlay="props.image" />
    <cld-transformation radius="29" />
    <cld-transformation
      flags="layer_apply"
      gravity="north_west"
      x="65"
      y="65"
    />
  </cld-image>
</template>
