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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ByteCard = (props: {
  clipPath: string;
  title: string;
  description: string;
}) => {
  const [play] = useSound(props.clipPath);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div onClick={() => play()}>
          <PlayCircleFilledWhiteIcon
            style={{ fontSize: 50 }}
            color="secondary"
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
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
