export type Region = {
    nombre: string 
}

export type Comuna = {
    nombre: string
    region: Region 
}

export type Destinatario = {
    nombre: string 
    comuna: Comuna 
}

export function costoEnvio(destinatario:Destinatario){
    if( destinatario.comuna.region.nombre = "Región Metropolitana") {
        return 3900
    } else {
        return 5900
    }
}

export class ClaseEnvio {
    costo:number
    comuna:string  

    constructor(costo:number, comuna:string){
        this.costo = costo
        this.comuna = comuna
    }

    calcular() {
        return this.costo 
    }
}