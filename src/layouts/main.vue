<template lang="pug">
  #app.app
    d-e-b-u-g
    .nav.container.is-full.bg-black
      .container
        .level.d-flex
          .level-left
            nuxt-link(to="/").item.nav-logo
              image-lazy(:srcImg="'Logo.png'").mt-a.mb-a
          .level-right
            .item.mr-1
              link-phone-icon(:srcLink="socialData.phone").txt-white.txt-1
            .item.mr-1
              a.link(:href="socialData.instagram").pr-1.pl-1
                icon-instagram(:width="'24'" :height="'24'" fill="#2DC698").mt-a.mb-a
            .item.mr-1
              a.link(:href="socialData.whatsup").pr-1.pl-1
                icon-whatsup(:width="'24'" :height="'24'" fill="#2DC698").mt-a.mb-a
            .item.mr-a
              a.link(:href="socialData.telegram").pr-1.pl-1
                icon-telegram(:width="'24'" :height="'24'" fill="#2DC698").mt-a.mb-a
            .item.ml-6
              button.btn.outline-primary(:href="'#'")
                .txt.txt-white.txt-1 Записаться

    section-basic(:src-name="'hero'" isFull).bg-black.z-back
      template(v-slot:content)
        .container.o-hidden
          .fix.fill-page
            lines-svg.is-animated
            .inner.center-y-absolute.d-flex.flex-col
              h3.txt.txt-white.bg-text Школа-студия красоты
              h1.txt.txt-primary.bg-text БУКЛЯ
              .buttons.mt-6.pr-2
                button.btn.outline-primary.is-full.bg-black(:href="'#'").mt-2.flex-center
                  .txt.txt-white.txt-1 Курсы
                button.btn.outline-primary.is-full(:href="'#'").mt-2.flex-center
                  .txt.txt-white.txt-1 Салон красоты
    section-basic(:src-name="'contacts-top'" isFull).bg-body
      template(v-slot:content)
        .container
          .level.pt-5.pb-5.mb-6
            .level-left
              .wrapper.contacts-top-wrapper
                h2.txt-black.contacts-top-title.bg-primary.p-2 Контакты
            .level-right.is-fill.ml-6
              .level-item.is-start.flex-col.txt-left
                .level-item__title.mb-2
                  .txt-1.txt-primary Адрес
                .level-item__text
                  .txt.txt-1.txt-white Краснодар
                  .txt.txt-1.txt-white {{socialData.address}}
              .level-item.is-start.flex-col.txt-left
                .level-item__title.mb-2
                  .txt-1.txt-primary Телефон
                .level-item__text
                  link-phone(:srcLink="socialData.phone").txt-white.txt-1
              .level-item.is-start.flex-col.txt-left
                .level-item__title.mb-2
                  .txt-1.txt-primary Режим работы
                .level-item__text
                  .txt.txt-1.txt-white {{socialData.time}}
              .level-item.is-start.flex-col.txt-left
                .level-item__title.mb-2
                  .txt-1.txt-primary Социальные сети
                .level-item__text.d-flex
                  .item.mr-1
                    a.link(:href="socialData.instagram").pr-1
                      icon-instagram(:width="'24'" :height="'24'" fill="#2DC698").mt-a.mb-a
                  .item.mr-1
                    a.link(:href="socialData.whatsup").pr-1.pl-1
                      icon-whatsup(:width="'24'" :height="'24'" fill="#2DC698").mt-a.mb-a
                  .item.mr-1
                    a.link(:href="socialData.telegram").pr-1.pl-1
                      icon-telegram(:width="'24'" :height="'24'" fill="#2DC698").mt-a.mb-a

    .content-split
      .br-line.w-100.bg-primary
      .container.bg-black
        .sticky.buttons.d-flex
          nuxt-link(to="/")
            button.btn.outline-primary.txt-white.bg-dark
              .txt.txt-1.p-1 Курсы Дениса Светличного
          button.btn.outline-primary.txt-white.bg-dark
            .txt.txt-1.p-1 Услуги салона красоты
        .page
          Nuxt
      .br-line.w-100.bg-primary

        //.br-line.w-100.bg-primary
    section-basic(:src-name="'personnel'" isFull).bg-body
      template(v-slot:content)
        .test.container
    section-basic(:src-name="'contacts-bot'" isFull).bg-body
      template(v-slot:content)
        .test.container.bg-black
