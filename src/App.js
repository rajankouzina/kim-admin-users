import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import RoleList from './components/RoleList'
import RoleCreate from './components/RoleCreate'
import RoleEdit from './components/RoleEdit'
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'

function App() {
  return (
    <Admin dataProvider={restProvider('https://kim-admin-db.herokuapp.com')}>
    {/* <Admin dataProvider={restProvider('https://46ws68ap59.execute-api.ap-southeast-1.amazonaws.com/Staging/user/designation')}> */}
      <Resource
        name='users'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource
        name='role'
        list={RoleList}
        create={RoleCreate}
        edit={RoleEdit}
      />
    </Admin>
  )
}

export default App

