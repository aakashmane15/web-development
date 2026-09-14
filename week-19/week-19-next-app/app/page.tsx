import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-lg">Todo Application</h1>

        <a href="/signin">Sign-in</a>
        <a href="/signup">Sign-up</a>
      </div>
    </>
  );
}
