using Nimbussoft.BaseDeDatos;
using System;
using System.Collections.Generic;
using System.Text;
using viaje.express.model;

namespace viaje.express.data
{
    public class AgendarClienteBd
    {
        internal BaseDeDatos db = BaseDeDatos.GetConection();


        public List<AgendarCliente> Listar()
        {
            Consulta consulta = new Consulta("[Listar_Agendar_Cliente] ");

            return db.EjecutarConsulta<AgendarCliente>(consulta);
        }

        public AgendarCliente Insertar(int personaRolId, DateTime agendarClienteFecha, TimeSpan agendarClienteHora, string agendarClienteSalida, string agendarClienteDestinoe,int estadoSolicitudId ,int createdBy)
        {
            Consulta consulta = new Consulta("[dbo].[Insertar_Agendar_Cliente] @persona_rol_id, @agendar_cliente_fecha,@agendar_cliente_hora, @agendar_cliente_salida, @agendar_cliente_destinoe, @estado_solicitud_id ,@created_by");
            consulta.AgregarParametro(db.CrearParametro("@persona_rol_id", personaRolId));
            consulta.AgregarParametro(db.CrearParametro("@agendar_cliente_fecha", agendarClienteFecha));
            consulta.AgregarParametro(db.CrearParametro("@agendar_cliente_hora", agendarClienteHora));
            consulta.AgregarParametro(db.CrearParametro("@agendar_cliente_salida", agendarClienteSalida));
            consulta.AgregarParametro(db.CrearParametro("@agendar_cliente_destinoe", agendarClienteDestinoe));
            consulta.AgregarParametro(db.CrearParametro("@estado_solicitud_id", estadoSolicitudId));

            consulta.AgregarParametro(db.CrearParametro("@created_by", createdBy));
            return db.EjecutarFilaUnica<AgendarCliente>(consulta);



        }

        public Resultado Modificar(int id, int personaRolId, DateTime agendarClienteFecha, TimeSpan agendarClienteHora, string agendarClienteSalida, string agendarClienteDestinoe, int estadoSolicitud,  int? modifiedBy)
        {
            Consulta consulta = new Consulta("[dbo].[Modificar_Agendar_Cliente] @id, @persona_rol_id, @agendar_cliente_fecha,@agendar_cliente_hora, @agendar_cliente_salida, @agendar_cliente_destinoe, @estado_solicitud ,@modified_by");
            consulta.AgregarParametro(db.CrearParametro("@id", id));
            consulta.AgregarParametro(db.CrearParametro("@persona_rol_id", personaRolId));
            consulta.AgregarParametro(db.CrearParametro("@agendar_cliente_fecha", agendarClienteFecha));
            consulta.AgregarParametro(db.CrearParametro("@agendar_cliente_hora", agendarClienteHora));
            consulta.AgregarParametro(db.CrearParametro("@agendar_cliente_salida", agendarClienteSalida));
            consulta.AgregarParametro(db.CrearParametro("@agendar_cliente_destinoe", agendarClienteDestinoe));
            consulta.AgregarParametro(db.CrearParametro("@estado_solicitud", estadoSolicitud));

            consulta.AgregarParametro(db.CrearParametro("@modified_by", modifiedBy));
            return db.EjecutarFilaUnica<Resultado>(consulta);
        }


        public AgendarCliente Obtener(int id)
        {
            Consulta consulta = new Consulta("[dbo].[Obtener_Agendar_Cliente] @id");
            consulta.AgregarParametro(db.CrearParametro("@id", id));
            return db.EjecutarFilaUnica<AgendarCliente>(consulta);
        }


        public Resultado Eliminar(int id, int deletedBy)
        {
            Consulta consulta = new Consulta("[dbo].[Eliminar_Agendar_Cliente] @id, @deleted_by");
            consulta.AgregarParametro(db.CrearParametro("@id", id));
            consulta.AgregarParametro(db.CrearParametro("@deleted_by", deletedBy));
            return db.EjecutarFilaUnica<Resultado>(consulta);
        }
    }

}
