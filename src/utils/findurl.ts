const URLRegex =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
const removeEndingCommasWhitespace = /,\s*$/;

function FindURL(input: string): string | undefined {
    return input
        .match(URLRegex)
        ?.toString()
        .replace(removeEndingCommasWhitespace, "");
}

export default FindURL;
