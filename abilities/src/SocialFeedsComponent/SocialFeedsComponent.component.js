
export default {
  name: 'social-feeds-component',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted() {

    $('#social_feeds_block').socialfeed({
      // FACEBOOK
      facebook:{
          accounts: ['@ooredooqatar'],          //Array: Specify a list of accounts from which to pull wall posts
          limit: 2,                             //Integer: max number of posts to load
          access_token: '144093929401401|39cd635cc74e0b09b68c73e3b9af5b0d'       //String: "APP_ID|APP_SECRET"
      },

      // TWITTER
      twitter:{
          accounts: ['@ooredooqatar'],                //Array: Specify a list of accounts from which to pull tweets
          limit: 2,                                   //Integer: max number of tweets to load
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
  },
  methods: {

  }
}
