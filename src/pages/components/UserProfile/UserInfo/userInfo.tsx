import React from "react";

import { UserInfoProps } from "./userInfoProps";

export function UserInfo({ user }: UserInfoProps) {
  return (
    <div key={user.id}>
      <h1>{user.name}</h1>
      <h3>{user.nickName}</h3>
      <p>{user.bio}</p>
    </div>
  );
}
