import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import Spacer from "../Spacer/Spacer";

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <Spacer axis="horizontal" size={24} />
      <HelpLink href="/help">Help</HelpLink>
      <Spacer axis="horizontal" size={24} />
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  /* font 크기가 같으면 baseline 필요없음*/
  align-items: center;
  font-size: 0.875rem;
  padding: 12px 32px;
  /* Spacer로 대체함.*/
  /*gap: 24px;*/
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  /* 필요없는 마크업을 추가하지 않기 위함*/
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
