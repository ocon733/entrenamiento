export interface Usuario{
  id_usuario: number,
    nombre: string,
    apellidos: string,
    email:string,
    clave: string,
    fecha_alta: Date,
    fecha_baja: Date,
    ultimo_acceso: Date,    
  }