export interface Response {
    message: string,
    data: any
}

export interface Error extends Response {
}

export interface Success extends Response {
}