import React from 'react'
import { connect } from 'react-redux'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { Switch, Route } from 'react-router-dom'
import darkTheme from './themes/dark'
import lightTheme from './themes/light'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import globalStyles from './globalStyles'
import WelcomeMessage from './components/welcome-message/welcome-message'
import FeedbackForm from './components/feedback-form/feedback-form'
import HomeContainer from './containers/home/home'
import AboutContainer from './containers/about/about'
import ChangesContainer from './containers/changes/changes'
import SongContainer from './containers/song/song'

const parseArtistAndTitle = artistAndTitleFromUrl => artistAndTitleFromUrl.replace(/\+/g, ' ')

const App = ({  isDarkModeEnabled }) => (
  <ThemeProvider theme={isDarkModeEnabled ? darkTheme : lightTheme}>
    <Global styles={globalStyles} />
    <Header />
    <div>
      <WelcomeMessage />
      <FeedbackForm />
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/about" component={AboutContainer} />
        <Route path="/changes" component={ChangesContainer} />
        <Route path="/song/:artistAndTitle" component={({ match: { params: { artistAndTitle } }}) => <SongContainer artistAndTitle={parseArtistAndTitle(artistAndTitle)} />} />
      </Switch>
    </div>
    <Footer />
  </ThemeProvider>
)

const mapStateToProps =
  ({ 
    app: {
      isDarkModeEnabled
    }
  }) =>
  ({ 
    isDarkModeEnabled
  })

export default connect(mapStateToProps)(App)
