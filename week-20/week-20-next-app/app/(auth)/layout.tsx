import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>
        <h1>Layout example</h1>
      </div>
      <div>
        <h2>This is a header</h2>
      </div>
      <div>{children}</div>
      <div>
        <h2>This is a footer</h2>
      </div>
    </>
  );
}
