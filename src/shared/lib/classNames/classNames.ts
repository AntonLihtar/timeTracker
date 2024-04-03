export function classNames(
    cls: string,
    mods = {},
    additional = []
) {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([key, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ');
    // .trim();
}

