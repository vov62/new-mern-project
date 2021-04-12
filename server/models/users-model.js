const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema( // סכמה זה כמו מחלקה רק של השרת

    // סכמה שתופעל רק מדאטה בייס לוקלי שבמחשב
    // {
    //     firstName: { type: String, required: true },
    //     lastName: { type: Number, required: true },
    //     age: { type: Number, required: true },
    //     email: { type: String, required: false }
    // }

    // סכמה שתופעל רק מדאטה בייס בענן מאתר מונגו דיבי
    {
        firstName: String,
        lastName: String,
        age: Number,
        email: String
    }
    // { timestamps: true } // מציג לנו מתי זה נוצר ומתי עודכן לאחרונה
)

// export the userModel with the collection and the user schema 
module.exports = mongoose.model('usersCollection', Users) // .כמו שעשינו בטרמינל use, גישה לקולקשיין שבתוך הדאטה בייס שלנו