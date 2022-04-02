import { LOGIN_ENUM } from '../../enum'

interface LOGIN_DTO {
  [LOGIN_ENUM.LOGIN_ID]: string
  [LOGIN_ENUM.PASSWORD]: string
}
