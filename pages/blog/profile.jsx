/* eslint-disable react/jsx-key */
// pages/profile.js
import { Auth, Typography, Button } from "@supabase/ui";
const { Text } = Typography
import { supabase } from '../../util/supabase'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function Profile(props) {

    const loggedIn = props?.supabaseClient?.auth?.currentUser?.role;

  
  if (loggedIn == 'authenticated')  props.setLoggedIn(true);


    const { user } = Auth.useUser();
    if (user)
      return (
        <>
          <Text>Signed in: {user.email}</Text>
          <Button block onClick={() => props.supabaseClient.auth.signOut()}>
            Sign out
          </Button>
        </>
      );
    return props.children 
}

export default function AuthProfile() {
  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState(false);



  useEffect(() => {
    if (loggedIn) {
            router.push({
          pathname: '/blog/create_posts',
          query: { returnUrl: router.asPath }
      });
    }
  },[ loggedIn, router])


    return (
        <Auth.UserContextProvider supabaseClient={supabase}>
          <Profile supabaseClient={supabase} setLoggedIn={setLoggedIn} >
            <Auth supabaseClient={supabase} />
          </Profile>
        </Auth.UserContextProvider>
    )
}