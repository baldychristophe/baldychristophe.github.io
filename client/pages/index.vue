<template lang="pug">
  .page-container

    intro-block
    
    .content-block 
      h3.block-title Professional Experience
      .content-section
        .line
          .line-title Polyconseil
          .line-content Software Engineer
</template>

<script>
import IntroBlock from '../components/IntroBlock'

export default {
  head () {
    return {
      title: 'Christophe Baldy - Resume',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Christophe Baldy resume' },
        { hid: 'keywords', name: 'keywords', content: 'development, software, Christophe Baldy, resume, web, fullstack, frontend, backend' },
      ],
    }
  },
  components: {
    'intro-block': IntroBlock,
  },
}
</script>

<style scoped lang="scss">
.page-container {
  max-width: 1024px;
  margin: 20px auto;
}

.content-block {
  .block-title {
    text-transform: uppercase;
    border-bottom: 1px solid black;
  }
}
</style>
