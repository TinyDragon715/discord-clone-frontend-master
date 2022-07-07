import React from "react";
import * as S from "./Styles";
import HashtagIcon from "../../assets/hashtag.png";
import TPHIcon from "../../assets/server-icon.png";
import store from "../../store/Index";
import Label from "../label/Index";
import CenterContainer from "../centercontainer/Index";
import Avatar from "../avatar/Index";
import Icon from "../icon/Index";
import Pusher from "pusher-js";

export default function ServerRooms(): JSX.Element {
  const {
    server: { name, _id }
  } = store.getState();

  const PusherAccount = () => {
    Pusher.logToConsole = true;

    var pusher = new Pusher('ef8575c0c6ecb6f1f5bc', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('default-channel');
    channel.bind('message', function(data) {
      alert(JSON.stringify(data));
    });
  }

  React.useEffect(() => {
    PusherAccount()
  })

  return (
    <S.Section>
      <CenterContainer
        style={{
          borderBottom: "1px solid #232428",
          width: "100%",
          justifyContent: "flex-start",
          paddingBottom: "5px"
        }}
      >
        <Avatar src={TPHIcon} style={{ filter: "none" }} />
        <Label style={{ maxWidth: "inherit", overflow: "hidden" }}>
          {name}
        </Label>
      </CenterContainer>
      <Label style={{ width: "80%", margin: "0 auto", fontSize: "11px" }}>
        {_id}
      </Label>
      <CenterContainer>
        <Icon src={HashtagIcon} />
        <Label style={{ fontWeight: "bolder", color: "#fff" }}>Default Channel</Label>
      </CenterContainer>
    </S.Section>
  );
}
