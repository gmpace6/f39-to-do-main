let tasks = [{id: 1, name: 'Take out the trash', priority: 'Medium', status: false}, {id: 2, name: 'Make dinner', priority: 'High'}]

let globalId = 3

module.exports = {
    getTasks: (req, res) => {
        console.log(tasks)
        res.status(200).send(tasks)
    },

    createTask: (req, res) => {
        console.log('createTask')
let {name, priority} = req.body

        if(!name || !priority) {
            res.status(400).send('New tasks must have a name and a priority!')
        } else {
            let newTask = {
                id: globalId,
                name,
                priority,
                status: false
            }
          tasks.push(newTask)

          res.status(200).send(tasks)

          globalId++

        }
    }
}