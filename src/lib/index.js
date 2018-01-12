import Loading from './Load.vue'

var LoadPlugin = {}
LoadPlugin.install = function(Vue, options) {
  if (document.querySelector('.load')) {
    return
  }
  let vload = Vue.extend(Loading)
  let loadVm = new vload()
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(loadVm);
  }
  let tpl = loadVm.$mount().$el
  document.body.appendChild(tpl)

  Vue.prototype.$load = {
    show: function(options="") {
      if (typeof(options) === 'string') { // 对参数进行判断
        loadVm.title = options
        loadVm.showLoading = true
      } else if (typeof(options) === 'object') {
        Object.assign(loadVm, options) // 合并参数与实例

        loadVm.showLoading = true
      }
    },
    hide: function() {
      loadVm.showLoading = false
    }
  }
  window.vload = loadVm  // loadVm
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vload);
  }
}

export default LoadPlugin
