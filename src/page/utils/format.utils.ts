

export const breakText = (text: string) => {
    const splitted = text.split(new RegExp(/!{1,3}|\.|\?/))

    return splitted;
}