let users = {
    mathewgries: {
        id: 'mathewgries',
        name: 'Mathew Gries',
        avatarURL: 'https://avatars1.githubusercontent.com/u/12651184?v=4',
        categories: ['ixwyfdzuc9gg40756fua'],
        submissions: {
            "ixwyfdzuc9gg40756fua": 'rzd4et1iaonce3hxpvpfu9',
        },
        votes: {
            "rzd4et1iaonce3hxpvpfu9": 1,
        },
        timestamp: 1549830294630,
    },
    chisgossger: {
        id: 'chrisgossger',
        name: 'Christopher Gossger',
        avatarURL: 'https://image.shutterstock.com/image-photo/headshot-satisfied-cheerful-handsome-man-260nw-793117360.jpg',
        categories : ['eg381p6p9wwyil0o1jvd7a'],
        submissions: {
            "ixwyfdzuc9gg40756fua": 'yxl1w2bky5bei560w0zl88',
            "eg381p6p9wwyil0o1jvd7a": 'yxb4d8irh9fcr43nxgrh4f',
        },
        timestamp: 1549830310899,
    }
}

let categories = {
    ixwyfdzuc9gg40756fua: {
        id: 'ixwyfdzuc9gg40756fua',
        name: 'Best Poop',
        description: 'Vote for the best poop photo',
        submissions: ['rzd4et1iaonce3hxpvpfu9', 'yxl1w2bky5bei560w0zl88'],
        timestamp: 1549830350133,
    },
    eg381p6p9wwyil0o1jvd7a: {
        id: 'eg381p6p9wwyil0o1jvd7a',
        name: 'Cool Cars',
        description: 'Vote for the coolest car',
        submissions: ['yxb4d8irh9fcr43nxgrh4f'],
        timestamp: 1549830321798,
    },
}

submissions = {
    rzd4et1iaonce3hxpvpfu9: {
        id: 'rzd4et1iaonce3hxpvpfu9',
        category: 'ixwyfdzuc9gg40756fua',
        description: 'My poop',
        imageURL: 'https://i.etsystatic.com/5176714/d/il/2924fd/393927691/il_340x270.393927691_565h.jpg?version=0',
        votes: {
            total: 10,
            upvotes: 7,
            downvotes: 3,
        },
        timestamp: 1549830350133,
    },
    yxl1w2bky5bei560w0zl88: {
        id: 'yxl1w2bky5bei560w0zl88',
        category: 'ixwyfdzuc9gg40756fua',
        description: 'Robo poop',
        imageURL: 'https://cdn.thisiswhyimbroke.com/images/dorodorobo-poop-robot-640x534.jpg',
        votes: {
            total: 15,
            upvotes: 14,
            downvotes: 1,
        },
        timestamp: 1549830321798,
    },
    yxb4d8irh9fcr43nxgrh4f: {
        id: 'yxb4d8irh9fcr43nxgrh4f',
        category: 'eg381p6p9wwyil0o1jvd7a',
        description: 'Urkel mobile',
        imageURL: 'https://media.wired.com/photos/59326f55edfced5820d10640/1:1/w_2400,c_limit/tiny-classic-cars-ft.jpg',
        votes: {
            total: 7,
            upvotes: 2,
            downvotes: 5,
        },
        timestamp: 1549830321798,
    },
}

export function _getUsers () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...users}), 1000)
    })
  }
  
  export function _getCategories () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...categories}), 1000)
    })
  }

  export function _getSubmissions () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...submissions}), 1000)
    })
  }

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }