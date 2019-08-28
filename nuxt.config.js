const repositoryName = 'baldychristophe.github.io'

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: `/${repositoryName}/`
  }
} : {}

export default {
  ...routerBase
}
