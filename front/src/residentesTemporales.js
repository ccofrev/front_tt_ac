import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create, DateInput, ReferenceInput, SelectInput } from 'react-admin';

export const ResidentesTemporalesList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="residente_id" />
            <TextField source="fecha_inicio" />
            <TextField source="fecha_fin" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const ResidentesTemporalesEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="residente_id" reference="residentes">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <DateInput source="fecha_inicio" />
            <DateInput source="fecha_fin" />
        </SimpleForm>
    </Edit>
);

export const ResidentesTemporalesCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="residente_id" reference="residentes">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <DateInput source="fecha_inicio" />
            <DateInput source="fecha_fin" />
        </SimpleForm>
    </Create>
);
