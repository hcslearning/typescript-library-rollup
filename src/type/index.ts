export type Categoria = {
    _id:number
    nombre: string
    slug: string 
    categoria_padre: number | null 
    imagen: string | null 
    descripcion: string | null 
    icono: string | null 
    peso: number 
}

export type Producto = {
    _id: number
    nombre: string
    slug: string 
    categorias: number[]
    precio_normal: number
    precio_oferta: number
    stock: number 
    activo: boolean
    descripcion: string 
    imagen_principal: string 
    imagenes: string[]
}
/*
export type Producto = {
    _id: number
    nombre: string
    slug: string 
    categorias: number[]
    precio_normal: number
    precio_oferta: number
    precio_oferta_hasta: Date
    marca: string 
    stock: number
    activo: boolean
    activo_sin_stock: boolean
    destacado: boolean
    order_weight: number
    es_variante: boolean
    variante_principal: boolean
    mostrar_variante:boolean
    descripcion: string 
    imagen_principal: string 
    imagenes: string[]
    video: string | null 
    atributos: object
    shipping_size: string 
    dimensiones: number[] 
    peso: number
}
*/
