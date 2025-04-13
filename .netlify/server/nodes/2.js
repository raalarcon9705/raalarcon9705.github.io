

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.71121bf0.js","_app/immutable/chunks/index.3c0bc2f3.js"];
export const stylesheets = ["_app/immutable/assets/2.c06ff0d4.css"];
export const fonts = [];
