<template lang="pug">
  .page-container
    .intro-block
      img.avatar(src="~/assets/images/christophe_baldy.jpg")
      h1 Christophe Baldy
      .details 
        a(href="fr.linkedin.com/in/christophe-baldy") linkedin
        span /
        a(href="github.com/baldychristophe") github
    .content-block 
      span Hello world with nuxt!
</template>

<script>
export default {
  head () {
    return {
      title: 'Christophe Baldy - Resume',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Christophe Baldy resume' },
        { hid: 'keywords', name: 'keywords', content: 'development, software, Christophe Baldy, resume' },
      ],
    }
  } 
}
</script>

<style scoped lang="scss">
.intro-block {
  text-align: center;
  margin: 20px;

  .avatar {
    border-radius: 50%;
    max-width: 200px;
  }
}
</style>
