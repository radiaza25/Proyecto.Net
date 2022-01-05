using Nimbussoft.BaseDeDatos;
using System.Collections.Generic;
using viaje.express.data;
using viaje.express.model;

namespace viaje.express.data
{
	public class UsuarioBd
	{
        internal BaseDeDatos db = BaseDeDatos.GetConection();

        public Usuario Insertar(string nombre, string apellido, string cedula, int createdBy)
        {
            Consulta consulta = new Consulta("[dbo].[proc_insertar_usuario]  @cedula, @nombre, @apellido,  @created_by");
            consulta.AgregarParametro(db.CrearParametro("@cedula", cedula));
            consulta.AgregarParametro(db.CrearParametro("@nombre", nombre));
            consulta.AgregarParametro(db.CrearParametro("@apellido", apellido));
            consulta.AgregarParametro(db.CrearParametro("@created_by", createdBy));
            return db.EjecutarFilaUnica<Usuario>(consulta);
        }

        public Resultado Modificar(int? id, string nombre, string apellido, string cedula, int? modifiedBy)
        {
            Consulta consulta = new Consulta("[dbo].[Modificar_Usuario] @id, @cedula, @nombre, @apellido, @modified_by");
            consulta.AgregarParametro(db.CrearParametro("@id", id));
            consulta.AgregarParametro(db.CrearParametro("@cedula", cedula));
            consulta.AgregarParametro(db.CrearParametro("@nombre", nombre));
            consulta.AgregarParametro(db.CrearParametro("@apellido", apellido));
            consulta.AgregarParametro(db.CrearParametro("@modified_by", modifiedBy));
            return db.EjecutarFilaUnica<Resultado>(consulta);
        }

        public Resultado Eliminar(int id, int deletedBy)
        {
            Consulta consulta = new Consulta("[dbo].[Eliminar_Usuario] @id, @deleted_by");
            consulta.AgregarParametro(db.CrearParametro("@id", id));
            consulta.AgregarParametro(db.CrearParametro("@deleted_by", deletedBy));
            return db.EjecutarFilaUnica<Resultado>(consulta);
        }

        public Usuario Obtener(int id)
        {
            Consulta consulta = new Consulta("[dbo].[Obtener_Usuario] @id");
            consulta.AgregarParametro(db.CrearParametro("@id", id));
            return db.EjecutarFilaUnica<Usuario>(consulta);
        }
      

        public List<Usuario> Listar()
        {
            Consulta consulta = new Consulta("[Listar_Usuario]");
           

            return db.EjecutarConsulta<Usuario>(consulta);
        }
    }
}
