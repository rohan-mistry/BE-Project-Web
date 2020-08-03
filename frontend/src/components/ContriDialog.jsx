import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  contriButton: {
    marginRight: '20px',
  }
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Contact User</DialogTitle>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Github"
            secondary={props.details.github_id}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Email Id"
            secondary={props.details.user.email}
          />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(props);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <React.Fragment>
      <div>
        {props.details.map((contributor) => {
          return (
            <React.Fragment>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
                className={classes.contriButton}
              >
                {contributor.user.first_name + ' ' + contributor.user.last_name}
              </Button>
              <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
                details={contributor}
              />
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
}
