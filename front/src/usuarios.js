import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create, ReferenceInput, SelectInput } from 'react-admin';

export const UsuarioList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="residente_id" />
            <TextField source="nombre_usuario" />
            <TextField source="rol_usuario" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const UsuarioEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="residente_id" reference="residentes">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="nombre_usuario" />
            <TextInput source="contrasena" />
            <TextInput source="rol_usuario" />
        </SimpleForm>
    </Edit>
);

export const UsuarioCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="residente_id" reference="residentes">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="nombre_usuario" />
            <TextInput source="contrasena" />
            <TextInput source="rol_usuario" />
        </SimpleForm>
    </Create>
);
