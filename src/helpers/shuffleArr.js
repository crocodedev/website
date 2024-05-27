const shuffle = (coll) => {
    return Array(coll.length).fill(null)
            .map((_, i) => [Math.random(), i])
            .sort(([a], [b]) => a - b)
            .map(([, i]) => coll[i])
    };


export default shuffle
