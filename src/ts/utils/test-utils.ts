export async function delay<T>(value: T, ms: number): Promise<T> {
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve(value)
        }, ms)
    )
}

export async function delayFn<T>(fn: () => T, ms: number): Promise<T> {
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve(fn())
        }, ms)
    )
}
