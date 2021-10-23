<template lang="pug">
.index
  .block-01.txt-white.p-4
    .block Если вы искали курсы плетения кос в Краснодаре, то вы обратились по адресу. Меня зовут Денис Светличный и я занимаюсь преподаванием в области афропричёсок уже 7 лет!
    .block  Мой проект – это не только студия по косам и дредам, но и целый образовательный центр, где вы можете пройти и обучение плетению кос, и научиться плести дреды, и пройти мастер-класс по де-дредам, а также обучиться в индивидуальном порядке любой интересующей вас теме.
  .block-02.txt-white.p-4
    .block Обучение плетению – процесс непростой и требует полной концентрации как от преподавателя, так и от ученика. Важный момент обучения – практика, все мои курсы косоплетения проходят с большим количеством практики, я лично ставлю руки каждому ученику. Но важно помнить, что немаловажная часть обучения – это отработка полученных навыков, так что чем раньше после обучения вы начнете плести, тем лучше!
  .block-03.txt-white.p-4
    .block Я лично с радостью слежу за успехами всех своих учеников, я всегда на связи с вами, даже после обучения!
    .block Курсы косоплетения – это отличный старт в новую профессию, но я прекрасно понимаю, что всё новое – это сложно, и поддерживаю своих учеников всем, чем могу! Вы можете договориться с мастерами студии и приходить к нам на отработку, прийти со своей моделью и заплести первую причёску под руководством мастера, или задавать множество вопросов нам через мессенджеры или соцсети – мы никогда не оставим их без ответа!
    .block Ваш успех – это то, ради чего я работаю и преподаю!
  .block-04.txt-white.p-4
    .block Более восемнадцати лет я провожу групповые и индивидуальные занятия по плетению афропричёсок на территории России и других стран.
    .block Свяжитесь со мной для организации мастер-класса в Вашем городе.
  .courses.p-4
    .course.block(v-for="item in coursesData" :key="item.id")
      .course-title.txt-white {{ item.txtLabel }}
      .course-description.txt-white {{ item.txtDescription }}
      .course-tags {{ item.txtTags }}
      .course-info
        .course-price Стоимость: {{ item.txtPrice }}
        .course-period Длительность: {{ item.txtPeriod }}

</template>

<script>
import SectionBasic from '../components/Sections/SectionBasic'

import coursesJson from '../components/json/courses.json'

export default {
  name: 'Index',
  layout: 'main',
  components: { SectionBasic  },
  props: {},
  data: () => ({
    coursesData: coursesJson,
  }),
  created() {},
  computed: {},
  mounted() {
    this.coursesData = coursesJson
  },
  beforeMount() {},
  beforeDestroy() {},
  methods: {

  },
}
</script>

<style lang="scss" scoped>
//@import "@/assets/scss/project/mymixins.scss";
.course{
  &-title{
    width: 100%;
    border-bottom: 2px solid $secondary;
    color: $secondary;
    font-size: em(32);
    margin-top: 2em;
    margin-bottom: 1em;
  }
  &-description{
    font-size: em(20);
  }
  &-tags{
    color: $gray;
    margin-top: em(14);
  }
  &-info{
    margin-top: em(14);
    display: flex;
    flex-direction: row;

    .course-price{
      font-size: em(26);
      color: $primary;
      margin-right: em(14);
    }
    .course-period{
      font-size: em(26);
      color: $primary;
    }
  }
}
</style>
