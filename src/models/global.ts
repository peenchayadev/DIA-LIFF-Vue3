import type { IRouteRedirect } from "@/routers"

export interface IMenu {
	name: string
	to: IRouteRedirect
	icon: string
}

export interface IUser {
  id: number | null
  uid?: string | null
  imageUrl?: string | null
  displayName?: string | null
}

export interface IToken {
  accessToken: string
  expireIn: number | null
}
