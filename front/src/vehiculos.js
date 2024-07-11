import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create, ReferenceInput, SelectInput } from 'react-admin';

export const VehiculoList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="matricula" />
            <TextField source="modelo" />
            <TextField source="marca" />
            <TextField source="color" />
            <TextField source="persona_id" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const VehiculoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="matricula" />
            <TextInput source="modelo" />
            <TextInput source="marca" />
            <TextInput source="color" />
            <ReferenceInput source="persona_id" reference="personas">
                <SelectInput optionText="nombre" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const VehiculoCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="matricula" />
            <TextInput source="modelo" />
            <TextInput source="marca" />
            <TextInput source="color" />
            <ReferenceInput source="persona_id" reference="personas">
                <SelectInput optionText="nombre" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
