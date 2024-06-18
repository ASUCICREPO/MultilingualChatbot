import { createTheme } from "@mui/material/styles";
import { PRIMARY_MAIN, SECONDARY_MAIN, CHAT_BODY_BACKGROUND, CHAT_LEFT_PANEL_BACKGROUND, HEADER_BACKGROUND, USERMESSAGE_BACKGROUND, BOTMESSAGE_BACKGROUND } from "./utilities/constants";

const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_MAIN,
    },
    background: {
      default: CHAT_BODY_BACKGROUND,
      chatBody: CHAT_BODY_BACKGROUND,
      chatLeftPanel: CHAT_LEFT_PANEL_BACKGROUND,
      header: HEADER_BACKGROUND,
      botMessage: BOTMESSAGE_BACKGROUND,
      userMessage: USERMESSAGE_BACKGROUND,
    },
    secondary: {
      main: SECONDARY_MAIN,
    },
  },
});

export default theme;
