import { useAuth0 } from '@auth0/auth0-react';
import {  Box, Button, Typography } from '@mui/material';
import { SideBarContentStyle, SideBarFooterStyle } from './SideBarFooterStyle';

const SideBarFooter = () => {
    const { user , logout } = useAuth0();
    return (
        <SideBarFooterStyle>
            <SideBarContentStyle >
            <Box>
            <Typography variant='body1' dir='rtl'>اسم المستخدم</Typography>
            <Typography variant='body2'> {user?.email}!</Typography>
            </Box>
            <img src='/assets/sideBar/user-circle.svg' alt={'user-circle'}/>
            </SideBarContentStyle>
            <Button variant="contained" color="error"  onClick={()=>logout()}>تسجيل الخروج</Button>
        </SideBarFooterStyle>
    )
}

export default SideBarFooter
