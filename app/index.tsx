import authStorage from '@/auth/storage';
import useAuth from '@/auth/useAuth';
import ActivityIndicator from '@/components/ActivityIndicator';
import routes from '@/components/navigation/routes';
import { Redirect } from 'expo-router';
import React, { useEffect, useState } from 'react';

const index = () => {
  const { user, setUser } = useAuth()
  const [loading, setLoading] = useState(true)

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    setUser(user)
    setLoading(false)
  }


  useEffect(() => {
    restoreUser()
  }, [])

  if (loading) {
    return <ActivityIndicator visible={loading} />
  }

  return (
    <>
      {user ? <Redirect href={routes.tabs} /> : <Redirect href={routes.auth} />}
    </>
  )
}

export default index
