import { makeStyles, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  errorItem: {
    marginTop: "16px",
    paddingLeft: "20px",
    paddingBottom: "16px",
  }
});