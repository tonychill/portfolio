// import "./../../../public/scss/main.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
//import TwitterFeed from "../.."
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    maxWidth: 1120,
    margin: "auto",
    padding: 0,
    // flexWrap: "nowrap !important",
  },
  leftSide: {
    flexShrink: 0,
    flexBasis: 500,
    maxWidth: 935,
    width: "100%",
  },
  mainRoot: {
    flexBasis: 764,
    flexGrow: 1,
    marginTop: 20,
    margin: "auto",
  },
  sideRoot: {
    position: "sticky",
    flexBasis: 400,
    maxWidth: 400,
    flexGrow: 1,
    top: 85,
    height: "100vh",
    "& > div": {
      zIndex: 1030,
      position: "fixed",
      minHeight: "100%",
    },
  },
});

const Layout = ({ children, meta, path, sideData, experienceType, setExperienceType }) => {
  const classes = useStyles();
  return (
    <Container component="main" className={classes.root}>
      <Grid container>
        <Grid item md={8}>
          <section className={classes.leftSide}>{children}</section>
        </Grid>
        <Grid item md={4}>
          {" "}
          <section className={classes.rightSide}></section>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