</template>

<script>
  import DEBUG from '../components/Utilities/DEBUG'
  import SectionBasic from '../components/Sections/SectionBasic'
  import ImageLazy from '../components/UI/Images/ImageLazy'
  import LinkPhoneIcon from '../components/UI/Links/LinkPhoneIcon'

  import socialJson from '../components/json/social.json'
  import IconCall from '../components/UI/Icons/Call'
  import IconInstagram from '../components/UI/Icons/Instagram'
  import IconWhatsup from '../components/UI/Icons/Whatsup'
  import IconTelegram from '../components/UI/Icons/Telegram'
  import LinesSvg from '../components/AAThisProject/Lines'
  import LinkPhone from '../components/UI/Links/LinkPhone'

  const pageType = 'website'
  const pageTitle = 'Школа-студия красоты Букля!'
  const pageDescription =
    'Школа-студия красоты «Букля» в Краснодаре. Профессиональные курсы плетения кос, афропричёсок. Услуги парикмахерской и салона красоты'
  export default {
    components: {
      LinkPhone,
      LinesSvg,
      IconTelegram,
      IconWhatsup,
      IconInstagram,
      LinkPhoneIcon,
      IconCall,
      ImageLazy,
      SectionBasic,
      DEBUG
    },
    head: {
      title: pageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: pageDescription,
        },
        { hid: 'og:title', property: 'og:title', content: pageTitle },
        {
          hid: 'og:description',
          property: 'og:description',
          content: pageDescription,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: pageType,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: pageTitle,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: pageDescription,
        },
      ],
    },
    data: () => ({
      socialData: socialJson
    }),
    computed: {},
    mounted() {
      this.socialData = socialJson
      this.test()
    },
    methods: {
      test() {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app {
    a.nuxt-link-active {
      font-weight: bold;

      .btn{
        background-color: $primary;
        color: black;
      }
    }
    .fill-page {
      height: 100%;
      max-height: 100vh;
      width: 100%;
      max-width: 100vw;
    }

    .section {
      z-index: 1;
      position: relative;

      &.z-back {
        z-index: 0;
      }
    }

    .nav {
      padding: em(8) 0;
      position: sticky;
      top: 0;
      z-index: 3;
      .nav-logo {
        max-width: 170px;

      }

      .item {
        &:hover {
          svg {

            fill: white;
          }
        }
      }
    }

    .hero {
      min-height: 100vh;
      background-color: black;

      .bg-text {
        background-color: rgba(0, 0, 0, .80);
      }
    }
    .fix {
      position: fixed;
    }
    .br-line{
      height: 5px;
    }

    .contacts-top{
      &-wrapper{
        height: 100%;
        position: relative;
        z-index: 1;
        isolation: isolate;
        &:before{
          content: '';
          position: absolute;
          background-color: $secondary;
          width: 100%;
          height: 100%;
          top: em(12);
          left: em(12);
          z-index: -1;
        }
      }
      .level-right{
        align-items: flex-start;
      }
      .level-item{
        .item {
          &:hover {
            svg {
              fill: white;
            }
          }
        }
      }
    }

    .content-split{
      position: relative;
      z-index: 1;
      .buttons{
        .btn{
          margin-right: 0;
          border-top: none;
        }
      }
      .sticky {
        position: sticky;
        top: 80px;
        z-index: 1;
      }
    }


    .test{
      height: 100vh;
    }
    .pages{
      &-content{
        height: 300vh;
      }
    }

  }
</style>
