import { CreateApiStateType } from './../define'
export interface CreateApiBaseOptions {
    preTemplate?: (config: unknown, instance: unknown) => string
    apiTemplate?: (config: unknown, instance: unknown) => string
    fetchType?: CreateApiStateType // 如果不定义 默认使用axios
    host?: string
    endTemplate?: (config: unknown, instance: unknown) => string
}

export interface CreateApiState {
    input: string,
    schemas: any
    options: CreateApiBaseOptions
}