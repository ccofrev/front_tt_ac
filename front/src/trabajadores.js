import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create, ReferenceInput, SelectInput } from 'react-admin';

export const TrabajadorList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="persona_id" />
            <TextField source="tipo" />
            <TextField source="residencia_id" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const TrabajadorEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="persona_id" reference="personas">
                <SelectInput optionText="nombre" />
            </ReferenceInput>
            <TextInput source="tipo" />
            <ReferenceInput source="residencia_id" reference="residencias">
                <SelectInput optionText="calle" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const TrabajadorCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="persona_id" reference="personas">
                <SelectInput optionText="nombre" />
            </ReferenceInput>
            <TextInput source="tipo" />
            <ReferenceInput source="residencia_id" reference="residencias">
                <SelectInput optionText="calle" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
