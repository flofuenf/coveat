import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {theme} from "../themes/theme";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)(props => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h4">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function ContactDialog(props) {
    const {dialog} = props;
    return (
        <div>
            <Dialog onClose={() => props.dialogClose()} aria-labelledby="customized-dialog-title" open={dialog}>
                <DialogTitle id="customized-dialog-title" onClose={() => props.dialogClose()}>
                    Du möchtest uns unterstützen?
                </DialogTitle>
                <DialogContent dividers>
                    <div style={{textAlign: "center"}}>
                        <Typography gutterBottom variant={"h6"}>
                            Möchtest du dein Unternehmen hier aufgelistet haben, oder uns unterstützen? Wir freuen uns
                            über jede neue Nachricht!
                        </Typography>
                        <br/>

                        <Typography gutterBottom variant={"h5"}>
                            Melde dich einfach per Mail an folgende Adresse:
                        </Typography>
                        <br/>
                        <Typography gutterBottom style={{color: "blue", fontSize: 20}}>
                            admin@dwarftech.de
                        </Typography>
                        <Typography gutterBottom>
                            Ansprechpartner: Marco & Florian
                        </Typography>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => props.dialogClose()} color="primary"
                            style={{fontWeight: "bold", color: theme.palette.secondary.main}}>
                        Danke!
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}