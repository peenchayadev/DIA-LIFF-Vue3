export interface IGlucoseSummaryResponse {
	average: number | null
	maximum: number | null
	minimum: number | null
  date: string
  measurementCount: number | null
  latestLevel: IGlucoseLatestLevel
}

export interface IGlucoseLatestLevel {
  recordedAt: string
  status: string
  value: number
}
