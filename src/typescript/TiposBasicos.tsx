export const TiposBasicos = () => {

    const nombre: string = 'Miguel Caballero';
    const edad: number = 27;
    const estaActivo: boolean = true;
    const poderes: string[] = ['velocidad', 'volar', 'respirar en el agua'];

    return (
        <>
            <h3>Tipos Basicos</h3>
            Nombre (string): {nombre} <br />
            Edad (number): {edad} <br />
            Esta activo (boolean): {(estaActivo) ? 'Activo' : 'No activo'} <br />
            Poderes (arreglo): {poderes.join(', ')}
            <hr />
        </>
    )
}
