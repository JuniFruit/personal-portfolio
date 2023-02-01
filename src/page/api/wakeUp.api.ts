


export const wakeUpApps = () => {

    const data: string[] = ['https://mini-reddit.onrender.com/', 'https://ultimate-chess.onrender.com/',
        'https://me-tube.onrender.com/', 'https://algorithm-visualizer.onrender.com/'];

    data.forEach(url => {
        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors'
        })
    })

}