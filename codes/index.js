const express = require('express')
const app = express()
const uuid = require('uuid')
const port = 3000
app.use(express.json())

const orders = []

const methodAndUrl = (request, response, next) => {

    console.log(`[${request.method}] - ${request.path}`)
    next()
}

const checkOrderId = (request, response, next) => {
    const { id } = request.params

    const index = orders.findIndex(user => user.id === id)
    if (index < 0) {
        return response.status(404).json({ error: 'Order not found' })
    }
    request.orderId = id
    request.orderIndex = index
    next()
}

//Rota para a criação de um pedido.
app.post('/order', methodAndUrl, (request, response) => {
    const { order, clientName, price } = request.body 
    const newOrder = { id: uuid.v4(), order, clientName, price, status: 'Em preparação' }
    orders.push(newOrder)
    return response.status(201).json(newOrder)
})

//Rota para listar os pedidos feitos.
app.get('/order', methodAndUrl, (request, response) => {
    return response.json(orders)
})

//Rota para alterar um pedido específico.
app.put('/order/:id', checkOrderId, methodAndUrl, (request, response) => {
    const { order, clientName, price, status } = request.body
    const updatedOrder = { id: request.orderId, order, clientName, price, status }
    orders[request.orderIndex] = updatedOrder
    return response.json(updatedOrder)
})

//Rota para excluir um pedido específico.
app.delete('/order/:id', checkOrderId, methodAndUrl, (request, response) => {
    orders.splice(request.orderIndex, 1)
    return response.json({ message: 'Order deleted successfully' })
})

//Rota para mostrar um pedido específico.
app.get('/order/:id', checkOrderId, methodAndUrl, (request, response) => {
    return response.json(orders[request.orderIndex])
})

//Rota para alterar o status de um pedido.
app.patch('/order/:id', checkOrderId, methodAndUrl, (request, response) => {
    orders[request.orderIndex].status = 'Pronto'
    return response.json(orders[request.orderIndex])
})

app.listen(port, () => {
    console.log(`Server started in port ${port}`)
})