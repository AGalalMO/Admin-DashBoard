import { Box } from "@mui/material";
import styled from "styled-components";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';



export const StyledSideBarBox =styled(Box)`
width:242px;
`

 

export const StyledSideBarHeaderBox = styled(Box)`
display: flex;
align-items: center;
justify-content: space-between;
// width: 100%;
// height: 97px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 0px 6px #0000000D;
border-radius: 17px;
opacity: 1;
// padding-left: 17px;
//  padding-right: 32px;
`;

export const StyledLogoImg = styled.img`
width: 80%;
`

export const StyledFormatAlignJustifyIcon = styled(FormatAlignJustifyIcon)`
color : #438FCE;
`
export const SideBarListBox = styled(Box)`
display: flex;
align-items: center;
justify-content: space-between;
padding : 0 20px;
margin-bottom: 20px;
`;