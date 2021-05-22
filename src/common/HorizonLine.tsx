import { makeStyles } from "@material-ui/core";
import React from "react";

interface IHorizonLine {
  padding: string
}

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

const HorizonLine = ({padding}: IHorizonLine) => {
  const styles = useStyles();

  return (
    <div className={styles.basicLineStyles} style={{padding}}>
      <span className={styles.line} />
    </div>
  );
};

HorizonLine.defaultProps = {
  padding: '0'
}

export default HorizonLine;
