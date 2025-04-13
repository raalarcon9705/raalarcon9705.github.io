

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e248be95.js","_app/immutable/chunks/index.3c0bc2f3.js","_app/immutable/chunks/singletons.bb952223.js"];
export const stylesheets = [];
export const fonts = [];
