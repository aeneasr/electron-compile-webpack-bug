
let legacy, modern
const comment = legacy && modern ? "\n/*\n//@ sourceMappingURL=[url]\n//# sourceMappingURL=[url]\n*/" :
    legacy ? "\n/*\n//@ sourceMappingURL=[url]\n*/" :
        modern ? "\n//# sourceMappingURL=[url]" :
            null;

console.log(comment)

export default comment