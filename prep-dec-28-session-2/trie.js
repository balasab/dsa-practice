
class Trie {
    constructor(){
        this.root = new Map();
    }
    insert(word) {
        let current = this.root;
        for (let w of word) {
            if (!current.has(w)) {
                current.set(w, new Map());
            }
            current = current.get(w);
        }
        current.set('isWord', true;)
    }
    search(word) {
        let current = this.root;
        for (let w of word){
            if (!current.has(w)) {
                return false;
            }
            current = current.get(w);
        }
        return current?.isWord === true;
    }
    startsWith(prefix) {
        let current = this.root;
        for (let w of word){
            if (!current.has(w)) {
                return false;
            }
            current = current.get(w);
        }
        return true;
    }
}