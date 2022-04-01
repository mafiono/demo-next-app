import { LOGIN_CONSTANTS } from '../../config/constants'

interface LoginDto {
  [LOGIN_CONSTANTS.LOGIN_ID]: string
  [LOGIN_CONSTANTS.PASSWORD]: string
}
