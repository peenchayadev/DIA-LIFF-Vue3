import HttpRequest from '../HttpRequest'
import type { IAuthLiff } from '@/models/Response/Auth.model'
import type { IAuthRequest } from '@/models/Request/Request.model'
import type { IBaseReponse } from '@/models/Response/Response.model'

export interface IAuthProvider {
	authLiff(query: IAuthRequest): Promise<IBaseReponse<IAuthLiff>>
}

class AuthProvider extends HttpRequest implements IAuthProvider {
	private urlPrefix: string = '/auth'

	public async authLiff(query: IAuthRequest): Promise<IBaseReponse<IAuthLiff>> {
		const response = await this.post(`${this.urlPrefix}/line-verify`, query)
		return response
	}
}

export default AuthProvider
