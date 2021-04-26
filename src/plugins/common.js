
import Vue from 'vue'
const isDebug = process.env.VUE_APP_DEBUG === 'debug'
const Plugin = {
  install (Vue) {
    // 挂载公共方法-打印日志($logs)
    const logs = commonLogs
    Vue.logs = logs
    Object.defineProperty(Vue.prototype, '$logs', {
      get () {
        return logs
      }
    })
    // 挂载公共方法-埋点($bury)
    const bury = conmmonBuryingPoint
    Vue.bury = bury
    Object.defineProperty(Vue.prototype, '$bury', {
      get () {
        return bury
      }
    })
    // 挂载公共方法-页面跳转($changePage)
    const changePage = commonChangePage
    Vue.changePage = changePage
    Object.defineProperty(Vue.prototype, '$changePage', {
      get () {
        return changePage
      }
    })
    // 挂载公共方法-页面返回($pageBack)
    const pageBack = commonPageBack
    Vue.pageBack = pageBack
    Object.defineProperty(Vue.prototype, '$pageBack', {
      get () {
        return pageBack
      }
    })
    // 挂载公共方法-判断是否为空($isEmpty)
    const isEmpty = commonIsEmpty
    Vue.isEmpty = isEmpty
    Object.defineProperty(Vue.prototype, '$isEmpty', {
      get () {
        return isEmpty
      }
    })
    // 挂载公共方法-获得params对象数据($paramData)
    const paramData = commonGetParams
    Vue.paramData = paramData
    Object.defineProperty(Vue.prototype, '$paramData', {
      get () {
        return paramData
      }
    })
    // 挂载公共方法-存储公共数据($saveData)
    const saveData = commonSaveData
    Vue.saveData = saveData
    Object.defineProperty(Vue.prototype, '$saveData', {
      get () {
        return saveData
      }
    })
    // 挂载公共方法-存储公共数据($getData)
    const getData = commonGetData
    Vue.getData = getData
    Object.defineProperty(Vue.prototype, '$getData', {
      get () {
        return getData
      }
    })
    // 挂载公共方法-toast($toast)
    const toast = commonShowToast
    Vue.toast = toast
    Object.defineProperty(Vue.prototype, '$toast', {
      get () {
        return toast
      }
    })
  }
}

const buryArray = []

/**
 *  公共方法-打印日志
 */
const commonLogs = function (str, data) {
  if (isDebug) {
    // #ifdef H5
    data ? console.log('【commLog】' + str, data) : (typeof str === 'object' ? console.log('【commLog】', str) : console.log('【commLog】' + str))
    // #endif
    // #ifdef MP
    data ? console.warn('【commLog】' + str, data) : (typeof str === 'object' ? console.warn('【commLog】', str) : console.warn('【commLog】' + str))
    // #endif
  }
}
/**
 *  公共方法-埋点
 *  option{} 埋点数据
 *  在localStronge记录用户操作日志及埋点数据
 */
const conmmonBuryingPoint = function (option) {
  buryArray.push(option.content)
  if (buryArray.length) {
    Vue.ls.set('buryPoint', buryArray)
  }
}

/**
 *  公共方法-页面跳转
 */
const commonChangePage = function (option) {
  if (typeof (option) === 'string') {
    this.$u.route({
      url: option
    })
  } else {
    option.url = option.url || ''
    option.type = option.type || 'navigateTo'
    option.delta = option.delta || 1
    option.params = option.params || {}
    this.$u.route({
      url: option.url,
      type: option.type,
      delta: option.delta,
      params: option.params
    })
  }
}
/**
 *  公共方法-页面返回
 */
const commonPageBack = function (backNum) {
  backNum = backNum || 1
  // #ifdef H5
  window.history.back(-1)
  // #endif
  // #ifndef H5
  this.$u.route({
    type: 'back',
    delta: backNum
  })
  // #endif
}
/**
 *  公共方法-判断是否为空
 */
const commonIsEmpty = function (value) {
  return this.$u.test.isEmpty(value)
}
/**
 *  公共方法-获取store中params对象
 */
const commonGetParams = function () {
  return this.$store.state.params
}
/**
 *  公共方法-存储公共数据
 */
const commonSaveData = function (obj) {
  for (var item in obj) {
    // eslint-disable-next-line no-undef
    getApp().globalData[item] = obj[item]
  }
}
/**
 *  公共方法-根据key获取公共数据
 */
const commonGetData = function (key) {
  if (this.$u.test.isEmpty(key)) {
    // eslint-disable-next-line no-undef
    return getApp().globalData
  } else {
    // eslint-disable-next-line no-undef
    return getApp().globalData[key]
  }
}
/**
 *  公共方法-显示Toast
 */
const commonShowToast = function (option) {
  if (typeof (option) === 'string') {
    // eslint-disable-next-line no-undef
    uni.showToast({
      icon: 'none',
      mask: true,
      title: option
    })
  } else {
    option.title = option.title || ''
    option.icon = option.icon || 'none'
    option.duration = option.duration || 1500
    option.success = option.success || function () { }
    // eslint-disable-next-line no-undef
    uni.showToast({
      icon: option.icon,
      title: option.title,
      mask: true,
      duration: option.duration,
      success: option.success
    })
  }
}
Vue.use(Plugin)
