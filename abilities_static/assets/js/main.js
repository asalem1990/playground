Vue.use(window.VueAwesomeSwiper)



var app = new Vue({
  el: '#app',
  data: {
    showMenu: false,
    photoInModalContent: '',
    inverseColorSchema: false,
    isReaderOn: false,
    fontSize: 0,
    fontClass: "",
    carousels: {
      mainSwiper: {
        id: "mainSwiper",
        title: "Main Swiper",
        specialClass: "landing__main__carousel",
        slides: [
          {img: {src: "./assets/img/landing_main_carousel_slider-1.jpg", alternative: "Runner Image", "title": "Runner Image"}, text: "Lorem ipsum"},
          {img: {src: "./assets/img/landing_main_carousel_slider-1.jpg", alternative: "Runner Image", "title": "Runner Image"}, text: "Lorem ipsum"},
          {img: {src: "./assets/img/landing_main_carousel_slider-1.jpg", alternative: "Runner Image", "title": "Runner Image"}, text: "Lorem ipsum"}
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
          },
          keyboard: {
            enabled: true,
          }

        }
      },
      joinGroupSwiper: {
        id: "joinGroupSwiper",
        title: "انضم الى الحركة",
        specialClass: "join_group__main__carousel",
        slides: [
          {img: {src: "./assets/img/join_group_slider-1.png", alternative: "Runner Image", title: "Runner Image"}, text: "أبجد هوز"},
          {img: {src: "./assets/img/join_group_slider-2.png", alternative: "Runner Image", title: "Runner Image"}, text: "أبجد هوز"},
          {img: {src: "./assets/img/join_group_slider-3.png", alternative: "Runner Image", title: "Runner Image"}, text: "أبجد هوز"}
        ]
      },
      photoGallerySwiper: {
        id: "photoGallerySwiper",
        title: "معرض الصور",
        specialClass: "photo__gallery__carousel",
        slides: [
          {img: {src: "./assets/img/join_group_slider-1.jpg", alternative: "Runner Image", "title": "Runner Image"}, text: "Lorem ipsum"},
          {img: {src: "./assets/img/join_group_slider-2.jpg", alternative: "Runner Image", "title": "Runner Image"}, text: "Lorem ipsum"},
          {img: {src: "./assets/img/join_group_slider-3.jpg", alternative: "Runner Image", "title": "Runner Image"}, text: "Lorem ipsum"}
        ]
      }
    },
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
      },
      keyboard: {
        enabled: true,
      }
    },
  },
  methods: {
    showPhotoInModal(index) {
      this.photoInModalContent = this.$refs.showPhotoModal[index].$el;
    },
    hidePhotoInModal() {
      this.photoInModalContent = "";
    },
    changeFontSize() {
      let fontSize = this.fontSize;
      if (fontSize >3 || fontSize < 0) {
        return false;
      }
      $('*').attr('style', function(i, style) {
        return style && style.replace(/font-size[^;]+;?/g, '');
      });
      $('*').each(function(){
        let k =  parseInt($(this).css('font-size'));
        let percantege = fontSize > 0 ? (100 + (fontSize*3)) : 100;
        let redSize = ((k*percantege)/100);
        $(this).css('font-size',redSize);
      });
    },
    readContent() {
      this.isReaderOn = !this.isReaderOn;
      if (!this.isReaderOn) {
        this.isReaderOn = false;
        msg.text = "تم إيقاف تشغيل قارئ النص";
        window.speechSynthesis.speak(msg);
        window.speechSynthesis.cancel();
        $('[text]').unbind("focus");
        msg = null;
        return false;
      }

      var msg = new SpeechSynthesisUtterance();
      var voices = window.speechSynthesis.getVoices();
      msg.voice = voices[10]; // Note: some voices don't support altering params
      msg.voiceURI = 'native';
      msg.volume = 1; // 0 to 1
      msg.rate = 1; // 0.1 to 10
      msg.pitch = 2; //0 to 2
      msg.lang = "ar-SA";

      msg.text = "تم تشغيل قارئ النص ، استخدم مفتاح tab لتشغيل النص المركّز للعنصر";
      window.speechSynthesis.speak(msg);

      $('[text]').on("focus", function () {
        $(this).css("outline", "1px solid");
        msg.text = $(this).attr("text");
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(msg);
      }).on("blur", function () {
        $(this).css("outline", "none");
      });

    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {

    $('#social_feeds_block').socialfeed({
      // FACEBOOK
      facebook:{
          accounts: ['@ooredooqatar'],          //Array: Specify a list of accounts from which to pull wall posts
          limit: 4,                             //Integer: max number of posts to load
          access_token: '144093929401401|39cd635cc74e0b09b68c73e3b9af5b0d'       //String: "APP_ID|APP_SECRET"
      },

      // TWITTER
      twitter:{
          accounts: ['@ooredooqatar'],                //Array: Specify a list of accounts from which to pull tweets
          limit: 4,                                   //Integer: max number of tweets to load
          consumer_key: 'ovTF3Yb1gmA1ikSasOtmg',          //String: consumer key. make sure to have your app read-only
          consumer_secret: 'tuv3dr7qjXKSlAW8S7DXtKj6eRt0ZKtRHoErAbnNQ' //String: consumer secret key. make sure to have your app read-only
       },

       instagram:{
            accounts: ['@account'],  //Array: Specify a list of accounts from which to pull posts
            limit: 2,                                    //Integer: max number of posts to load
            client_id: 'YOUR_INSTAGRAM_CLIENT_ID',       //String: Instagram client id (optional if using access token)
            access_token: 'YOUR_INSTAGRAM_ACCESS_TOKEN' //String: Instagram access token
        },

      // GENERAL SETTINGS
      length: 100,
      show_media: true,

      template_html: '\
      <div class="col-xs-12 col-sm-6 col-md-4 p-0 social-feed-element {{?it.attachment}}social_media_icon_white{{?}} {{=it.social_network}} {{?!it.moderation_passed}}hidden{{?}}" \
      dt-create="{{=it.dt_create}}" social-feed-id="{{=it.id}}" dt-created-ago="{{=it.time_ago}}">\
        <a href="{{=it.link}}" target="_blank">\
          {{=it.attachment}}{{?!it.attachment}}<span class="square_background {{=it.social_network}}"></span>{{?}}\
          <div class="card-body card-img-overlay p-5 text-white text-left">\
            <span class="social_media_icon icon-{{=it.social_network}}" ></span>\
            <p class="my-3">{{=it.text}}</p>\
          </div>\
        </a>\
      </div>\
      ',
      date_format: "ll",                              //String: Display format of the date attribute (see http://momentjs.com/docs/#/displaying/format/)
      date_locale: "en",                              //String: The locale of the date (see: http://momentjs.com/docs/#/i18n/changing-locale/)
      moderation: function(content) {                 //Function: if returns false, template will have class hidden
          content.text = $("<div>" + content.text + "</div>");
          content.text = content.text.text();
          return  (content.text) ? content.text.indexOf('fuck') == -1 : true;
      },
      callback: function() {                          //Function: This is a callback function which is evoked when all the posts are collected and displayed
          // console.log(it);
      }
    });
  }
})