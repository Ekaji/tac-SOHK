/* eslint-disable react/jsx-key */
// pages/_app.js
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { supabase } from '../../util/supabase'
// import '../styles/globals.css'

function Posts() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async () => checkUser()
    )
    checkUser()
    return () => {
      authListener?.unsubscribe()
    };
  }, [])
  async function checkUser() {
    const user = supabase.auth.user()
    setUser(user)
  }
  return (
  <div>
    <nav className="p-6 border-b border-gray-300">
      <Link href="/">
        <a>
          <span className="mr-6 cursor-pointer">Home</span>
        </a>
      </Link>
      {
        user && (
          <Link href="/create-post">
            <a>
              <span className="mr-6 cursor-pointer">Create Post</span>
            </a>
          </Link>
        )
      }
      <Link href="/profile">
        <a>
          <span className="mr-6 cursor-pointer">Profile</span>
        </a>
      </Link>
    </nav>
  </div>
  )
}

export default Posts