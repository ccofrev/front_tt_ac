import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create, ReferenceInput, SelectInput } from 'react-admin';

export const VisitanteList = props => (
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

export const VisitanteEdit = props => (
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

export const VisitanteCreate = props => (
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
