function newPlayableCharacter(x, y) {
    const element = newImage('assets/green-character/static.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/green-character/static.gif`
        }
        if (direction === 'west') {
            element.src = `assets/green-character/west.gif`
        }
        if (direction === 'north') {
            element.src = `assets/green-character/north.gif`
        }
        if (direction === 'east') {
            element.src = `assets/green-character/east.gif`
        }
        if (direction === 'south') {
            element.src = `assets/green-character/south.gif`
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}


// function test(){
//     sleep(5000)
//         .then(() => console.log('Hello World'))

// }
// test()


function sleep(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

async function test() {
    await sleep(5000)
    console.log('Hello World')
}

test()

/*
1.Make it asynchronous using the async keyword.
2.Make it accept time as a parameter.
3.At the end of the function, invoke sleep and pass it time as an argument.
4.Use await to pause walkEast until sleep (time) has resolved.
5.After sleep has resolved, invoke stop to stop the character.
*/