import { Card, CardContent, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#f44336",
    marginTop: 24,
    marginBottom: 20,
    border: "none",
  },
  cardText: {
    textAlign: "center",
    color: "#ffffff",
  },
  newsCardContent: {
    display: "flex",
  },
  newsCard: {
    marginBottom: 12,
    border: "none",
    height: 284,
    width: 900,
  },

  cardImage: {
    height: 268,
    width: 320,
    marginBottom: 7,
    marginRight: 4,
    marginLeft: 4,
    borderRadius: 4,
    overflow: "hidden",
  },
  newsTitle: {
    fontWeight: 320,
    fontFamily: "Roboto",
    margin: 8,
    color: "#44444d ",
  },
  newsDesc: {
    fontSize: 13,
    marginLeft: 5,
    marginRight: 5,
  },
  newsDate: {
    marginTop: 45,
    fontSize: 13,
    marginLeft: 5,
    marginRight: 5,
  },
  author: {
    marginLeft: 5,
    fontSize: 12,
    color: "#808290",
  },
});

const NewsContent = ({ newsResult }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Card className={classes.card}>
        <CardContent>
          <Typography
            variant="body2"
            component="p"
            className={classes.cardText}
          >
            For the best experience use inshorts app on your smartphone
          </Typography>
        </CardContent>
      </Card>

      {newsResult &&
        newsResult.length > 0 &&
        newsResult.map((news, i) => (
          <Card className={classes.newsCard}>
            <CardContent className={classes.newsCardContent}>
              <div>
                <img
                  className={classes.cardImage}
                  src={news.urlToImage}
                  alt={news.title}
                />
              </div>
              <div>
                <Typography className={classes.newsTitle}>
                  {news.title}
                </Typography>
                <p className={classes.author}>short by {news.author}</p>
                <Typography
                  variant="body3"
                  component="p"
                  className={classes.newsDesc}
                >
                  {news.description}
                </Typography>

                <Typography
                  variant="body3"
                  component="p"
                  className={classes.newsDate}
                >
                  Published Date : {news.publishedAt.split("T")[0]}
                </Typography>
                <p className={classes.author}>
                  read more at{" "}
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    {news.source.name}
                  </a>{" "}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
    </Container>
  );
};

export default NewsContent;
