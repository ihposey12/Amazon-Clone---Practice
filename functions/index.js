const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors');
const stripe = require('stripe')('sk_test_51IzDeHGDtIBo4KBLCIkmCVoXfBVvXjKWTj7Thrk9F69ftsHcTGKa2vtNod9GUb19LjnSx9HWsQXt9zMp6h5pznJU00RBMUcQz1')

//API SETUP


//App config
const app = express()

//Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

//API Routes
app.get('/', (req, res) => res.status(200).send('hello world'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total
    console.log('Payment Request Received', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    }) //OK - created something
})

//Listen Command
exports.api = functions.https.onRequest(app)
