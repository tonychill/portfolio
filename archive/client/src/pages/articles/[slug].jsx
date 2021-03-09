// import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/ui/styles/layout";
import { getArticle, getRelatedArticles } from "../../components/data/contentful";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Type from "@material-ui/core/Typography";
import ArticleBody from "../../components/ui/content/articlebody";
// import Map from "../components/ui/gmap";
// import Glider from "../components/ui/glider/glider1";
// import Section from "../components/ui/section";
// import Media from "../components/ui/media";
// import data from "../components/data/test.data.json";

const Article = ({ experience, related }) => {
  // console.log(experience);

  // console.log(items);

  // const meta = {
  //   title: experience.fields.name,
  //   description: "Experince the Virign Islands like never before.",
  //   scene: "xid",
  // };
  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: 64,
      flexGrow: 1,
      //
    },
    experienceWrap: {
      marginLeft: 64,
      marginRight: 64,
    },
    experienceWrapIn: {
      margin: "auto",
      maxWidth: 856,
    },
    body: {
      maxHeight: "300px",
      overflow: "hidden",
    },
    cardcontent: {
      padding: 0,
    },
    features: {
      marginTop: 30,

      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      "& li": {
        listStyleType: "none",
      },
    },
    rightFeed: {
      marginTop: 53,
      position: "sticky",
      // right: "calc(250px + 69vw - 1024px)",
      height: "300px",
      // marginTop: "60px",
      marginLeft: "auto",
      background: "#fff",
      maxWidth: "370px",
      boxShadow: "rgba(0, 0, 0, 0.06) 0px 3px 6px",
      top: "100px",
      borderRadius: "13px",
    },

    things: {
      marginLeft: "15px",
    },

    text: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": 2 /* number of lines to show */,
      "-webkit-box-orient": "vertical",
    },
    titleRoot: {
      marginBottom: theme.spacing(2),
    },
  }));

  const router = useRouter();

  // if (!router.isFallback && !experience) {
  //   return <ErrorPage statusCode={404} />;
  // }
  // const { xid } = router.query;
  const classes = useStyles();

  return (
    <Layout>
      <Grid container className={classes.root}>
        <Grid item className={classes.experienceWrap} xs={12} component="section">
          <div className={classes.textwrap}>
            <Type variant="h3" component="h1" gutterBottom>
              {experience.fields.title}
            </Type>
            <Type variant="body1" component="p" gutterBottom>
              My ultimate goal in life is to build a system that is synonymous to the brilliance of the human body. This should be one more line of text so that
              it looks like I know something about what I am talking about. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Type>
          </div>
          <ArticleBody content={experience.fields.body} />
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Article;

export async function getServerSideProps({ params: { slug } }) {
  try {
    const experience = await getArticle(slug);
    let related = {};
    let relatedItems = await getRelatedArticles(experience.sys.contentType.sys.id);
    if (relatedItems) {
      related = relatedItems;
    }

    return { props: { experience } };
  } catch (error) {
    console.log(error);
  }
}

/**
 * 
 * import Experience from "../../components/ui/cards";
import data from "../../components/data/test.data.json";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Type from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UAParser from "ua-parser-js";
import Box from "@material-ui/core/Box";
 */
