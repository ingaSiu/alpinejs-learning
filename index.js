document.addEventListener('alpine:init', () => {
  Alpine.data('counter', () => ({
    count: 0,
    name: 'Neko',

    logCount() {
      console.log(this.count);
    },
  }));
});
