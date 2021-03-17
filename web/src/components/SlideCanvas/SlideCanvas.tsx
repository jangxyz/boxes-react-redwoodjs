import React, { FC, useCallback } from 'react'
import clsx from 'clsx'
import { Paper, makeStyles } from '@material-ui/core'
import RectShape from '../RectShape/RectShape'


//
const SlideCanvas: React.FC<{ boxes: Box[] }> = ({ boxes }) => {
  const classes = useStyles()

  // callbacks
  const onDragStart = useCallback((ev, box) => {
    console.log('drag start.', ev, box);
  }, []);
  const onDragging = useCallback((ev, box) => {
    console.log('dragging...', ev, box);
  }, []);
  const onDragEnd = useCallback((ev, box) => {
    console.log('drag end.', ev, box);
  }, []);

  //
  const fixedHeightPaper = clsx(classes.canvas, classes.fixedHeight)
  return (
    <Paper className={fixedHeightPaper}>
      {boxes.map((box, index) => (
        <RectShape key={index} box={box}
          onDragStart={(ev) => onDragStart(ev, box)}
          onDragging={(ev) => onDragging(ev, box)}
          onDragEnd={(ev) => onDragEnd(ev, box)}
        />
      ))}
      {boxes.length} boxes.
    </Paper>
  )
}

//
const useStyles = makeStyles((theme) => ({
  canvas: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    padding: theme.spacing(2),
    overflow: 'auto',
  },
  fixedHeight: {
    height: 240,
  },
}))
//
export default SlideCanvas
