function clone(source) {
    return Object.apply({}, source);
}
const a = { id: 122, name: 'Home Lander' };
const b = clone(a);
