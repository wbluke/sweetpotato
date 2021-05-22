import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  basicLineStyles: {
    width: "100%",
    textAlign: "center",
    borderBottom: "1px solid #aaa",
    lineHeight: "0.1em",
    margin: "10px 0 20px",
  },
  line: {
    background: "#fff",
  },
});

const HorizonLine = () => {
  const styles = useStyles();

  return (
    <div className={styles.basicLineStyles}>
      <span className={styles.line} />
    </div>
  );
};

export default HorizonLine;
