export function statusGlucoseLabel (status : string) {
  switch (status) {
    case 'NORMA:':
      return 'ปกติ'
    case 'HIGH':
      return 'สูง'
    case 'LOW':
      return 'ต่ํา'
    default:
      return ''
  }
}