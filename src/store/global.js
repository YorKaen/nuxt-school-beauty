export const state = () => ({
  navLinks: false,
  bannerNotEmpty: true
})

export const mutations = {
  showNavLinks(state){
    state.navLinks = true;
  },
  hideBanners(state){
    state.bannerNotEmpty = false;
  }
}

export const actions = {

}

export const getters = {

}
