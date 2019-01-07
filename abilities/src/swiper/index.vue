<template>
  <div class="">
    <swiper :id="id" :title="title" :options="swiperOptionProps ? swiperOptionProps : swiperOption" class="swiper" :class="specialClass" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide v-for="(slide, index) in slides">
        <div>
          <img v-if="slide.img" slot="img" :src="slide.img.src" :alt="slide.img.alternative" :title="slide.img.title" />
          <p v-if="slide.text" v-bind:class="{ 'swiper-slide-caption': slide.img }">{{slide.text}}</p>
        </div>
      </swiper-slide>

      <!-- Optional controls -->
      <div v-if="swiperOption.pagination || (swiperOptionProps && swiperOptionProps.pagination)" class="swiper-pagination"  slot="pagination"></div>
      <div v-if="swiperOption.navigation || (swiperOptionProps && swiperOptionProps.navigation)" class="swiper-button-prev" slot="button-prev"></div>
      <div v-if="swiperOption.navigation || (swiperOptionProps && swiperOptionProps.navigation)" class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script src="./swiper.component.js"></script>
<style src="./swiper.component.scss" lang="scss"></style>

