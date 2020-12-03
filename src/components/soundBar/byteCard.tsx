import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useSound from 'use-sound';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
// @ts-ignore
import fart from '../../../public/sounds/fart-08.mp3';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ByteCard = () => {
  const [play] = useSound(fart);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div onClick={() => play()}>
          <PlayCircleFilledWhiteIcon />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Fart-1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            An echoed strung out fart.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ByteCard;
