import { envVars } from '../../env.mjs'

export const API_URL = envVars.NEXT_PUBLIC_API_URL

export type ApiResponse<T> = {
  limit: number
  skip: number
  total: number
} & T

type ApiError = {
  body?: Record<string, unknown>
  message: string
  status?: number
}

const parseError = (error: unknown): Error => {
  if (typeof error === 'object' && error !== null && 'message' in error) {
    const err = error as ApiError
    let errorMessage = err.message
    if (err.status) {
      errorMessage = `${err.status}: ${errorMessage}`
    }
    if (err.body) {
      errorMessage = `${errorMessage} - ${JSON.stringify(err.body)}`
    }
    // eslint-disable-next-line no-console -- needed for error logging
    console.error(errorMessage)
    return new Error(errorMessage)
  }
  // eslint-disable-next-line no-console -- needed for error logging
  console.error('Unknown error', error)
  return new Error('Unknown error')
}

export const tryAction = async <T>(action: () => Promise<T>): Promise<T> => {
  try {
    return await action()
  } catch (error) {
    throw parseError(error)
  }
}
