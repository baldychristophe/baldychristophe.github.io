const distFolder = 'dist'

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: `/${distFolder}/`
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
}
