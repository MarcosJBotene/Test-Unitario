import React from "react";

import { AvatarUser } from "./avatarUserProps";

export function AvatarImage({ avatar }: AvatarUser) {
  return <img key={avatar.id} src={avatar.image} alt={avatar.description} />;
}
