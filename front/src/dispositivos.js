import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const DispositivoList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="tipo" />
            <TextField source="marca" />
            <TextField source="modelo" />
            <TextField source="protocolo" />
            <TextField source="topico" />
            <TextField source="subtopico" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const DispositivoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="tipo" />
            <TextInput source="marca" />
            <TextInput source="modelo" />
            <TextInput source="protocolo" />
            <TextInput source="topico" />
            <TextInput source="subtopico" />
        </SimpleForm>
    </Edit>
);

export const DispositivoCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="tipo" />
            <TextInput source="marca" />
            <TextInput source="modelo" />
            <TextInput source="protocolo" />
            <TextInput source="topico" />
            <TextInput source="subtopico" />
        </SimpleForm>
    </Create>
);
