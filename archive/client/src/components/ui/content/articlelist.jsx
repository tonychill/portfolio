import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import Grid from "@material-ui/core/Grid";
import Type from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 624,
    marginRight: "auto",
    borderRadius: 12,
    // display: "flex",
    // flexWrap: "wrap",
    // "& > *": {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(16),
    //   height: theme.spacing(16),
    // },
  },
  cardwrap: {
    marginBottom: 32,
    height: 188,
    borderRadius: 12,
  },
  innerwrap: {
    height: "100%",
    padding: 8,
  },
  title: {
    marginBottom: theme.spacing(1),
  },
  textwrap: {
    padding: 16,
  },
  imgwrap: {
    backgroundColor: "#B4FFF6",
    backgroundSize: "cover",
    height: "100%",
    borderRadius: 7,
  },
  lightBulb: {
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
  },
}));

export default function ArticleList({ articles }) {
  const classes = useStyles();
  return (
    <div className={classes.root} color="textSecondary">
      {articles?.map(({ fields, sys }) => (
        <Link href={`/articles/${sys.id}`}>
          <a>
            <Paper className={classes.cardwrap} elevation={1}>
              <Grid container className={classes.innerwrap}>
                <Grid item xs={8} className={classes.textwrap}>
                  <div className={classes.textPadding}>
                    <Type className={classes.title} variant="caption" component="p">
                      {fields.title}
                    </Type>
                    <Type variant="body1">{fields.summary}</Type>
                  </div>
                </Grid>
                <Grid item xs={4} style={{ backgroundImage: `url(${fields.image.fields.file.url})` }} className={classes.imgwrap}>
                  <div className={classes.imagePadding}>
                    <img src={fields.image} alt="this is a picture" />
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </a>
        </Link>
      ))}
    </div>
  );
}
