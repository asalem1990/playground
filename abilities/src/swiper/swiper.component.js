import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'carrousel',
    props: ['title', 'id', 'specialClass', 'slides', 'swiperOptionProps'],
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 0,
          // Responsive breakpoints
          breakpoints: {
            // when window width is <= 320px
            576: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            // when window width is <= 640px
            768: {
              slidesPerView: 2,
              spaceBetween: 0
            }
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }