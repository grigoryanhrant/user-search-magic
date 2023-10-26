export const typographySxLeft = {
    minWidth: "137px",
    color: "262C40",
    fontSize: "18px",
    fontWeight: "400",

    "@media(max-width: 768px)": {
        fontSize: "14px",
    },
};

export const typographySxRight = {
    color: "#8189A3",
    fontSize: "16px",
    fontWeight: "400",
    marginLeft: "40px",

    "@media(max-width: 768px)": {
        fontSize: "13px",
        marginLeft: "8px",
    },
};

export const userModalMainBoxSx = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    backgroundColor: '#fff',
    border: "none",
    outline: "none",
    borderRadius: "16px",
    boxShadow: "4px 4px 20px 0px rgba(0, 0, 0, 0.1)",
    padding: "24px",

    "@media(max-width: 768px)": {
        width: "calc(100% - 40px)",
        padding: "24px",
    },
};