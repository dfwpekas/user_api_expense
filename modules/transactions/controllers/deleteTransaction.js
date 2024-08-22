const mongoose = require("mongoose");
const validator = require("validator");

const deleteTransaction = async(req, res) => {
    const transactionsModel = mongoose.model("transactions");
    const usersModel = mongoose.model("users");

    const {transaction_id} = req.params;

    if(!validator.isMongoId(transaction_id.toString())) throw "Please provide a valid id";

    const getTransaction = await transactionsModel.findOne({
        _id:transaction_id // finding the transaction by it id.
    });

    if(!getTransaction) throw "Transaction not found.";
 
    /* *
    You want to delete a transaction document, what you should know is that the transaction document that you are trying to delete is in (transactions) collection, 
    now we are checking if the transaction type of the (transaction) document that we are trying to delete is === "income", so if it is an (income) type, we are now going to the ("users") model, to update the ID of that associated transaction
    */
    // if the transaction that you are trying to delete is (INCOME).
    

    if(getTransaction.transaction_type === 'income'){
        await usersModel.updateOne({ // entering the users collection
            _id: getTransaction.user_id, // getting the user ID of the transaction which is the user that is associated with the Transaction you are trying to delete.
        },{
            $inc:{
                balance: getTransaction.amount * - 1
            },
        }, {
            runValidators:true,
        }
    );

    } else {
        await usersModel.updateOne({
            _id: getTransaction.user_id
        },{
            $inc:{

                balance: getTransaction.amount

            }
        }, {
            runValidators:true
        }
    );
    }

    await transactionsModel.deleteOne({
        _id: transaction_id
    })
   

    res.status(200).json({
        status: "Transaction Was Deleted successfully."
    });
}

module.exports = deleteTransaction