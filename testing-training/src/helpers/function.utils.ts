const PASSWORD_REGEX = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*W)(?!.* ).{8,16}$")

export const isAcceptablePassword = (password: string): boolean => PASSWORD_REGEX.test(password)


export function customForEach(items: number[], callback: any) {
    for (const item of items) {
        callback(item);
    }
}
