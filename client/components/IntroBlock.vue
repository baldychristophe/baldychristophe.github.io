<template lang="pug">
  .intro-block
      img.avatar(src="~/assets/images/christophe_baldy.jpg")
      h1 Christophe Baldy
      .details Software Engineer / Web / Fullstack
      .details 
        a(href="https://fr.linkedin.com/in/christophe-baldy")
          img.logo-link(src="~/assets/images/linkedin.svg")
        a(href="https://github.com/baldychristophe")
          img.logo-link(src="~/assets/images/github.svg")
</template>

<style lang="scss" scoped>
.intro-block {
  text-align: center;
  margin-bottom: 30px;

  h1 {
    margin-bottom: 30px;
  }
  .avatar {
    border-radius: 50%;
    max-width: 200px;
  }
  .details {
    margin: 10px;

    a {
      margin: 10px;
    }
    .logo-link {
      max-width: 25px;
    }
  }
}
</style>
