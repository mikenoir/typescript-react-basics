interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombre: 'Miguel Caballero',
        edad: 27,
        direccion: {
            pais: "Canadá",
            casaNo: 2209
        }
    }
    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
            <hr />
        </>
    )
}
