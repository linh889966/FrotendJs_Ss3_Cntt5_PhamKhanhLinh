
import React from "react";

type Props = { fullName: string };

export default function Children_Comp({ fullName }: Props) {
  return (
    <h3 style={{ fontSize: 20, fontWeight: 800, marginTop: 16 }}>
      Họ và tên bên component con: {fullName}
    </h3>
  );
}
