import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
interface IProps {
  isLogged: boolean
  children: ReactNode
  pathName: string
  data?: unknown
}
export default function ProtectedRouter ({
  children,
  isLogged,
  pathName,
  data
}: IProps) {
  if (!isLogged) return <Navigate to={pathName} state={data} />
  return children
}
