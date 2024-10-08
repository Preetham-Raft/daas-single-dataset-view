export enum TabTypes {
    OVERVIEW = "overview",
    MESSAGES = "messages",
    SCHEMA  = "schema",
    APIS = "apis"
}

export function capitalize(key: string): string {
    return key.charAt(0).toUpperCase() + key.slice(1);
}