import { useContext } from "react";

export default function Navbar() {
  const name = {
    name: "Marie Joseph",
    borrowedCount: 2,
    plan: "premium",
  };
  const nameContext = useContext(name);
  return;
}
