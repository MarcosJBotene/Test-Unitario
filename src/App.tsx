import React from "react";

import Container from "./pages/components/Container";
import { AvatarImage } from "./pages/components/UserProfile/AvatarUser/avatarUser";
import { UserInfo } from "./pages/components/UserProfile/UserInfo/userInfo";

import "./styles/global.css";

export default function App() {
  const ImageURL =
    "https://avatars0.githubusercontent.com/u/50931267?s=400&u=dc8b56b8e01b23d0a8b0f9f1ff46089f1891c047&v=4";
  return (
    <Container>
      <AvatarImage
        avatar={{ id: 1, image: ImageURL, description: "Garoto Gay" }}
      />
      <UserInfo
        user={{
          id: 1,
          name: "Daniel Sansão Araldi",
          nickName: "DanielAraldi",
          bio: "Buscando sempre novas oportunidades."
        }}
      />
    </Container>
  );
}
