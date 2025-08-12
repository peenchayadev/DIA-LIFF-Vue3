import { AuthStore } from "@/stores/Auth"

interface IToken {
  key: string
  value: string
}

export function getAccessToken  (): string | null {
  const authStore = AuthStore()
  return authStore?.userToken?.accessToken || null
}

export function getAuthToken (): IToken | null {
  const accessToken = getAccessToken()

  console.log(accessToken)

  if (accessToken) {
    return {
      key: 'Authorization',
      value: `Bearer ${accessToken}`
    }
  }

  return null
}