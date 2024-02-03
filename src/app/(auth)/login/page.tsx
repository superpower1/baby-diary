'use client';

import { useRouter } from "next/navigation"

const Login = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/')
  }
  return (
    <>
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </>
  )
}

export default Login;