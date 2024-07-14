import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { getChatMessages } from '../services/api';

const ChatWindow = ({ chatId }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (chatId) {
            getChatMessages(chatId).then(response => {
                setMessages(response.data.messages);
            });
        }
    }, [chatId]);

    return (
        <List>
            {messages.map(message => (
                <ListItem key={message.id}>
                    <ListItemText primary={message.text} secondary={message.sender} />
                </ListItem>
            ))}
        </List>
    );
};

export default ChatWindow;
