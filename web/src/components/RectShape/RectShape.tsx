import React, { FC } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import { MouseEventHandler } from 'react'

//
interface RectShapeProps {
  box: Box;
  onDragStart: (event: React.MouseEventHandler, box: Box) => void;
  onDragging: (event: React.MouseEventHandler, box: Box) => void;
  onDragEnd: (event: React.MouseEventHandler, box: Box) => void;
}
//
const RectShape: FC<RectShapeProps> = (props) => {
  const {
    box: {
      geometry: { width, height, x, y },
      style,
    },
  } = props

  //
  const classes = useStyles(props)
  return (
    <div className={classes.root} tabIndex={-1}>
      <div className={clsx('shape shape-rect', classes.shape)}></div>
      <div className={clsx('handles', classes.handles)}>
        <div className={clsx('handle-nw', classes.handle)} />
        <div className={clsx('handle-n', classes.handle)} />
        <div className={clsx('handle-ne', classes.handle)} />
        <div className={clsx('handle-e', classes.handle)} />
        <div className={clsx('handle-se', classes.handle)} />
        <div className={clsx('handle-s', classes.handle)} />
        <div className={clsx('handle-sw', classes.handle)} />
        <div className={clsx('handle-w', classes.handle)} />
      </div>
    </div>
  )
}

//
const boxSize = ({
  box: {
    geometry: { width, height, x, y },
  },
}: RectShapeProps) => ({ width, height })
const boxPosition = ({
  box: {
    geometry: { x, y },
  },
}: RectShapeProps) => ({ top: y, left: x })
const boxStyle = ({ box: { style } }: RectShapeProps) => style
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    //
    '& $handles': { display: 'none' },
    '&:focus $handles': { display: 'block' },
  },
  shape: (props: RectShapeProps) => ({
    position: 'absolute',
    ...boxSize(props),
    ...boxPosition(props),
    ...boxStyle(props),
  }),
  handles: (props: RectShapeProps) => ({
    position: 'absolute',
    ...boxSize(props),
    ...boxPosition(props),
    pointerEvents: 'none',
  }),
  handle: {
    position: 'absolute',
    width: '8px',
    height: '8px',
    border: '1px solid black',
    backgroundColor: 'white',
    pointerEvents: 'auto',
    //
    '&.handle-nw': { top: '-4px', left: '-4px', cursor: 'nwse-resize' },
    '&.handle-n': { top: '-4px', left: 'calc(50% - 4px)', cursor: 'ns-resize' },
    '&.handle-ne': { top: '-4px', right: '-4px', cursor: 'nesw-resize' },
    '&.handle-e': {
      right: '-4px',
      top: 'calc(50% - 4px)',
      cursor: 'ew-resize',
    },
    '&.handle-se': { bottom: '-4px', right: '-4px', cursor: 'nwse-resize' },
    '&.handle-s': {
      bottom: '-4px',
      left: 'calc(50% - 4px)',
      cursor: 'ns-resize',
    },
    '&.handle-sw': { bottom: '-4px', left: '-4px', cursor: 'nesw-resize' },
    '&.handle-w': { left: '-4px', top: 'calc(50% - 4px)', cursor: 'ew-resize' },
  },
}))
///
export default RectShape
