import React from 'react'
import { connect } from 'react-redux'
import A from '../../components/anchor/anchor'
import songsDefinition from '../../songs'
import { getLinkToSongWithArtistAndTitle } from '../../utils'

const getSongsInKey = keyShortName => songsDefinition.filter(({ key }) => key === keyShortName)

export const SongsForKey = ({ selectedKeyShortName }) => {
  if (!selectedKeyShortName) {
    return null
  }

  const songsInKey = getSongsInKey(selectedKeyShortName)

  if (!songsInKey.length) {
    return null
  }

  return (
    <>
      Popular songs in this key:
      <ul>
        {songsInKey.map(({ artistAndTitle }) => (
          <li key={artistAndTitle}>
            <A href={getLinkToSongWithArtistAndTitle(artistAndTitle)} isInternal>{artistAndTitle}</A>
          </li>
        ))}
      </ul>
    </>
  )  
}

const mapStateToProps = ({ keys: { selectedKeyShortName } }) => ({
  selectedKeyShortName
})

export default connect(mapStateToProps)(SongsForKey)
