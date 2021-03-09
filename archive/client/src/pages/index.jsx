import MainFeed from "../components/ui/content/mainfeed";
import { getArticlesByType } from "../components/data/contentful";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import Layout from "../components/ui/styles/layout";
import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../components/ui/content/protip";
import Link from "../components/ui/navigation/link";
import Copyright from "../components/ui/content/copyright";
import ArticleList from "../components/ui/content/articlelist";
import GitHub from "@material-ui/icons/GitHub";
import Cloud from "@material-ui/icons/Cloud";
import Email from "@material-ui/icons/EmailRounded";
import Phone from "@material-ui/icons/PhoneAndroidRounded";
import Social from "@material-ui/icons/ShareRounded";

const Index = ({}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 624,
      marginRight: "auto",
    },
    socialroot: {
      maxWidth: 480,
      "& > div": {
        marginBottom: theme.spacing(2),
      },
    },
    textwrap: { marginBottom: theme.spacing(4) },
    icon: {
      verticalAlign: "middle",
      marginRight: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    (async () => {
      const articles = await getArticlesByType();
      console.log(articles);
      if (articles) setArticles(articles);
    })();
  }, []);
  return (
    <Layout>
      <div className={classes.root}>
        <Box my={4}>
          <div className={classes.textwrap}>
            <Typography variant="h1" component="h1" gutterBottom>
              Code as if you're changing the world.
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              My ultimate goal in life is to build a system that is synonymous to the brilliance of the human body. This should be one more line of text so that
              it looks like I know something about what I am talking about. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </div>
          <Grid container className={classes.socialroot}>
            <Grid item xs={12}>
              <Typography color="textSecondary" gutterBottom>
                <Email className={classes.icon} /> tony@ilanlyfe.com
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary" gutterBottom>
                <Phone className={classes.icon} /> 973.345.3994
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography color="textSecondary" gutterBottom>
                <Link href={"google.com"}>
                  {" "}
                  <GitHub className={classes.icon} /> Github
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography color="textSecondary" gutterBottom>
                <Link href={"google.com"}>
                  {" "}
                  <Social className={classes.icon} /> Twitter
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography color="textSecondary" gutterBottom>
                <Link href={"google.com"}>
                  {" "}
                  <Cloud className={classes.icon} /> AWS Cert: 27823638734
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
      <ArticleList articles={articles} />
    </Layout>
  );
};
// for (let i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log(i, arr, arr[i]);
//   }),
//     2000;
// }
export default Index;
