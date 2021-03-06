interface ITypography{
  fontSize: string,
  fontWeight: string,
  lineHeight: number,
}

interface ITypographyVariants {
  title: ITypography,
  titleMobile: ITypography,
  subTitle: ITypography,
  link: ITypography,
  linkMobile: ITypography,
  textTitle: ITypography,
  textTitleMobile: ITypography,
  text: ITypography,
  textMobile: ITypography,
}

export default ITypographyVariants;
