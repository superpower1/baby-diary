'use client';

import { getRandomInt } from "@/app/_lib/random";

const Register = () => {
  // Mock random error
  const random = getRandomInt(2);

  if (random === 1) throw new Error('Error loading registration form')

  return (
    <>
      <h1>Register</h1>
    </>
  )
}

export default Register;