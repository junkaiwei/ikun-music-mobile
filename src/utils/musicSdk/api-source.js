import apiSourceInfo from './api-source-info'
import ikun_zj_api_kg from './kg/api-ikun'
import ikun_zj_api_kw from './kw/api-ikun'
import ikun_zj_api_tx from './tx/api-ikun'
import ikun_zj_api_wy from './wy/api-ikun'
import ikun_zj_api_mg from './mg/api-ikun'
import ikun_cf_api_kg from './kg/api-ikun_us'
import ikun_cf_api_tx from './tx/api-ikun_us'
import ikun_cf_api_wy from './wy/api-ikun_us'
import settingState from '@/store/setting/state'


const apiList = {
  ikun_zj_api_kg,
  ikun_zj_api_kw,
  ikun_zj_api_tx,
  ikun_zj_api_wy,
  ikun_zj_api_mg,
  ikun_cf_api_tx,
  ikun_cf_api_wy,
  ikun_cf_api_kg,
}
const supportQuality = {}

for (const api of apiSourceInfo) {
  supportQuality[api.id] = api.supportQualitys
  // for (const source of Object.keys(api.supportQualitys)) {
  //   const path = `./${source}/api-${api.id}`
  //   console.log(path)
  //   apiList[`${api.id}_api_${source}`] = path
  // }
}

const getAPI = source => apiList[`${settingState.setting['common.apiSource']}_api_${source}`]

const apis = source => {
  if (/^user_api/.test(settingState.setting['common.apiSource'])) return global.lx.apis[source]
  const api = getAPI(source)
  if (api) return api
  throw new Error('Api is not found')
}

export { apis, supportQuality }
