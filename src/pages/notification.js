import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

const NotificationPage = () => (
  <>
    <Helmet>
      <link rel="manifest" href="/manifest.json" />
      <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
      <script>
        {`var OneSignal = window.OneSignal || [];
        OneSignal.push(function() {
          OneSignal.init({
            appId: "58b1ed71-30b9-4ba7-9720-252eedf58b48",
          });
        });`}
      </script>
    </Helmet>
    <Layout>
      <h1>Notification subscription</h1>
    </Layout>
  </>
)

export default NotificationPage
