const _ = require("lodash");
const models = require("../helpers/models");        // Importar helpers y modelos.
const utils = require("../helpers/utils");
const transaction = require("../models/transaction");
const wallet = require("../models/wallet");

// Servicio pendiente por importar.



// Controladores
// Controlador para transferir fondos de una billetera a otra
const transferFunds = async (req, res) => {
    try {
        const { senderWalletId, receiverWalletId, amount } = req.body;

        // Encuentra las billeteras por ID
        const senderWallet = await wallet.findById(senderWalletId);
        const receiverWallet = await wallet.findById(receiverWalletId);

        // Verifica si el remitente tiene suficientes fondos
        if (senderWallet.balance < amount) {
            return res.status(400).json({ 
                message: 'Fondos insuficientes' 
            });
        }

        // Crea la transacción de retiro en la billetera del remitente
        const withdrawalTransaction = new transaction({
            wallet: senderWallet._id,
            type: 'withdrawal',
            amount
        });
        await withdrawalTransaction.save();

        // Actualiza el saldo de la billetera del remitente
        senderWallet.balance -= amount;
        await senderWallet.save();

        // Crea la transacción de depósito en la billetera del destinatario
        const depositTransaction = new transaction({
            wallet: receiverWallet._id,
            type: 'deposit',
            amount
        });
        await depositTransaction.save();

        // Actualiza el saldo de la billetera del destinatario
        receiverWallet.balance += amount;
        await receiverWallet.save();

        res.status(201).json({ 
            message: 'Transferencia realizada con éxito' });
    } catch (error) {
        res.status(500).json({
            message: 'Error al realizar la transferencia: ', 
            error: error });
            console.log("Error: ", error);
    }
};




module.exports = {
    render: {
    },
    get: {
      
    },
    post: {
      transferFunds
    },
    put: {
      
    },
    delete: {
      
    }
  };  