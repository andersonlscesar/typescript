function extractAndConvert<T extends object, U extends keyof T>(obj: object, key: string) {
    return obj[key]
}