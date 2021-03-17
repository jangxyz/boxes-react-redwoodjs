//
import React, { FC, useCallback, useState } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
//
import AppLayout from 'src/layouts/AppLayout/AppLayout'
import SlideCanvas from 'src/components/SlideCanvas/SlideCanvas'
import SlideThumbnails from '../SlideThumbnails/SlideThumbnails'
import SlideNote from '../SlideNote/SlideNote'
import FormatSidebar from '../FormatSidebar/FormatSidebar'
import SlideToolbar from '../SlideToolbar/SlideToolbar'

//
const buildNewBox = (): Box => {
  return {
    geometry: {
      x: 100,
      y: 100,
      width: 100,
      height: 100,
    },
    style: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'black',
      backgroundColor: 'black',
    },
  };
};

//
const Slide: FC = () => {
  const classes = useStyles()

  // manage boxes
  const [boxes, setBoxes] = useState<Box[]>([
    //buildNewBox()
  ])
  const addBox = (box: Box) => {
    setBoxes(boxes.concat([box]))
  }

  // callbacks
  const addNewShape = useCallback(() => {
    addBox(buildNewBox())
  }, [])

  //
  return (
    <AppLayout>
      <Grid container spacing={1} className={classes.root}>
        <Grid item xs={1}>
          <SlideThumbnails />
        </Grid>
        <Grid item xs={9}>
          <Grid
            container
            direction="column"
            spacing={1}
            className={classes.root}
          >
            <SlideToolbar onAddShape={addNewShape} />
            <SlideCanvas boxes={boxes} />
            <SlideNote />
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <FormatSidebar />
        </Grid>
      </Grid>
    </AppLayout>
  )
}

//
const useStyles = makeStyles((theme) => ({
  root: {
    userSelect: 'auto',
  },
}))

///
export default Slide
