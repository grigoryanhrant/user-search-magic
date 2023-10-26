import {UserType} from "../../App.tsx";
import {useState} from "react";
import UserModal from "../UserModal/UserModal.tsx";
import {Card, Link, Box, Typography} from "@mui/material";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import {contactsIconSx, contactsLinkSx, contactsTypographySx, userCardSx} from "./styles.ts";

const UserCard = (props: UserType) => {

    const {name, email, phone} = props;

    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => setModalVisible(false);

    return (
        <>
            <UserModal modalVisible={modalVisible} closeModal={closeModal} user={props}/>
            <Card sx={userCardSx} onClick={() => setModalVisible(true)}>

                <Typography sx={{fontSize: "24px", fontWeight: "700", color: "#262C40"}}>{name}</Typography>

                <Box sx={{boxShadow: "none", marginTop: "24px", display: "flex", flexDirection: "column"}}>
                    <Link sx={contactsLinkSx}>
                        <StayCurrentPortraitIcon sx={contactsIconSx}/>
                        <Typography sx={contactsTypographySx}>{phone}</Typography>
                    </Link>

                    <Link sx={{...contactsLinkSx, marginTop: "12px"}}>
                        <EmailOutlinedIcon sx={contactsIconSx}/>
                        <Typography sx={contactsTypographySx}>{email}</Typography>
                    </Link>
                </Box>
            </Card>
        </>
    );
};

export default UserCard;