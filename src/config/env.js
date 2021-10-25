import { DEV_BACKEND_URL, PROD_BACKEND_URL } from '@env'

let devEnviornmentVariables = {
  DEV_BACKEND_URL,
}

let prodEnviornmentVariables = {
  PROD_BACKEND_URL,
}

export default __DEV__ ? devEnviornmentVariables : prodEnviornmentVariables