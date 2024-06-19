import React from "react";
import Typography from "@mui/material/Typography";
import { useLanguage } from "../utilities/LanguageContext"; // Adjust the import path
import {TEXT, HEADER_TEXT_GRADIENT } from "../utilities/constants.js"; // Adjust the import path
import { Container } from "@mui/material";

function ChatHeader() {
  const { language } = useLanguage();

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Typography variant="h4" className="chatHeaderText" sx={{ background: HEADER_TEXT_GRADIENT, textAlign: 'center' }}>
          {TEXT[language].CHAT_HEADER_TITLE}
        </Typography>
      </Container>
    </>
  );
}

export default ChatHeader;
