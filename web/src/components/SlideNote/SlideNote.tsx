
import { IconButton, Button, makeStyles } from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';

//
const SlideNote: React.FunctionComponent = () => {
  return (
    <div>
      Notes
      <IconButton><KeyboardArrowDown /></IconButton>
    </div>
  )
}

//
const useStyles = makeStyles((theme) => ({
  root: {
    userSelect: 'auto',
  },
}))
export default SlideNote
