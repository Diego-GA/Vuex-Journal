
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), // 3119829182
            date: new Date().toDateString(), //  sat 23, julio
            text: 'Every day is taco ipsum tuesday. It’s taco Tuesday Monday. I think I’ve overdosed on tacos. CARNITAS!! Does guac cost extra? Ooh, with diced onions and a pinch of cilantro. It’s a wonderful morning for breakfast tacos. ',
            picture: null, //https//
        },
        {
            id: new Date().getTime() + 1000, // 3119829182
            date: new Date().toDateString(), //  sat 23, julio
            text: 'These tacos are lit. Black or pinto beans? CARNE ASADA!! Give me tacos, or give me death. Tacos, tacos, tacos. Tacos, again? This will be 5 times this week and it’s only Tuesday',
            picture: null, //https//
        },
        {
            id: new Date().getTime() + 2000, // 3119829182
            date: new Date().toDateString(), //  sat 23, julio
            text: 'Side of rice and beans, please. Tacos, tacos, tacos. How do you feel about hard shelled tacos? Josh’s taco shack is the best taco shack. Josh’s taco shack is the best taco shack.',
            picture: null, //https//
        }
    ]
})
