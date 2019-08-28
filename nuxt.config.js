const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/dist/'
  }
} : {}

const buildBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  build: {
    publicPath: 'public'
  }
} : {}

export default {
  ...routerBase,
  ...buildBase,
  srcDir: 'client/'
}
