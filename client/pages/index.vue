<template lang="pug">
  .page-container

    intro-block
    
    .section 
      .resume
        a(href="/resume.pdf") 
          i.icon-file-pdf
          span See resume
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

.section {

  .resume {
    text-align: center;

    a {
      color: black;
      text-decoration: none;
      padding: 15px;
      border-radius: 5px;

      i {
        margin-right: 5px;
      }

      // underline effect on hover
      span {
        position: relative;
      }
      span::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #ff5d60;
        transform-origin: center;
        transform: translate(-50%, 0) scaleX(0);
        transition: transform 0.3s ease-in-out;
      }
      span:hover::before {
        transform: translate(-50%, 0) scaleX(1);
      }
    }
  }
}
</style>
