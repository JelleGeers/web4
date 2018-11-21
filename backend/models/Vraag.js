let mongoose = require('mongoose');

let VraagSchema = new mongoose.Schema({
    name: String,
    amount: { type: Number, default: 0 },
    unit: String
});

VraagSchema.pre('remove', function (next) {
    this.model('Examennaam').update(
        {},
        { $pull: { vragen: this._id } },
        { safe: true, multi: true },
        next
    );
});

mongoose.model('Vraag', VraagSchema);
