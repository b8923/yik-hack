export default {
  data() {
    return {
      formControl: {
        loading: false,

        start: function() {
          this.loading = true;
        },

        done: function() {
          this.loading = false;
        }
      }
    };
  },

  computed: {
    isLoading() {
      return this.formControl.loading;
    }
  }
};
