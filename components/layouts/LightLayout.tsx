import { FC, PropsWithChildren } from "react";

export const LightLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        padding: "10px",
        borderRadius: "10px",
        width: "300px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "36px",
      }}
    >
      <h3>Light Layout</h3>
      <div>{children}</div>
    </div>
  );
};
