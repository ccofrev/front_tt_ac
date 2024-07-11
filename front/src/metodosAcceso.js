import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const MetodoAccesoList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="tipo" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const MetodoAccesoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="tipo" />
        </SimpleForm>
    </Edit>
);

export const MetodoAccesoCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="tipo" />
        </SimpleForm>
    </Create>
);
