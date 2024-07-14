import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { getChats } from '../services/api';

const Sidebar = ({ onSelectChat }) => {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        getChats().then(response => {
            setChats(response.data.chats);
        });
    }, []);

    return (
        <List component="nav">
            {chats?.map(chat => (
                <ListItem button key={chat.id} onClick={() => onSelectChat(chat.id)}>
                    <ListItemText primary={chat.name} />
                </ListItem>
            ))}
        </List>
    );
};

export default Sidebar;
