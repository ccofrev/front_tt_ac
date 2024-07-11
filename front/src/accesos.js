import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create, ReferenceInput, SelectInput, DateInput, BooleanInput } from 'react-admin';

export const AccesoList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="metodo_acceso_id_1" />
            <TextField source="metodo_acceso_id_2" />
            <TextField source="metodo_acceso_id_3" />
            <TextField source="nivel_seguridad" />
            <TextField source="residente_id" />
            <TextField source="visitante_id" />
            <TextField source="trabajador_id" />
            <TextField source="dispositivo_id" />
            <TextField source="temporal" />
            <TextField source="inicio_validez" />
            <TextField source="fin_validez" />
            <TextField source="estado" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const AccesoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="metodo_acceso_id_1" reference="metodosAcceso">
                <SelectInput optionText="tipo" />
            </ReferenceInput>
            <ReferenceInput source="metodo_acceso_id_2" reference="metodosAcceso">
                <SelectInput optionText="tipo" />
            </ReferenceInput>
            <ReferenceInput source="metodo_acceso_id_3" reference="metodosAcceso">
                <SelectInput optionText="tipo" />
            </ReferenceInput>
            <TextInput source="nivel_seguridad" />
            <ReferenceInput source="residente_id" reference="residentes">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="visitante_id" reference="visitantes">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="trabajador_id" reference="trabajadores">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="dispositivo_id" reference="dispositivos">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <BooleanInput source="temporal" />
            <DateInput source="inicio_validez" />
            <DateInput source="fin_validez" />
            <TextInput source="estado" />
        </SimpleForm>
    </Edit>
);

export const AccesoCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="metodo_acceso_id_1" reference="metodosAcceso">
                <SelectInput optionText="tipo" />
            </ReferenceInput>
            <ReferenceInput source="metodo_acceso_id_2" reference="metodosAcceso">
                <SelectInput optionText="tipo" />
            </ReferenceInput>
            <ReferenceInput source="metodo_acceso_id_3" reference="metodosAcceso">
                <SelectInput optionText="tipo" />
            </ReferenceInput>
            <TextInput source="nivel_seguridad" />
            <ReferenceInput source="residente_id" reference="residentes">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="visitante_id" reference="visitantes">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="trabajador_id" reference="trabajadores">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <ReferenceInput source="dispositivo_id" reference="dispositivos">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <BooleanInput source="temporal" />
            <DateInput source="inicio_validez" />
            <DateInput source="fin_validez" />
            <TextInput source="estado" />
        </SimpleForm>
    </Create>
);
