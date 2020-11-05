import React from "react";

import { AvatarUser } from "./avatarUserProps";

import "./style.css";

export function AvatarImage({ avatar }: AvatarUser) {
  return (
    <img
      id="avatar"
      key={avatar.id}
      src={avatar.image}
      alt={avatar.description}
    />
  );
}
