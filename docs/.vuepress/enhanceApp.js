export default async ({Vue, isServer}) => {

  if (!isServer) {
    const plugin = (await import('../../src/index')).default;
    const App = (await import('../../src/App')).default;
    Vue.use(plugin);
    Vue.component('Demo', App);
  }
}
