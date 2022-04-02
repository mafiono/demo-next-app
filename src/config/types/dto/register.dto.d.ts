import { REGISTER_ENUM } from '../../enum/register.enum'

export interface REGISTER_DTO {
  [REGISTER_ENUM.USERNAME]: string
  [REGISTER_ENUM.PASSWORD]: string
  [REGISTER_ENUM.CONFIRM_PASSWORD]: string
  [REGISTER_ENUM.DOB_DATE]: string
  [REGISTER_ENUM.DOB_MONTH]: string
  [REGISTER_ENUM.DOB_YEAR]: string
  [REGISTER_ENUM.EMAIL]: string
  [REGISTER_ENUM.PHONE_NUMBER]: string
  [REGISTER_ENUM.CAPTCHA]: string
}
