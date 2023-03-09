<script setup lang="ts">
type Props = {
  pageTitle?: string;
  pageDescription?: string;
  pageImage?: string;
  pagePath?: string;
};

const props = defineProps<Props>();

const { siteTitle, siteDescription, siteUrl, siteLocale, siteType, siteIcon } =
  useConstants;

const title = props.pageTitle ? `${props.pageTitle} | ${siteTitle}` : siteTitle;
const description = props.pageDescription
  ? props.pageDescription
  : siteDescription;
const url = props.pagePath ? `${siteUrl}${props.pagePath}` : siteUrl;

const imgUrl = props.pageImage ? props.pageImage : `${siteUrl}/og-image.png`;
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta property="og:title" :content="title" />

    <Meta name="description" :content="description" />
    <Meta property="og:description" :content="description" />

    <link rel="canonical" :href="url" />
    <Meta property="og:url" :content="url" />

    <Meta property="og:site_name" :content="siteTitle" />
    <Meta property="og:type" :content="siteType" />
    <Meta property="og:locale" :content="siteLocale" />

    <link rel="icon" :href="siteIcon" />
    <link rel="apple-touch-icon" :href="siteIcon" />

    <Meta property="og:image" :content="imgUrl" />
    <Meta name="twitter:card" content="summary_large_image" />
  </Head>
</template>
