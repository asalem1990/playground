export default {
  name: 'contact-us-component',
  components: {},
  props: [],
  data () {
    return {
      form: {
        email: '',
        name: '',
        surname: '',
        message: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  },
  computed: {

  },
  mounted () {

  }
}
