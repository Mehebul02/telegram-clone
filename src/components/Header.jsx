
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Telegram Clone
                </Typography>
                <IconButton edge="end" color="inherit">
                    {/* <AccountCircle /> */}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
