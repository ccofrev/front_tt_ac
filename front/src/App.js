import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-json-server';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import customSpanishMessages from './i18n/es';

import { PersonaList, PersonaEdit, PersonaCreate } from './personas';
import { ResidenciaList, ResidenciaEdit, ResidenciaCreate } from './residencias';
import { ResidenteList, ResidenteEdit, ResidenteCreate } from './residentes';
import { ResidentesTemporalesList, ResidentesTemporalesEdit, ResidentesTemporalesCreate } from './residentesTemporales';
import { UsuarioList, UsuarioEdit, UsuarioCreate } from './usuarios';
import { VisitanteList, VisitanteEdit, VisitanteCreate } from './visitantes';
import { TrabajadorList, TrabajadorEdit, TrabajadorCreate } from './trabajadores';
import { VehiculoList, VehiculoEdit, VehiculoCreate } from './vehiculos';
import { DispositivoList, DispositivoEdit, DispositivoCreate } from './dispositivos';
import { MetodoAccesoList, MetodoAccesoEdit, MetodoAccesoCreate } from './metodosAcceso';
import { AccesoList, AccesoEdit, AccesoCreate } from './accesos';
import { RegistroAccesoList, RegistroAccesoEdit, RegistroAccesoCreate } from './registrosAcceso';

const dataProvider = restProvider('http://192.168.0.248:5000/api');
const i18nProvider = polyglotI18nProvider(() => customSpanishMessages, 'es');

const App = () => (
    <Admin dataProvider={dataProvider} i18nProvider={i18nProvider}>
        <Resource name="personas" list={PersonaList} edit={PersonaEdit} create={PersonaCreate} />
        <Resource name="residencias" list={ResidenciaList} edit={ResidenciaEdit} create={ResidenciaCreate} />
        <Resource name="residentes" list={ResidenteList} edit={ResidenteEdit} create={ResidenteCreate} />
        <Resource name="residentes_temporales" list={ResidentesTemporalesList} edit={ResidentesTemporalesEdit} create={ResidentesTemporalesCreate} />
        <Resource name="usuarios" list={UsuarioList} edit={UsuarioEdit} create={UsuarioCreate} />
        <Resource name="visitantes" list={VisitanteList} edit={VisitanteEdit} create={VisitanteCreate} />
        <Resource name="trabajadores" list={TrabajadorList} edit={TrabajadorEdit} create={TrabajadorCreate} />
        <Resource name="vehiculos" list={VehiculoList} edit={VehiculoEdit} create={VehiculoCreate} />
        <Resource name="dispositivos" list={DispositivoList} edit={DispositivoEdit} create={DispositivoCreate} />
        <Resource name="metodos_acceso" list={MetodoAccesoList} edit={MetodoAccesoEdit} create={MetodoAccesoCreate} />
        <Resource name="accesos" list={AccesoList} edit={AccesoEdit} create={AccesoCreate} />
        <Resource name="registros_acceso" list={RegistroAccesoList} edit={RegistroAccesoEdit} create={RegistroAccesoCreate} />
    </Admin>
);

export default App;
