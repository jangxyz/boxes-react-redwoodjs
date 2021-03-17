import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core'

const SlideThumbnails: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>{'SlideThumbnails'}</h2>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    whiteSpace: 'nowrap',
    maxWidth: 120,
    height: '100%',
    overflowX: 'hidden',
    //
    borderRight: '1px solid black',
    //
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}))
///
export default SlideThumbnails
