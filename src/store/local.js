export const state = () => ({
  //viewsPwa: JSON.parse(localStorage.getItem('viewsPwa')),
  //viewsExp: JSON.parse(localStorage.getItem('viewsExp')),
  //viewsAbout: JSON.parse(localStorage.getItem('viewsAbout')),
  //viewsExamples: JSON.parse(localStorage.getItem('viewsExamples')),
  viewsPwa: 0,
  viewsExp: 0,
  viewsAbout:0,
  viewsExamples:0,
})

export const mutations = {
  INCREMENT_PWA(state) {
    state.viewsPwa++
    //localStorage.setItem('viewsPwa', JSON.stringify(state.viewsPwa))
  },
  INCREMENT_EXP(state) {
    state.viewsExp++
    //localStorage.setItem('viewsExp', JSON.stringify(state.viewsExp))
  },
  INCREMENT_ABOUT(state) {
    state.viewsAbout++
    //localStorage.setItem('viewsAbout', JSON.stringify(state.viewsAbout))
  },
  INCREMENT_EXAMPLES(state) {
    state.viewsExamples++
    //localStorage.setItem('viewsExamples', JSON.stringify(state.viewsExamples))
  },
}

export const actions = {}

export const getters = {}
