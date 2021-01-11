import LocomotiveScroll from 'locomotive-scroll'

const install = (Vue) => {
  Vue.prototype.LocomotiveScroll = LocomotiveScroll
}

export default install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}
