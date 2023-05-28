import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {deleteContact} from 'redux/contacts/operations';
import { getFilteredContacts } from 'redux/contacts/selectors';
import { getIsLoading } from 'redux/contacts/selectors';
import { getError } from 'redux/contacts/selectors';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch=useDispatch();
  return (
    <>
      {error && (
        <p
          style={{
            fontSize: 32,
            color: 'red',
          }}
        >
          {error}
        </p>
      )}

      {filteredContacts.length > 0 ? (
        !isLoading && (
          <List >
            {filteredContacts.map(({ name, number, id }) => (
              <ListItem key={id}>
                <ListItemAvatar>
                  <Avatar><PersonIcon/></Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} secondary={number} />
                <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteContact({id}))} >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        )
      ) : (
        <p>There are no contacts by query</p>
      )}
    </>
  );
};

export default ContactList;
