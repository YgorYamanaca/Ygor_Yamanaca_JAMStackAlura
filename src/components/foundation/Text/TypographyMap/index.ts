import ITypographyVariants from '@/theme/styles/typographys';
import { css, CSSProp } from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';

type ITextStyleVariantsMap = {
  [key in keyof ITypographyVariants]?: CSSProp
}

const TextStyleVariantsMap: ITextStyleVariantsMap = {
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.typography.titleMobile.fontSize};
      font-weight: ${theme.typography.titleMobile.fontWeight};
      line-height: ${theme.typography.titleMobile.lineHeight};
    `}

    ${breakpointsMedia({
    desktop: css`
        ${({ theme }) => css`
          font-size: ${theme.typography.title.fontSize};
          font-weight: ${theme.typography.title.fontWeight};
          line-height: ${theme.typography.title.lineHeight};
        `}
      `,
  })}
  `,

  subTitle: css`
    ${({ theme }) => css`
      font-size: ${theme.typography.subTitle.fontSize};
      font-weight: ${theme.typography.subTitle.fontWeight};
      line-height: ${theme.typography.subTitle.lineHeight};
    `}
  `,

  link: css`
    ${({ theme }) => css`
      font-size: ${theme.typography.linkMobile.fontSize};
      font-weight: ${theme.typography.linkMobile.fontWeight};
      line-height: ${theme.typography.linkMobile.lineHeight};
    `}

    ${breakpointsMedia({
    desktop: css`
        ${({ theme }) => css`
          font-size: ${theme.typography.link.fontSize};
          font-weight: ${theme.typography.link.fontWeight};
          line-height: ${theme.typography.link.lineHeight};
        `}
      `,
  })}
  `,

  textTitle: css`
    ${({ theme }) => css`
      font-size: ${theme.typography.textTitleMobile.fontSize};
      font-weight: ${theme.typography.textTitleMobile.fontWeight};
      line-height: ${theme.typography.textTitleMobile.lineHeight};
    `}

    ${breakpointsMedia({
    desktop: css`
        ${({ theme }) => css`
          font-size: ${theme.typography.textTitle.fontSize};
          font-weight: ${theme.typography.textTitle.fontWeight};
          line-height: ${theme.typography.textTitle.lineHeight};
        `}
      `,
  })}
  `,

  text: css`
    ${({ theme }) => css`
      font-size: ${theme.typography.textMobile.fontSize};
      font-weight: ${theme.typography.textMobile.fontWeight};
      line-height: ${theme.typography.textMobile.lineHeight};
    `}

    ${breakpointsMedia({
    desktop: css`
        ${({ theme }) => css`
          font-size: ${theme.typography.text.fontSize};
          font-weight: ${theme.typography.text.fontWeight};
          line-height: ${theme.typography.text.lineHeight};
        `}
      `,
  })}
  `,
};

export default TextStyleVariantsMap;