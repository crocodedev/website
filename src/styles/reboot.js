import { css } from "@emotion/react";

const reboot = (theme) => css`
  body {
    font-family: ${theme.typography.fontFamily};
  }

  a[href],
  button,
  label {
    -webkit-tap-highlight-color: transparent;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    ${theme.breakpoints.down("md")} {
      margin-top: 70px;
    }

    ${theme.breakpoints.up("md")} {
      margin-top: 90px;
    }
  }

  .content {
    p {
      margin-top: 0;

      &:last-child {
        margin-bottom: 0;
      }
    }

    ul,
    ol {
      margin-top: 0;
    }

    a {
      color: ${theme.palette.primary.main};
    }

    br {
      content: "";
      display: block;
    }
  }
`;

export default reboot;
