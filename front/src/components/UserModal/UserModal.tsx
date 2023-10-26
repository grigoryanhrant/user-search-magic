import {UserType} from "../../App.tsx";
import {Box, IconButton, Modal, Typography} from "@mui/material";
import {typographySxLeft, typographySxRight, userModalMainBoxSx} from "./styles.ts";
import CloseIcon from '@mui/icons-material/Close';

type Props = {
    modalVisible: boolean;
    closeModal: () => void;
    user: UserType;
}

const UserModal = ({modalVisible, closeModal, user}: Props) => {

    const {name, phone, email, hire_date, position_name, department, address} = user;

    return (
        <Modal
            open={modalVisible}
            aria-labelledby="user-info"
            aria-describedby="user-info"
            onClose={() => closeModal()}
        >
            <Box sx={userModalMainBoxSx}>
                <Box sx={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                    <Typography sx={
                        {
                            color: "262C40",
                            fontWeight: "700",
                            fontSize: "24px",
                            "@media(max-width: 768px)": {
                                fontSize: "16px",
                            },
                        }
                    }>{name}</Typography>
                    <IconButton onClick={closeModal} sx={{
                        outline: "none !important",
                        transform: " translateY(-10px)",
                        padding: "0",
                        width: "32px",
                        height: "32px"
                    }}>
                        <CloseIcon/>
                    </IconButton>
                </Box>

                <Box sx={{display: "flex", flexDirection: "column", marginTop: "40px"}}>
                    <Box sx={{display: "flex", justifyContent: "flex-start", marginBottom: "14px"}}>
                        <Typography sx={typographySxLeft}>Телефон:</Typography>
                        <Typography sx={typographySxRight}>{phone}</Typography>
                    </Box>

                    <Box sx={{display: "flex", justifyContent: "flex-start", marginBottom: "14px"}}>
                        <Typography sx={typographySxLeft}>Почта:</Typography>
                        <Typography sx={typographySxRight}>{email}</Typography>
                    </Box>

                    <Box sx={{display: "flex", justifyContent: "flex-start", marginBottom: "14px"}}>
                        <Typography sx={typographySxLeft}>Дата
                            приема:</Typography>
                        <Typography sx={typographySxRight}>{hire_date}</Typography>
                    </Box>

                    <Box sx={{display: "flex", justifyContent: "flex-start", marginBottom: "14px"}}>
                        <Typography sx={typographySxLeft}>Должность</Typography>
                        <Typography sx={typographySxRight}>{position_name}</Typography>
                    </Box>

                    <Box sx={{display: "flex", justifyContent: "flex-start", marginBottom: "14px"}}>
                        <Typography sx={typographySxLeft}>Подразделение</Typography>
                        <Typography sx={typographySxRight}>{department}</Typography>
                    </Box>
                </Box>

                <Box sx={{marginTop: "40px"}}>
                    <Typography sx={typographySxLeft}>
                        Дополнительная информация
                    </Typography>

                    <Typography
                        sx={{
                            ...typographySxRight,
                            marginLeft: "0 !important",
                            marginTop: "12px"
                        }}>{address}</Typography>
                </Box>
            </Box>
        </Modal>
    );
};

export default UserModal;