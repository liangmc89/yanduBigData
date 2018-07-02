// import something here
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  // something to do
  Vue.use(BaiduMap, {
    /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
    ak: 'CF0576b9885444b4266dcc3787a443ab'
  })
}
