let mongoose = require('mongoose');

let ExamennaamSchema = new mongoose.Schema({
  name: String,
  vragen: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vraag'
    }
  ],
  created: { type: Date, default: Date.now },
  maker: String
});

mongoose.model('Examennaam', ExamennaamSchema);
