let users = {
    mathewgries: {
        id: 'mathewgries',
        name: 'Mathew Gries',
        avatarURL: 'https://avatars1.githubusercontent.com/u/12651184?v=4',
        categories: ['ixwyfdzuc9gg40756fua'],
        submissions: {
            "ixwyfdzuc9gg40756fua": 'rzd4et1iaonce3hxpvpfu9',
        },
        timestamp: 1549830294630,
    },
    chrisgossger: {
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
        owner: 'mathewgries',
        name: 'Best Poop',
        description: 'Vote for the best poop photo',
        submissions: ['rzd4et1iaonce3hxpvpfu9', 'yxl1w2bky5bei560w0zl88'],
        timestamp: 1549830350133,
    },
    eg381p6p9wwyil0o1jvd7a: {
        id: 'eg381p6p9wwyil0o1jvd7a',
        owner: 'chrisgossger',
        name: 'Cool Cars',
        description: 'Vote for the coolest car',
        submissions: ['yxb4d8irh9fcr43nxgrh4f'],
        timestamp: 1549830321798,
    },
    nqqh43xjkiprtbq8rk68dj: {
        id: 'nqqh43xjkiprtbq8rk68dj',
        owner: 'mathewgries',
        name: 'Cute Cats',
        description: 'Vote for the cutest cat',
        submissions: ['gfrj4ca4sajvcwaipyu8ie','n34jk3hlwdrrol7a38xss'],
        timestamp: 1549830321798,
    },
}

let submissions = {
    rzd4et1iaonce3hxpvpfu9: {
        id: 'rzd4et1iaonce3hxpvpfu9',
        owner: 'mathewgries',
        category: 'ixwyfdzuc9gg40756fua',
        description: 'My poop',
        imageURL: 'https://i.etsystatic.com/5176714/d/il/2924fd/393927691/il_340x270.393927691_565h.jpg?version=0',
        upvotes: ['mathewgries'],
        downvotes: ['chrisgossger'],
        timestamp: 1549830350133,
    },
    yxl1w2bky5bei560w0zl88: {
        id: 'yxl1w2bky5bei560w0zl88',
        owner: 'chrisgossger',
        category: 'ixwyfdzuc9gg40756fua',
        description: 'Robo poop',
        imageURL: 'https://cdn.thisiswhyimbroke.com/images/dorodorobo-poop-robot-640x534.jpg',
        upvotes: ['chrisgossger'],
        downvotes: ['mathewgries'],
        timestamp: 1549830321798,
    },
    yxb4d8irh9fcr43nxgrh4f: {
        id: 'yxb4d8irh9fcr43nxgrh4f',
        owner: 'chrisgossger',
        category: 'eg381p6p9wwyil0o1jvd7a',
        description: 'Urkel mobile',
        imageURL: 'https://media.wired.com/photos/59326f55edfced5820d10640/1:1/w_2400,c_limit/tiny-classic-cars-ft.jpg',
        upvotes: ['mathewgries', 'chrisgossger'],
        downvotes: [],
        timestamp: 1549830321798,
    },
    gfrj4ca4sajvcwaipyu8ie: {
        id: 'gfrj4ca4sajvcwaipyu8ie',
        owner: 'chrisgossger',
        category: 'nqqh43xjkiprtbq8rk68dj',
        description: 'My fluffy kitty',
        imageURL: 'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg',
        upvotes: ['chrisgossger'],
        downvotes: [],
        timestamp: 1549830321798,
    },
    n34jk3hlwdrrol7a38xss: {
        id: 'n34jk3hlwdrrol7a38xss',
        owner: 'mathewgries',
        category: 'nqqh43xjkiprtbq8rk68dj',
        description: 'My cat is a derp',
        imageURL: 'https://i.ytimg.com/vi/FiMg1mHngIU/hqdefault.jpg',
        upvotes: ['chrisgossger'],
        downvotes: [],
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