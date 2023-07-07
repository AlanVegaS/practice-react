import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("-------Prueba 05-funciones.js-----", () => {
  test("getUser debe retornar un objeto ", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    expect(user).toEqual(testUser);
  });

  test("getUsuarioActivo ", () => {
    const nombre = "Alan";
    const username = getUsuarioActivo(nombre);

    expect(username).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
