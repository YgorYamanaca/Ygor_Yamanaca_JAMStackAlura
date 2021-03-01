type IColor = {
  main: {
    color?: string
    contrastText?: string
    colorHex?: string
    colorHexAlpha?: string
  }
}

type IStatusColor = {
  done: string,
  inProgress: string,
}

type IColors = {
  primary: IColor
  secondary: IColor
  tertiary: IColor
  background: IColor
  statusColor: IStatusColor
}

export default IColors;
