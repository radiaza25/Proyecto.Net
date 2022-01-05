using Nimbussoft.BaseDeDatos;
using System;

namespace viaje.express.model
{
	[Tabla("usuario")]
	public class Usuario
	{
		[Columna("id_usuario")]
		public int IdUsuario { get; set; }

		[Columna("nombre")]
		public string Nombre { get; set; }

		[Columna("apellido")]
		public string Apellido { get; set; }

		[Columna("cedula")]
		public string Cedula { get; set; }

		[Columna("created_at")]
		public DateTime CreatedAt { get; set; }

		[Columna("created_by")]
		public int CreatedBy { get; set; }

		[Columna("modified_at")]
		public Nullable<DateTime> ModifiedAt { get; set; }

		[Columna("modified_by")]
		public Nullable<int> ModifiedBy { get; set; }

		[Columna("deleted_at")]
		public Nullable<DateTime> DeletedAt { get; set; }

		[Columna("deleted_by")]
		public Nullable<int> DeletedBy { get; set; }

	}
}
