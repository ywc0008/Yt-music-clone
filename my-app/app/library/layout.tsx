import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      layout멎너
      {children}
    </div>
  );
};

export default layout;
