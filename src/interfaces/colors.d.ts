type IColor = {
  main: {
    color?: string
    contrastText?: string
  }
}

type IColors = {
  primary: IColor
  secondary: IColor
  tertiary: IColor
  background: IColor
  borders: IColor
}

export default IColors;
