import Grid from "@material-ui/core/Grid";
import Type from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    height: 250,
    width: "100%",
    borderRadius: 12,
    boxShadow: theme.shadows[2],
  },
  section: {
    marginBottom: 32,
  },
}));
const ArticleBody = ({ content }) => {
  const classes = useStyles();
  const { content: body } = content;
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        {body.length > 0
          ? body.map(({ content, nodeType, data }, index) => {
              return (
                <Grid key={index} className={classes.section} container component="section">
                  {nodeType === "paragraph" ? (
                    <Type variant="body1">{content[0].value}</Type>
                  ) : nodeType === "embedded-asset-block" ? (
                    <Grid item xs={12}>
                      <div style={{ backgroundImage: `url(${data.target.fields.file.url})` }} className={classes.image}></div>
                    </Grid>
                  ) : nodeType === "ordered-list" ? (
                    <ul>
                      {content.map(({ content }, index) => {
                        return <li key={index}>{content[0].content[0].value}</li>;
                      })}
                    </ul>
                  ) : null}
                </Grid>
              );
            })
          : null}
      </Grid>
    </Grid>
  );
};

export default ArticleBody;
