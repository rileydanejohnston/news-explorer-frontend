import styled from "styled-components/macro";
import bookmarkImg from '../../images/bookmark.svg';
import selectedBookmark from '../../images/selected-bookmark.svg';
import deleteIcon from '../../images/delete-icon.svg';

export const CardWrapper = styled.li`
  width: 400px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media( max-width: 1023px ) {
    width: 224px;
  }

  @media( max-width: 625px ) {
    width: 288px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 272px;

  @media( max-width: 1023px ) {
    height: 150px;
  }

  @media( max-width: 625px ) {
    height: 196px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Category = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  text-transform: capitalize;
  max-width: 145px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  padding: 8px 22px;
  background: #FFF;
  border-radius: 10px;
  position: absolute;
  top: 24px;
  left: 24px;

  @media( max-width: 1023px ) {
    padding: 8px 20px;
    top: 8px;
    left: 8px;
  }

  @media( max-width: 625px ) {
    top: 16px;
    left: 16px;
  }
`;

export const ToolTip = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;

  opacity: ${(props) => (props.isOpen ? 1 : 0 )};
  z-index: ${(props) => (props.isOpen ? 1 : -1 )};
  transition: opacity .3s ease .3s;
  background: #FFF;
  border-radius: 10px;
  height: 40px;
  padding: 10px 20px;
  position: absolute;
  top: 24px;
  right: 69px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media( max-width: 1023px ) {
    top: ${(props) => (props.path === '/' ? '8px' : '53px' )};
    right: ${(props) => (props.path === '/' ? '53px' : '8px' )};
  }

  @media( max-width: 625px ) {
    top: ${(props) => (props.path === '/' ? '16px' : '61px' )};
    right: ${(props) => (props.path === '/' ? '61px' : '16px' )};
  }
`;

export const ActionButton = styled.button`
  width: 40px;
  height: 40px;
  background: #FFF;
  border-radius: 8px;
  position: absolute;
  top: 24px;
  right: 24px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media( max-width: 1023px ) {
    top: 8px;
    right: 8px;
  }

  @media( max-width: 625px ) {
    top: 16px;
    right: 16px;
  }

  &:hover{
    cursor: pointer;
  }
`;

export const BookmarkIcon = styled.div`
  width: 14px;
  height: 19px;
  background: center / contain no-repeat url(${bookmarkImg});
  opacity: ${(props) => (props.iconHover ? 1 : .2 )};
  transition: opacity .3s ease;
`;

export const DeleteIcon = styled(BookmarkIcon)`
  width: 18px;
  background: center / contain no-repeat url(${deleteIcon})
`;

export const SelectedIcon = styled(BookmarkIcon)`
  background: center / contain no-repeat url(${selectedBookmark});
  opacity: 1;
`;

export const InfoWrapper = styled.div`
  padding: 20px 24px 24px;
  background: #FFF;
  height: 304px;

  @media( max-width: 1023px ) {
    padding: 16px;
    height: 270px;
  }
  @media( max-width: 625px ) {
    height: 244px;
  }
`;

export const Date = styled.p`
  font-family: 'Source Sans Pro';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;

  color: #B6BCBF;
`;

export const Title = styled.h3`
  font-family: 'Roboto Slab';
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0px;

  margin-top: 12px;
  height: 60px;
  max-width: 352px;
  overflow: hidden;

  @media( max-width: 1023px ) {
    font-size: 22px;
    line-height: 24px;
    height: 72px;
    max-width: 192px;
  }

  @media( max-width: 625px ) {
    margin-top: 10px;
    height: 48px;
    max-width: 256px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;

  margin-top: 16px;
  overflow: hidden;
  height: 88px;
  max-width: 352px;

  @media( max-width: 1023px ) {
    margin-top: 10px;
    height: 88px;
    max-width: 192px;
  }

  @media( max-width: 625px ) {
    margin-top: 14px;
    max-width: 256px;
  }
`;

export const NewsSource = styled.p`
  font-family: 'Roboto Slab';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.4000000059604645px;

  margin-top: 40px;
  text-transform: uppercase;
  color: #B6BCBF;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media( max-width: 1023px ) {
    margin-top: 12px;
  }

  @media( max-width: 625px ) {
    margin-top: 8px;
  }
`;