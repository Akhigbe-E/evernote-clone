export default function debounce(callback, wait) {
    let timeout;
    return (...args) => {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply(context, args), wait);
    };
}

export function removeHTMLTags(str) {
    return str.replace(/<[^>]*>?/gm, '');
};