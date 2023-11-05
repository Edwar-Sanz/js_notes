/* los enum puedes ser numéricos o de cadena de texto
puede mezclar y combinar valores de enumeración 
numéricos y de cadena, pero se recomienda no hacerlo.*/
enum Roles {
  User = "USER",
  Admin = "ADMIN",
  SuperAdmin = 2,
}

let person4: Roles = Roles.User; // variable con un tipo enumerado
