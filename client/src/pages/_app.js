import App from 'next/app';
import Head from 'next/head';
import Amplify, { Auth } from 'aws-amplify';
import MainNav from '../components/navigation/mainnav';
import { useState, useEffect } from 'react';
import config from '../../config.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/styles/testing.css';

function TonyChill({ Component, pageProps }) {
  Amplify.configure({
    Auth: {
      manditorySignId: true,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID,
    },
  });

  const [authStatus, setAuthStatus] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [user, setUser] = useState();
  const [session, setSession] = useState(null);
  const putAuthStatus = stat => setAuthStatus(stat);
  const setUserObj = user => setUser({ user });
  const setCurrentSession = s => setSession(s);

  const handleLogOut = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
      setAuthStatus(false);
      setUserObj({ user: null });
    } catch (err) {
      console.log(err.message);
    }
  };

  const putSession = async () => {
    try {
      const session = await Auth.currentSession();
      setAuthStatus(true);
      setSession(session);
      const user = await Auth.currentAuthenticatedUser();
      setUserObj(user);
    } catch (err) {
      // console.log(err);
    }
  };

  const authProps = {
    session,
    user,
    setUserObj,
    authStatus,
    putAuthStatus,
    setCurrentSession,
    handleLogOut,
  };

  useEffect(() => {
    //Still needs work
    if (localStorage.getItem('userRegistered')) setAuthStatus(true);
    if (!session && !authStatus) putSession();
  });
  let pageTitle = '';
  const handleTitle = value => (pageTitle = value);
  // console.log('pate', pageTitle);
  return (
    <div className='tony'>
      <Head>
        <title>{pageTitle}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainNav auth={authProps} />
      <Component handleTitle={handleTitle} auth={authProps} {...pageProps} />
    </div>
  );
}
export default TonyChill;
