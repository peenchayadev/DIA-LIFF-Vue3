import type { Profile } from "@liff/get-profile"
import liff from "@line/liff"

async function initLiff (): Promise<void> {
  const liffId: string | null | undefined = import.meta.env.VITE_APP_LIFF_ID
  if (liffId) {
    await liff.init({
      liffId
    })
  }
}

async function sendMessage (msg?: string): Promise<string> {
  try {
    await liff.sendMessages([
      {
        type: 'text',
        text: msg || 'test liff send message.'
      }
    ])
    return 'success'
  } catch (err: any) {
    console.error(err.message)
    return 'failed'
  }
}

async function getProfile (): Promise<Profile> {
  const profile: Profile = await liff.getProfile()
  return profile
}

async function openWindow (url?: string): Promise<void> {
  liff.openWindow({
    url: url || 'https://www.google.com/'
  })
}

async function login (): Promise<any> {
  if (liff.isLoggedIn()) {
    return
  }

  const version: string | null = liff.getLineVersion()
  const clientOs: string | undefined = liff.getOS()
  if (clientOs === 'web' || !version) {
    liff.login()
  }
}

export default {
  liff
}

export {
  liff,
  initLiff,
  sendMessage,
  getProfile,
  openWindow,
  login
}
