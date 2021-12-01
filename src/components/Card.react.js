import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Card as MuiCard, CardContent, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  cardHeader: {
      padding: "6px 8px",
  },
  cardTitle: {
      padding: "5px 0",
      fontSize: "1.05em",
      fontWeight: 600,
  },
  cardContent: {
      maxWidth: "100%",
      minHeight: "100%",
      height: "100%",
      overflow: "auto",
  },
});

/**
 * Card component
 * Dashboard > Section > Card
 * https://github.com/danielfrg/jupyter-flex/blob/main/js/src/Card/index.js
 */
export default class Card extends React.Component {
  render() {
    const classes = useStyles();
    const {title, size} = this.props;

    // Card header
    let header;
    if (title) {
      header = (
        <Grid container className={classes.cardHeader}>
          <Grid item>
            <Typography
              component="h2"
              variant="h6"
              className={classes.cardTitle}
            >
              {title}
            </Typography>
          </Grid>
        </Grid>
      );
    }

    // Variables
    const cardSize = size == 0 ? true : size;

    return (
      <Grid
        item
        container
        xs={cardSize}
        alignItems="stretch"
        direction="column"
        className={`card`}
      >
        {header ? <Grid item>{header}</Grid> : null}
        <Grid
          item
          component={MuiCard}
          variant="outlined"
          xs
        >
          <Grid
            item
            container
            direction="column"
            component={CardContent}
            className={classes.cardContent}
            xs
          >
            {this.props.children}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Card.defaultProps = {
  children: null,
  title: '',
  size: 0,
};

Card.propTypes = {
  /** Can be used to render elements inside the component */
  children: PropTypes.node,

  /** Card overall title */
  title: PropTypes.string,

  /** Card container size (0 < grid size <= 12) */
  size: PropTypes.number,
};