import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <NavBar />
      <h1>Hello</h1>
    </>
  );
}
