import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid onclick>
        <TextField source='user_id' label='User Name' />
        <TextField source='first_name' />
        <EmailField source='email' />
        <TextField source='phone_num'/>
        <EditButton basePath='/users' />
      </Datagrid>
    </List>
  )
}

export default UserList
