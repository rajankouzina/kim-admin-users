import { blue } from '@material-ui/core/colors'
import {Box} from '@material-ui/core';
import React from 'react'
import { AutocompleteArrayInput, Create, ListButton, SimpleForm, TextInput, PasswordInput,CheckboxGroupInput } from 'react-admin'
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles/withStyles';
export const styles: Styles<Theme, any> = {
  user_id: {width: 300 , display:'inline-block',marginLeft:150},
  password: { width: 300,display:'inline-block',marginLeft:150},
  email: { width: 300,display:'inline-block',marginLeft:150},
  first_name: { width: 300,display:'inline-block',marginLeft:150},
  last_name: { width: 300,display:'inline-block',marginLeft:150},
  phone_num: { width: 300,display:'inline-block',marginLeft:150},
};

const useStyles = makeStyles(styles);

const UserCreate = (props) => {
  const classes=useStyles(props);
  return (
    <Create title='Create a User' {...props}> 
      <SimpleForm>
        <div style={{marginLeft:150}}>
          <h2 style={{color:"blue"}}>Add New User</h2>
          <h4 style={{color:"blue", fontWeight:"300"}}>User Display Information</h4>
        </div>
        <TextInput 
          source="user_id" 
          label="User Name" 
          required 
          autoFocus
          formClassName={classes.user_id}
          fullWidth
          variant="outlined" 
        />
        <PasswordInput 
          source="password" 
          label="Password" 
          required 
          formClassName={classes.password}
          fullWidth
          variant="outlined" 
        />
        <TextInput 
          source="first_name" 
          label="First Name" 
          required 
          formClassName={classes.first_name}
          fullWidth
          variant="outlined" 
        />
        <TextInput 
          source="last_name" 
          label="Last Name" 
          variant="outlined" 
          fullWidth
          formClassName={classes.last_name}
        />
        <TextInput 
          type="email"
          source="email" 
          label="Email" 
          formClassName={classes.email}
          fullWidth
          variant="outlined" 
        />
        <TextInput 
          source="phone_num" 
          label="Phone Number" 
          fullWidth
          formClassName={classes.phone_num}
          variant="outlined" 
        />
        <Separator />
        <div style={{marginLeft:150}}>
          <h4 style={{color:"blue", fontWeight:"300"}}>Permissions for this User</h4>
        </div>
        <CheckboxGroupInput source="category" choices={[
          { id: 'programming', name: 'Programming' },
          { id: 'lifestyle', name: 'Lifestyle' },
          { id: 'photography', name: 'Photography' },
        ]} />
      </SimpleForm>
    </Create>
  )
}

const Separator = () => <Box pt="2em" />;

export default UserCreate
