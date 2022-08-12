<script lang="ts" setup>
type Props = {
  iconName: string;
  iconId?: number;
  width?: number;
  height?: number;
  iconColor?: string;
};
const props = withDefaults(defineProps<Props>(), {
  iconId: 0,
  width: 20,
  height: 20,
  iconColor: 'currentColor',
});

const computedIconId = computed((): string => {
  return props.iconId
    ? `${props.iconName}_${props.iconId}`
    : `${props.iconName}`;
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    x="0px"
    y="0px"
    viewBox="0 0 20 20"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="computedIconId" lang="ja">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
}
</style>
