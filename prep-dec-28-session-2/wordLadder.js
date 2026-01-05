const wordLadder = (beginWord, endWord, words) => {
    const dict = new Set(words);
    if (!dict.has(endWord)) return 0;
    const queue = [[beginWord, 1]];
    const visited = new Set([beginWord]);
    const L = beginWord.length

    while (queue.length) {
        const [word, steps] = queue.shift();

        if(word === endWord) return steps;

        for (let i = 0; i < L; i++) {
            for (let c = 97; c < 122; c++){
                const next = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
                if (dict.has(next) && !visited.has(next)){
                    visited.add(next);
                    queue.push([next, steps + 1]);
                }
            }
        }
    }
    return 0;
}