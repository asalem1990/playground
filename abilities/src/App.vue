<template>
  <div id="app">

    <navbar/>

    <b-container fluid class="blue_backgroud p-0">
      <b-container class="">
        <b-row align-v="center" align-h="center">
          <b-col cols="12">
            <swiper
              :title="carousels.mainSwiper.title"
              :id="carousels.mainSwiper.id"
              :specialClass="carousels.mainSwiper.specialClass"
              :slides="carousels.mainSwiper.slides"
              :swiperOptionProps="carousels.mainSwiper.swiperOption"></swiper>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <b-container fluid class="nobdhah_section p-0">
      <img src="./assets/img/landing_nobdhah_bg.png">
      <b-container class="pt-5 px-0">
        <b-row fluid>
          <b-col cols="12" md="8" offset-md="2" lg="6" offset-lg="3">
            <div class="content">
              <h1 class="display-4" title="نبذة ">نبذة </h1>
              <p>
                لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <b-container fluid class="join_group_section p-sm-5">
      <b-container class="pt-5 px-0 text-right">
        <b-row>
          <b-col cols="12" md="8" offset-md="2">
            <div class="content pt-5">
              <h1 class="display-4 bandage_before" title="انضم الى الحركة">انضم الى الحركة</h1>
              <p>
                لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.
              </p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12"><p class="bandages_separator"></p></b-col>
          <b-col cols="12">
            <swiper
              :title="carousels.joinGroupSwiper.title"
              :id="carousels.joinGroupSwiper.id"
              :specialClass="carousels.joinGroupSwiper.specialClass"
              :slides="carousels.joinGroupSwiper.slides"></swiper>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <b-container fluid class="p-lg-0">
      <b-row>
        <b-col cols="12" sm="6" class="sofraena_section grey_background pt-5 pb-lg-5 pr-lg-5">
          <div class="pt-lg-5 pb-lg-5 pr-lg-5 m-lg-5">
            <h1 class="display-4 bandage_background orange_background mx-lg-5" title="سفرائنا">سفرائنا</h1>
            <p class="grey_font mx-lg-5">
              لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.
            </p>
          </div>
        </b-col>
        <b-col cols="12" sm="6" class="p-0">
          <VideoComponent :videoProps="videoProps.playerOptions"/>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid class="social_media_section p-sm-5">
      <span class="circle_shape"></span>
      <b-container class="pt-5 px-0 text-right">
        <b-row>
          <b-col cols="12" md="8" offset-md="2">
            <h1 class="display-4 bandage_before" title="مواقع التواصل الاجتماعي">مواقع التواصل الاجتماعي</h1>
          </b-col>
        </b-row>

        <b-row fluid>
          <b-col cols="12">
            <SocialFeedsComponent></SocialFeedsComponent>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <b-container fluid class="photo_gallery_section p-sm-5">
      <span class="circle_shape"></span>
      <b-container class="pt-5 px-0 text-right">
        <b-row>
          <b-col cols="12" md="8" offset-md="2">
            <h1 class="display-4 bandage_before" title="معرض الصور">معرض الصور</h1>
          </b-col>
        </b-row>

        <b-row fluid>
          <b-col cols="12"><p class="bandages_separator"></p></b-col>
          <b-col cols="12">
            <swiper
              :title="carousels.photoGallerySwiper.title"
              :id="carousels.photoGallerySwiper.id"
              :specialClass="carousels.photoGallerySwiper.specialClass"
              :slides="carousels.photoGallerySwiper.slides"></swiper>
          </b-col>
        </b-row>
      </b-container>
    </b-container>


    <b-container fluid class="contact_us_section px-sm-0 py-5">
      <b-container class="pt-5 px-0 text-right">
        <b-row fluid>
          <b-col cols="12" md="8" offset-md="2">
            <h1 class="display-4 bandage_before text-white" title="تواصل معنا">تواصل معنا</h1>
          </b-col>
        </b-row>

        <contactUsComponent/>

      </b-container>
    </b-container>


    <footerComponent/>

  </div>
</template>

<script>
import navbar from './navbar/index.vue'
import swiper from "./swiper/index.vue"
import VideoComponent from "./video/index.vue"
import SocialFeedsComponent from "./SocialFeedsComponent/index.vue"
import contactUsComponent from "./contactUsComponent/index.vue"
import footerComponent from "./footer/index.vue"

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      carousels: {
        mainCarousel: {
          id: "mainCarousel",
          title: "Main carousel",
          specialClass: "landing__main__carousel",
          slides: [
            {src: require("./assets/img/runner_1.png"), alternative: "Runner Image", "title": "Runner Image"},
            {src: require("./assets/img/runner_1.png"), alternative: "Runner Image", "title": "Runner Image"},
            {src: require("./assets/img/runner_1.png"), alternative: "Runner Image", "title": "Runner Image"}
          ]
        },
        mainSwiper: {
          id: "mainSwiper",
          title: "Main Swiper",
          specialClass: "landing__main__carousel",
          slides: [
            {img: {src: require("./assets/img/runner_1.png"), alternative: "Runner Image", "title": "Runner Image"}},
            {img: {src: require("./assets/img/runner_1.png"), alternative: "Runner Image", "title": "Runner Image"}},
            {img: {src: require("./assets/img/runner_1.png"), alternative: "Runner Image", "title": "Runner Image"}}
          ],
          swiperOption: {
            slidesPerView: 1,
            spaceBetween: 0,
            // Responsive breakpoints
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: {
              el: '.swiper-pagination'
            }
          }
        },
        joinGroupSwiper: {
          id: "joinGroupSwiper",
          title: "انضم الى الحركة",
          specialClass: "join_group__main__carousel",
          slides: [
            {img: {src: require("./assets/img/join_group_slider-1.png"), alternative: "Runner Image", title: "Runner Image"}, text: "أبجد هوز"},
            {img: {src: require("./assets/img/join_group_slider-2.png"), alternative: "Runner Image", title: "Runner Image"}, text: "أبجد هوز"},
            {img: {src: require("./assets/img/join_group_slider-3.png"), alternative: "Runner Image", title: "Runner Image"}, text: "أبجد هوز"}
          ]
        },
        photoGallerySwiper: {
          id: "photoGallerySwiper",
          title: "معرض الصور",
          specialClass: "photo__gallery__carousel",
          slides: [
            {img: {src: require("./assets/img/join_group_slider-1.png"), alternative: "Runner Image", title: "Runner Image"}},
            {img: {src: require("./assets/img/join_group_slider-2.png"), alternative: "Runner Image", title: "Runner Image"}},
            {img: {src: require("./assets/img/join_group_slider-3.png"), alternative: "Runner Image", title: "Runner Image"}}
          ]
        }
      },
      videoProps : {
        playerOptions: {
          muted: true,
          language: 'ar',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: require("./assets/img/landing_video_poster.jpg")
        }
      }
    }
  },
  components: {
    navbar,
    swiper,
    VideoComponent,
    SocialFeedsComponent,
    contactUsComponent,
    footerComponent
  },
  mounted: function () {}
}
</script>


