import styled from "styled-components";

export const Container = styled.div`
  bottom: 0;
  height: 100vh;
  max-height: 100%;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
  display: flex;
`;

export const LeftNavBar = styled.div`
  width: 90px;
  height: 100%;
  background: #202225;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  width: 300px;
  height: 100%;
  background: #2f3136;
`;

export const ServerIconContainer = styled.div`
  width: 100%;
  height: 40px;
  background: transparent;
  margin-top: 20%;
  margin-bottom: 20%;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const ServerIcon = styled.img`
  src: url(${(props: any) => props.src});
  width: 60%;
  height: auto;
  margin-left: 20%;
`;

export const SearchBar = styled.input`
  width: 90%;
  height: 25px;
  margin-left: 5%;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 3px;
  border: none;
  background: #202225;
  color: #72767d;
  text-indent: 5px;

  &::placeholder {
    font-weight: normal;
    font-size: 12px;
  }
`;

export const OptionContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 40px;
  background: transparent;
  display: flex;
  cursor: pointer;
  align-items: center;

  &:hover {
    filter: brightness(1.1);
    background: #42464d;
    border-radius: 5px;
  }
`;

export const OptionIcon = styled.img`
  src: url(${(props: any) => props.src});
  width: 24px;
  height: 24px;
  margin-left: 5%;
  margin-right: 10%;
  filter: invert(46%) sepia(14%) saturate(182%) hue-rotate(180deg)
    brightness(97%) contrast(90%);
`;

export const OptionLabel = styled.p`
  color: #62656c;
  font-weight: bold;
  font-size: 13px;
`;

export const DirectMessages = styled.p`
  color: #62656c;
  width: 90%;
  margin-left: 5%;
  height: 30px;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 11px;
`;

export const ContentSection = styled.div`
  width: 100%;
  height: 100%;
  background: #36393f;
`;

export const FriendsContentNavbar = styled.div`
  display: flex;
  width: 100%;
  height: 25px;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid #282a2e;
`;

export const ContentOptionContainer = styled.div`
  margin: 0;
  width: 100px;
  height: 40px;
  background: transparent;
  display: flex;
  cursor: pointer;
  align-items: center;

  &:hover {
    filter: brightness(1.1);
    background: #42464d;
    border-radius: 5px;
  }
`;

export const AddFriendButton = styled.button`
  font-size: 12px;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background: #43b581;
  color: #fff;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  cursor: pointer;
  outline: none;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const UserRow = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  background: transparent;
  cursor: pointer;
  align-items: center;

  &:hover {
    filter: brightness(1.1);
    background: #3e4148;
    border-radius: 5px;
  }
`;

export const GreenDot = styled.span`
  width: 5px;
  height: 5px;
  background: ${(props: any): any => (props.color ? "#43b480" : "#747F8D")};
  border-radius: 50%;
  margin-left: 90px;
  margin-right: 10px;
`;

export const OnlineStatus = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: #62656c;
`;

export const ImageInputButton = styled.button`
  margin: 20px;
  width: 220px;
  height: 140px;
  border-radius: 50%;
  border: 4px solid #ebebeb;
  background-color: #7289da;
  cursor: pointer;
  font-weight: bolder;
  font-size: 0px;
  text-transform: uppercase;
  color: #fff;
  outline: none;

  &:hover {
    background-color: #8289da;
    font-size: 10px;
  }
`;

export const FriendListHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #4a4d53;
  width: 91%;
  margin: 0 auto;
`;

export const FriendListHeaderElement = styled.span`
  color: #6c6e72;
  font-weight: bolder;
  font-size: 12px;
  text-transform: uppercase;
  padding-right: 100px;
  margin-right: 20px;
  border-right: 1px solid #4a4d53;
`;
