import type { IBaseReponse } from '@/models/Response/Response.model'
import HttpRequest from '../HttpRequest'
import type { IGlucoseSummaryResponse } from '@/models/Response/GlucoseResponse.model'

export interface IGlucoseProvider {
	getTodaySummary(): Promise<any>
}

class GlucoseProvider extends HttpRequest implements IGlucoseProvider {
	private urlPrefix: string = '/glucose'

	public async getTodaySummary(): Promise<IBaseReponse<IGlucoseSummaryResponse>> {
		this.setAuthHeader()
		return this.get(`${this.urlPrefix}/summary/today`)
	}
}

export default GlucoseProvider
