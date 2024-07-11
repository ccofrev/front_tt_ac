import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create, ReferenceInput, SelectInput } from 'react-admin';

export const ResidenteList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="persona_id" />
            <TextField source="residencia_id" />
            <TextField source="rol_residencia" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const ResidenteEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="persona_id" reference="personas">
                <SelectInput optionText="nombre" />
            </ReferenceInput>
            <ReferenceInput source="residencia_id" reference="residencias">
                <SelectInput optionText="calle" />
            </ReferenceInput>
            <TextInput source="rol_residencia" />
        </SimpleForm>
    </Edit>
);

export const ResidenteCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="persona_id" reference="personas">
                <SelectInput optionText="nombre" />
            </ReferenceInput>
            <ReferenceInput source="residencia_id" reference="residencias">
                <SelectInput optionText="calle" />
            </ReferenceInput>
            <TextInput source="rol_residencia" />
        </SimpleForm>
    </Create>
);
