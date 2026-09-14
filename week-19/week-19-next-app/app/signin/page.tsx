"use client";

export default function Signin() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="border-p2">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
        </div>
        <div>
          <button onClick={() => {}}>Sign-in</button>
        </div>
      </div>
    </>
  );
}
