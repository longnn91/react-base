import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const _Button = styled(Button)(() => ({
  background: "#000",
  color: "#fff",
  borderRadius: "15px",
}));

export const _HoverMidButton = styled(_Button)(() => ({
  "&:hover": {
    color: "grey",
    background: "grey",
  },
}));

interface _ButtonDivProps {
  "is-me"?: "true" | "false";
}

export const _ButtonDiv = styled("div")((props: _ButtonDivProps) => {
  console.log("log for component", props);
  return {
    width: "70px",
    height: "50px",
    backgroundColor: "#000",
    color: "#fff",
    lineHeight: "50px",
    padding: "0px 20px",
    display: "inline-block",
    borderRadius: "10px",
  };
});

export default _Button;
