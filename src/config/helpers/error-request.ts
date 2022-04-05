import { baseToast } from '../../partials/BaseToast'

class ErrorRequestHandler {
  constructor(error: any, label: string) {
    const { message, errorCode } = error?.response?.data || ({} as any)
    baseToast({
      type: 'error',
      message,
      label,
    })
  }
}
export default ErrorRequestHandler
