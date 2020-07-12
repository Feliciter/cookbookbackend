const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema
let Recipe = new Schema(
  {

    recipe_name: {
      type: String,
    },
    recipe_description: {
      type: String,
    },

    subjects: {
      type: Array,
    }


  }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
  {
    collection: "recipes",
  }
);




module.exports = mongoose.model("Recipe", Recipe);
