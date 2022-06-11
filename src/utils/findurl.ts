import urlRegex from "url-regex";

function FindURL(input: string): string | undefined {
    return input.match(urlRegex({ strict: false }))?.[0];
}

export default FindURL;
