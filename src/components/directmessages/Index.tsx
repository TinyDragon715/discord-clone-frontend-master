import React from "react";

import * as S from "./Styles";

import BackpackIcon from "../../assets/school-book-bag.png";
import SettingsIcon from "../../assets/settings-work-tool.svg";

import { ESections } from "../lobbysection/Index";
import Label from "../label/Index";
import Icon from "../icon/Index";
import store from "../../store/Index";
import Avatar from "../avatar/Index";
import SettingsContainer from "../settingscontainer/Index";

export default function DirectMessages({ setCurrentSection }): JSX.Element {
  const { user }: any = store.getState();

  return (
    <S.Section>
      <S.Message>Channels</S.Message>

      <S.Container onClick={(): void => setCurrentSection(ESections.LIBRARY)}>
        <Icon src={BackpackIcon} />
        <Label>Library</Label>
      </S.Container>

      <SettingsContainer>
        <Avatar src={user.avatar} />
        <Icon
          src={SettingsIcon}
          style={{ cursor: "pointer" }}
          onClick={(): void => setCurrentSection(ESections.SETTINGS)}
        />
      </SettingsContainer>
    </S.Section>
  );
}
