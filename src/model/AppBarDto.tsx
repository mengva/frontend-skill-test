export interface AppBarDto {
    to: string,
    title: string,
    active: boolean,
    children: AppBarDto[]
}