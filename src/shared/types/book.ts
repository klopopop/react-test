export interface IBook {
    id: number
    title: string
    author: string
    coverUrl: string
}

export interface IBookResponse {
    payload: IBook
}

export interface IBookListResponse {
    payload: IBook[]
}