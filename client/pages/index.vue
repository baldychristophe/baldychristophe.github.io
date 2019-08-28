<template lang="pug">
  .page-container
    .intro-block
      h1 Christophe Baldy
      .details +33 06 12 07 07 34 / baldychristophe at gmail.com / fr.linkedin.com/in/christophe-baldy / github.com/baldychristophe
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
.hello {
  color: red;
  outline: 1px solid green;
}
</style>
