import {Box} from '@material-ui/core';
import React from 'react'
import { Create, SimpleForm, TextInput, PasswordInput,CheckboxGroupInput } from 'react-admin'
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles/withStyles';


export const styles: Styles<Theme, any> = {
  user_id: {width: 300 , display:'inline-block',marginLeft:150},
  password: { width: 300,display:'inline-block',marginLeft:150},
  email: { width: 300,display:'inline-block',marginLeft:150},
  first_name: { width: 300,display:'inline-block',marginLeft:150},
  last_name: { width: 300,display:'inline-block',marginLeft:150},
  phone_num: { width: 300,display:'inline-block',marginLeft:150},
  checkboxDesign1: { width: 300,display:'inline-block',marginLeft:150},
  checkboxDesign2: { width: 300,display:'inline-block',marginLeft:150}
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
          <h4 style={{color:"blue", fontWeight:"300" , marginLeft:150}}>Permissions for this User</h4>
          <div formClassName={classes.checkboxDesign1}>
          <CheckboxGroupInput source="permission" label="Permission" choices={[
            { id: 'sub_cat', name: 'Add a sub category' },
            { id: 'main_cat', name: 'Add a main category' },
          ]} />
          </div>
          <div formClassName={classes.checkboxDesign2}>
          <CheckboxGroupInput source="associated" label="Associated Views" required choices={[
            { id: 'skill_master', name: 'Skill Master' },
            { id: 'learner', name: 'Learner' },
            { id: 'administrator', name: 'Administrator' },
          ]} />
        </div>
        <Separator />
      </SimpleForm>
    </Create>
  )
}

const Separator = () => <Box pt="2em" />;

export default UserCreate
