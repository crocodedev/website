/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "gatsby";
import PaginationWrapper from "./Pagination/PaginationWrapper";
import PaginationArrowLink from "./Pagination/PaginationArrowLink";
import PaginationStack from "./Pagination/PaginationStack";

const dynamicStyle = ({ theme, active }) => css`
  ${active
    ? `
    background-color: ${theme.palette.secondary.dark};
    color: ${theme.palette.text.secondary};
    font-weight: ${theme.typography.fontWeight.bold};
  `
    : ""}
`;

const StyledPaginationItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  transition: 0.3s;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 32px;
    height: 32px;
    padding: 8px 6px;
    font-size: ${({ theme }) => theme.typography.fontSize.captionText}px;
    line-height: ${({ theme }) => theme.typography.lineHeight.xsm};
  }
  ${({ theme }) => theme.breakpoints.between("sm", "xl")} {
    width: 45px;
    height: 45px;
    padding: 9px 10px;
    font-size: ${({ theme }) => theme.typography.fontSize.text}px;
    line-height: ${({ theme }) => theme.typography.lineHeight.xsm};
  }
  ${({ theme }) => theme.breakpoints.up("xl")} {
    width: 52px;
    height: 52px;
    padding: 14px 20px;
    font-size: ${({ theme }) => theme.typography.fontSize.subtitle}px;
    line-height: ${({ theme }) => theme.typography.lineHeight.xsm};
  }

  ${dynamicStyle}
`;

const Pagination = ({ pageCount, currentPage, handler, isDynamic, link }) => {
  const [arrOfCurrButtons, setArrOfCurrButtons] = React.useState([]);
  const arrayOfPages = [];

  for (let i = 1; i <= pageCount; i += 1) {
    arrayOfPages.push(i);
  }
  React.useEffect(() => {
    let tempNumberOfButtons = [...arrOfCurrButtons];

    const dots = "...";

    if (arrayOfPages.length < 6) {
      tempNumberOfButtons = arrayOfPages;
    } else if (+currentPage >= 1 && +currentPage <= 2) {
      tempNumberOfButtons = [1, 2, 3, dots, arrayOfPages.length];
    } else if (+currentPage === 3) {
      tempNumberOfButtons = [1, 2, 3, 4, dots, arrayOfPages.length];
    } else if (+currentPage === 4) {
      const sliced = arrayOfPages.slice(0, 5);
      tempNumberOfButtons = [...sliced, dots, arrayOfPages.length];
    } else if (+currentPage > 4 && +currentPage < arrayOfPages.length - 2) {
      const sliced1 = arrayOfPages.slice(+currentPage - 2, +currentPage);
      const sliced2 = arrayOfPages.slice(+currentPage, +currentPage + 1);
      tempNumberOfButtons = [1, dots, ...sliced1, ...sliced2, dots, arrayOfPages.length];
    } else if (+currentPage > arrayOfPages.length - 2) {
      const sliced = arrayOfPages.slice(arrayOfPages.length - 3);
      tempNumberOfButtons = [1, dots, ...sliced];
    } else if (+currentPage > arrayOfPages.length - 3) {
      const sliced = arrayOfPages.slice(arrayOfPages.length - 4);
      tempNumberOfButtons = [1, dots, ...sliced];
    }

    setArrOfCurrButtons(tempNumberOfButtons);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, pageCount]);

  const isBrowser = typeof window !== "undefined";

  return (
    <PaginationWrapper>
      <PaginationArrowLink
        as={isDynamic ? "button" : Link}
        aria-label="left"
        align="left"
        disabled={+currentPage === 1}
        onClick={() => (isDynamic ? handler(currentPage - 1) : {})}
        to={isBrowser && (+currentPage === 2 ? link : `${link}/${currentPage - 1}`)}
      />
      <PaginationStack>
        {arrOfCurrButtons.map((el, idx) => {
          return (
            <StyledPaginationItem
              as={isDynamic || el === "..." ? "button" : Link}
              active={currentPage === el}
              onClick={() => (isDynamic ? handler(el) : {})}
              key={idx}
              to={isBrowser && el === 1 ? link : `${link}/${el}`}
            >
              {el}
            </StyledPaginationItem>
          );
        })}
      </PaginationStack>
      <PaginationArrowLink
        as={isDynamic ? "button" : Link}
        aria-label="right"
        align="right"
        disabled={+currentPage === +pageCount}
        onClick={() => (isDynamic ? handler(currentPage + 1) : {})}
        to={isBrowser && `${link}/${currentPage + 1}`}
      />
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handler: PropTypes.func,
  isDynamic: PropTypes.bool,
  link: PropTypes.string.isRequired,
};

Pagination.defaultProps = {
  handler: () => {},
  isDynamic: false,
};

export default Pagination;
