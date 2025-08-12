export interface IAuthLiff {
	jwt: string
	user: IUserResponse
}

export interface IUserResponse {
	lineUserId: string
	displayName: string
	pictureUrl: string
}
