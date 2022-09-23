export const convertToFirebaseDatabasePathName = (text: string) => {
    return text.replace(/\./g, "!").replace(/#/g, "@")
        .replace(/\$/g, "%").replace(/\[/g, "&")
        .replace(/\]/g, "*")
}

export type MapBoxAddress = {
    id?: string,
    place_name?: string,
    keyword?: string[],
    avatarURI?: string,
    sources?: number[],
    storySources?: number[],
    center?: [number, number]
}