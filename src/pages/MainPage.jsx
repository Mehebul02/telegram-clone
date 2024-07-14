import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';
import MessageInput from '../components/MessageInput';

const MainPage = () => {
    const [selectedChatId, setSelectedChatId] = useState(null);

    const handleSendMessage = (message) => {
        // Implement the send message functionality if required
        console.log('Send message:', message);
    };

    return (
        <>
            <Header />
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Sidebar onSelectChat={setSelectedChatId} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <ChatWindow chatId={selectedChatId} />
                    <MessageInput onSendMessage={handleSendMessage} />
                </Grid>
            </Grid>
        </>
    );
};

export default MainPage;
