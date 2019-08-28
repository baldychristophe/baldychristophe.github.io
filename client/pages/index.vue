<template lang="pug">
  .hello Hello world with nuxt!
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
