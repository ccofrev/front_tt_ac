import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const PersonaList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="nombre" />
            <TextField source="apellido" />
            <TextField source="apellido2" />
            <TextField source="telefono" />
            <TextField source="email" />
            <TextField source="estado" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const PersonaEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nombre" />
            <TextInput source="apellido" />
            <TextInput source="apellido2" />
            <TextInput source="telefono" />
            <TextInput source="email" />
            <TextInput source="estado" />
        </SimpleForm>
    </Edit>
);

export const PersonaCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nombre" />
            <TextInput source="apellido" />
            <TextInput source="apellido2" />
            <TextInput source="telefono" />
            <TextInput source="email" />
            <TextInput source="estado" />
        </SimpleForm>
    </Create>
);
