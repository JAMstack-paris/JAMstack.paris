import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../Header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'JAMstack.paris website' },
            { name: 'keywords', content: 'JAMstack, paris' },
          ]}
        >
          <html lang="en" />
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '5% 0 0',
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
