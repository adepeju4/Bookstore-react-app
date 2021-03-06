import { fade, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';



const useStyles = makeStyles((theme)=> ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: "20px 0px 48px"
  },
  icon:{
      marginRight: "22px",
  },
  buttons:{
      marginTop: "20px"
  },

  breadcrumb: {
    width:"133px"
  },

  logout: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "40px"
    
  },
  
  homelink: {
    textDecoration: "underline",
    cursor: "context-menu",
    color: "#707070"
  },
  
  logoutLink: {
    textDecoration: "none",
    color: "#3f51b5",
     '&:hover': {
        
       cursor: "pointer"

    },
    
  },
  
  search:{
    position: "relative",
    color: "#3f51b5",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    border: "1px solid rgba(63, 81, 181, 0.5)",
    padding: "5px 15px",
    height: "36px",
    display: "flex",
    flexDirection: "row",
    '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),

    },
  },
  searchIcon:{
      paddingRight: "5px"
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    }
  },

  cardContainer: {
    
     padding: "0 25px"
  },

  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },

  cardGrid: {
      padding: "20px 0"
  },

  CardMedia: {
    paddingTop: "56.25%"
  },

  cardContent: {
    flexGrow: "1"
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #eee',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "500px",
    height: "400px",
    [theme.breakpoints.only('sm')]: {
      width: "500px",
         },
    [theme.breakpoints.only('xs')]: {
      width: "85%",
        },
   
    [theme.breakpoints.only('md')]: {
     
      width: "500px",
    },
    [theme.breakpoints.only('lg')]: {
     
      width: "600px",
    },
    [theme.breakpoints.only('xl')]: {
     
      width: "600px",
    },
  },

  viewPaper: {

    overflowY: "scroll",

    [theme.breakpoints.only('sm')]: {
      width: "500px",
      height: "85vh"
    },
    [theme.breakpoints.only('xs')]: {
      width: "85%",
     height: "85vh"
    },
   
    [theme.breakpoints.only('md')]: {
      height: "85vh",
      width: "500px",
    },
    [theme.breakpoints.only('lg')]: {
      height: "85vh",
      width: "600px",
    },
    [theme.breakpoints.only('xl')]: {
      height: "85vh",
      width: "600px",
    },
  },

  formroot: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50ch'
        },
    },

    uploadButton: {
        '&:hover': {
            background: "none",

        },
    },
    submit: {
        margin: theme.spacing(1),
        width: "8rem",
        display: "flex",
        alignSelf: "flex-end"
    },
    formHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    iconX: {
        height: "30px",
        '&:before': {
            width: "20px",
            height: "3px",
            backgroundColor: "#3f51b5",
            content: "''",
            position: "absolute",
            display: "block",
            transition: "all 0.25s ease-out",
            transform: "rotate(-45deg)"
        },
        '&:after': {
            width: "20px",
            height: "3px",
            backgroundColor: "#3f51b5",
            content: "''",
            position: "absolute",
            display: "block",
            transition: "all 0.25s ease-out",
            transform: "rotate(-135deg)"
        },
        '&:hover': {
            backgroundColor: "transparent",
            '&:after': {
                transform: "rotate(0deg)"
            },
            '&:before': {
                transform: "rotate(0deg)"
            }
        }
    },
    formBody: {
        display: "flex",
        flexDirection: "column"
  },
     editroot: {
    '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50ch'
    },
    },

    editUploadButton: {
        '&:hover': {
        background: "none",

        },
    },
    editSubmit: {
        margin: theme.spacing(1),
        width: "10rem",
        display: "flex",
        alignSelf: "flex-end"
    },
    editFormBody: {
        display: "flex",
        flexDirection: "column",
    },

  previewImage: {
    width: "80%",
    height: "17rem",
    paddingBottom: "30px",
    [theme.breakpoints.only('xs')]: {
      display: "none"
     }
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0"
  }
}));

export default useStyles;