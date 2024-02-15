import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
interface IProps {
  children: ReactNode;
  pathName: string;
  isLoggedIn: boolean;
}
export default function ProtectedRouter({
  children,
  pathName,
  isLoggedIn,
}: IProps) {
  console.log("isLoggedIn", isLoggedIn);

  if (!isLoggedIn) return <Navigate to={pathName} />;
  return children;
}
