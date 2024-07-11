import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create, ReferenceInput, SelectInput, DateInput } from 'react-admin';

export const RegistroAccesoList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="acceso_id" />
            <TextField source="fecha_hora" />
            <TextField source="tipo" />
            <TextField source="creado_por" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const RegistroAccesoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="acceso_id" reference="accesos">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <DateInput source="fecha_hora" />
            <TextInput source="tipo" />
            <TextInput source="creado_por" />
        </SimpleForm>
    </Edit>
);

export const RegistroAccesoCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="acceso_id" reference="accesos">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <DateInput source="fecha_hora" />
            <TextInput source="tipo" />
            <TextInput source="creado_por" />
        </SimpleForm>
    </Create>
);
