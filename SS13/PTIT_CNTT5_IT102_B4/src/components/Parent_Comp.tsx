
import React from "react";
import Children_Comp from "./Children_Comp";

export default function Parent_Comp() {
  const [fullName] = React.useState<string>("Nguyễn Văn Nam");

  return (
    <section style={{ maxWidth: 720, margin: "24px auto" }}>
      <h3 style={{ fontSize: 20, fontWeight: 800 }}>
        Họ và tên bên component cha: {fullName}
      </h3>

      <Children_Comp fullName={fullName} />
    </section>
  );
}
