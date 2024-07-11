import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const ResidenciaList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="calle" />
            <TextField source="numero" />
            <TextField source="descripcion" />
            <TextField source="imagen" />
            <TextField source="tipo" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const ResidenciaEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="calle" />
            <TextInput source="numero" />
            <TextInput source="descripcion" />
            <TextInput source="imagen" />
            <TextInput source="tipo" />
        </SimpleForm>
    </Edit>
);

export const ResidenciaCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="calle" />
            <TextInput source="numero" />
            <TextInput source="descripcion" />
            <TextInput source="imagen" />
            <TextInput source="tipo" />
        </SimpleForm>
    </Create>
);
