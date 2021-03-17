import React from 'react';
import { IconButton, Button, makeStyles } from '@material-ui/core'
import { Add } from '@material-ui/icons'

const SlideToolbar: React.FC<{
  onAddShape: React.MouseEventHandler;
}> = ({ onAddShape }) => {
  const classes = useStyles()
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={onAddShape} >
        <Add />
      </Button>
    </div>
  )
}

//
const useStyles = makeStyles((theme) => ({}))

export default SlideToolbar
