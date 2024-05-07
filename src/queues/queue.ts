import Queue from "bull"

const exampleQueue = new Queue('exampleQueue', {
    redis: {
        host: 'localhost',
        port: 8081
    }
})

export default exampleQueue