import React from "react";
import styled from "styled-components/macro";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper>
          <ShoeCard key={shoe.slug} {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;
const ShoeWrapper = styled.div`
  /* 최소 크기 
  // flex-shrink 때문에 요소가 한 줄? 
  // flex: 1 도 flex-basis를 0으로 설정하기 때문.
  */
  min-width: 275px;
  min-width: 450px;
  flex: 1;
`;
/* alternative solution without gap */
// const Wrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin: 0 -16px;
// `;
// const ShoeWrapper = styled.div`
//   width: 275px;
//   margin: 0 16px;
// `;

export default ShoeGrid;
