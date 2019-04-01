export default {
  props: {
    colors: {
      type: Object,
      default: () => ({
        primary: '#333333',
        accent: '#2196f3',
        text: '#888888',
      }),
    },
  },
};
