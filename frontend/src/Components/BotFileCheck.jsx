import React from 'react';
import { Grid, Avatar, Typography } from '@mui/material';
import BotAvatar from '../Assets/BotAvatar.svg';
import PdfIcon from '../Assets/pdf_logo.svg';

function BotFileCheckReply({ message, fileName, fileStatus, messageType }) {
  const messageAlignment = 'flex-start';
  const messageBgColor = '#E1EBFF';

  return (
    <Grid container direction="row" justifyContent={messageAlignment} alignItems="center">
      <Grid item>
        <Avatar alt="Bot Avatar" src={BotAvatar} />
      </Grid>
      <Grid item style={{ background: messageBgColor, borderRadius: 20, padding: 10, marginLeft: 5 }}>
        {fileStatus ? (
          <div>
            <Typography>{message}</Typography>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img src={PdfIcon} alt="PDF Icon" style={{ width: 40, height: 40, borderRadius: '50%' }} />
              <Typography>{fileName}</Typography>
            </div>
            <Typography style={{ border: '1px solid #75787B', borderRadius: '1rem', padding: '4px 12px', marginTop: '4px', fontStyle: 'italic' }}>
              {fileStatus}
            </Typography>
            <Typography style={{ marginTop: '4px' }}>
              File uploaded successfully
            </Typography>
          </div>
        ) : (
          <Typography>{message}</Typography>
        )}
      </Grid>
    </Grid>
  );
}

export default BotFileCheckReply;
