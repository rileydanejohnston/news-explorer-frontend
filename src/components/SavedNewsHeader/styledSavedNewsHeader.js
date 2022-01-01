import styled from "styled-components/macro";

export const SavedHeaderWrapper = styled.section`
  padding: 40px 104px 56px;

@media( max-width: 1023px) {
  padding: 24px 40px 32px; 
}
`;

export const Title = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  color: rgba(26, 27, 34, 0.5);


@media( max-width: 1023px) {
  font-size: 14px;
}

@media( max-width: 625px ) {
  font-size: 12px;
  line-height: 24px;
}
`;

export const Subtitle = styled.p`
  font-family: 'Roboto Slab';
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 46px;
  letter-spacing: 0px;

  max-width: 500px;
  margin-top: 28px;

@media( max-width: 1023px) {
  font-size: 30px;
  line-height: 34px;
  margin-top: 16px;
}
`;

export const RegularText = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;

  margin-top: 30px;

  @media( max-width: 1023px) {
    margin-top: 16px;
  }

  @media( max-width: 625px) {
    margin-top: 50px;
  }
`;

export const BoldText = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
`;
