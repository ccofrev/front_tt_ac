import spanishMessages from 'ra-language-spanish';

const customSpanishMessages = {
    ...spanishMessages,
    resources: {
        personas: {
            name: 'Persona |||| Personas',
            fields: {
                nombre: 'Nombre',
                apellido: 'Apellido',
                apellido2: 'Segundo Apellido',
                telefono: 'Teléfono',
                email: 'Correo Electrónico',
                estado: 'Estado'
            }
        },
        residencias: {
            name: 'Residencia |||| Residencias',
            fields: {
                calle: 'Calle',
                numero: 'Número',
                descripcion: 'Descripción',
                imagen: 'Imagen',
                tipo: 'Tipo'
            }
        },
        residentes: {
            name: 'Residente |||| Residentes',
            fields: {
                persona_id: 'ID Persona',
                residencia_id: 'ID Residencia',
                rol_residencia: 'Rol en Residencia'
            }
        },
        residentes_temporales: {
            name: 'Residente Temporal |||| Residentes Temporales',
            fields: {
                residente_id: 'ID Residente',
                fecha_inicio: 'Fecha de Inicio',
                fecha_fin: 'Fecha de Fin'
            }
        },
        usuarios: {
            name: 'Usuario |||| Usuarios',
            fields: {
                residente_id: 'ID Residente',
                nombre_usuario: 'Nombre de Usuario',
                contrasena: 'Contraseña',
                rol_usuario: 'Rol de Usuario'
            }
        },
        visitantes: {
            name: 'Visitante |||| Visitantes',
            fields: {
                persona_id: 'ID Persona',
                tipo: 'Tipo',
                residencia_id: 'ID Residencia'
            }
        },
        trabajadores: {
            name: 'Trabajador |||| Trabajadores',
            fields: {
                persona_id: 'ID Persona',
                tipo: 'Tipo',
                residencia_id: 'ID Residencia'
            }
        },
        vehiculos: {
            name: 'Vehículo |||| Vehículos',
            fields: {
                matricula: 'Matrícula',
                modelo: 'Modelo',
                marca: 'Marca',
                color: 'Color',
                persona_id: 'ID Persona'
            }
        },
        dispositivos: {
            name: 'Dispositivo |||| Dispositivos',
            fields: {
                tipo: 'Tipo',
                marca: 'Marca',
                modelo: 'Modelo',
                protocolo: 'Protocolo',
                topico: 'Tópico',
                subtopico: 'Subtópico'
            }
        },
        metodos_acceso: {
            name: 'Método de Acceso |||| Métodos de Acceso',
            fields: {
                tipo: 'Tipo'
            }
        },
        accesos: {
            name: 'Acceso |||| Accesos',
            fields: {
                metodo_acceso_id_1: 'Método de Acceso 1',
                metodo_acceso_id_2: 'Método de Acceso 2',
                metodo_acceso_id_3: 'Método de Acceso 3',
                nivel_seguridad: 'Nivel de Seguridad',
                residente_id: 'ID Residente',
                visitante_id: 'ID Visitante',
                trabajador_id: 'ID Trabajador',
                dispositivo_id: 'ID Dispositivo',
                temporal: 'Temporal',
                inicio_validez: 'Inicio de Validez',
                fin_validez: 'Fin de Validez',
                estado: 'Estado'
            }
        },
        registros_acceso: {
            name: 'Registro de Acceso |||| Registros de Acceso',
            fields: {
                acceso_id: 'ID de Acceso',
                fecha_hora: 'Fecha y Hora',
                tipo: 'Tipo',
                creado_por: 'Creado por'
            }
        }
    },
    ra: {
        ...spanishMessages.ra,
        action: {
            add_filter: 'Agregar filtro',
            add: 'Añadir',
            back: 'Volver',
            bulk_actions: '%{smart_count} seleccionados',
            cancel: 'Cancelar',
            clear_input_value: 'Limpiar',
            clone: 'Clonar',
            confirm: 'Confirmar',
            create: 'Crear',
            delete: 'Eliminar',
            edit: 'Editar',
            export: 'Exportar',
            list: 'Listar',
            refresh: 'Refrescar',
            remove_filter: 'Eliminar filtro',
            remove_all_filters: 'Eliminar todos los filtros',
            save: 'Guardar',
            search: 'Buscar',
            show: 'Mostrar',
            sort: 'Ordenar',
            undo: 'Deshacer',
            unselect: 'Deseleccionar',
            expand: 'Expandir',
            close: 'Cerrar',
        },
        navigation: {
            no_results: 'No se encontraron resultados',
            no_more_results: 'El número de página %{page} está fuera del rango. Prueba la página anterior.',
            page_out_of_boundaries: 'Número de página %{page} fuera de límites',
            page_out_from_end: 'No se puede ir más allá de la última página',
            page_out_from_begin: 'No se puede ir antes de la primera página',
            page_range_info: '%{offsetBegin}-%{offsetEnd} de %{total}',
            next: 'Siguiente',
            prev: 'Anterior',
            page_rows_per_page: 'Filas por página:',
        },
        auth: {
            auth_check_error: 'Por favor, inicia sesión para continuar',
            user_menu: 'Perfil',
            username: 'Usuario',
            password: 'Contraseña',
            sign_in: 'Iniciar sesión',
            sign_in_error: 'Falló la autenticación, por favor, inténtalo de nuevo',
            logout: 'Cerrar sesión',
        },
        notification: {
            updated: 'Elemento actualizado |||| %{smart_count} elementos actualizados',
            created: 'Elemento creado',
            deleted: 'Elemento eliminado |||| %{smart_count} elementos eliminados',
            bad_item: 'Elemento incorrecto',
            item_doesnt_exist: 'El elemento no existe',
            http_error: 'Error de comunicación con el servidor',
            data_provider_error: 'Error en el proveedor de datos. Ver la consola para más detalles.',
            i18n_error: 'No se pudieron cargar las traducciones para el idioma especificado',
            canceled: 'Acción cancelada',
            logged_out: 'Tu sesión ha finalizado, por favor, vuelve a iniciar sesión.',
        },
        validation: {
            required: 'Requerido',
            minLength: 'Debe ser al menos %{min} caracteres',
            maxLength: 'Debe ser %{max} caracteres o menos',
            minValue: 'Debe ser al menos %{min}',
            maxValue: 'Debe ser %{max} o menos',
            number: 'Debe ser un número',
            email: 'Debe ser un correo electrónico válido',
            oneOf: 'Debe ser uno de: %{options}',
            regex: 'Debe coincidir con el formato (regex): %{pattern}',
        },
        configurable: {
            customize: 'Personalizar', // Agregar la traducción faltante
            configureMode: 'Modo de configuración',
            inspector: {
                title: 'Inspector',
                content: 'Contenido',
                reset: 'Restablecer',
                save: 'Guardar'
            },
        },
        page: {
            create: 'Crear %{name}',
            edit: '%{name} #%{id}',
            error: 'Algo salió mal',
            list: '%{name}',
            loading: 'Cargando',
            not_found: 'No encontrado',
            show: '%{name} #%{id}',
            empty: 'Sin %{name} aún.',
            invite: '¿Quieres añadir uno? Presiona el botón inferior',
        },
	sort: {
                ASC: 'Ascendente',
                DESC: 'Descendente',
            },
        
    }
};

export default customSpanishMessages;
