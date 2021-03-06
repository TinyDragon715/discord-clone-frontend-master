import React, { useState} from "react";

import { Container } from "./Styles";

import LeftSideNavbar from "../../components/leftsidenavbar/Index";

import LobbySection from "../../components/lobbysection/Index";
import ServerRooms from "../../components/serverrooms/Index";
import ServerChat from "../../components/serverchat/Index";
import ServerMembers from "../../components/servermembers/Index";

export enum EViews {
  MAIN = 0,
  SERVER
}

export default function Lobby({ history }): JSX.Element {
  React.useEffect(() => {
    if(localStorage.getItem('isLoggedIn') != 'true') {
      history.push('/login')
    }
  }, [])
  const [currentView, setCurrentView] = useState(EViews.MAIN);

  const views: Map<number, any> = new Map<number, any>();

  views.set(
    EViews.MAIN,
    <>
      <LobbySection history={history} />
    </>
  );

  views.set(
    EViews.SERVER,
    <>
      <ServerRooms />
      <ServerChat />
      <ServerMembers />
    </>
  );

  return (
    <Container>
      <LeftSideNavbar setCurrentView={setCurrentView} />
      {views.get(currentView)}
    </Container>
  );
}
