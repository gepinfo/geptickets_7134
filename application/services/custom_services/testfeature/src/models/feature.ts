
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const featureSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },

})

const featureModel = mongoose.model('feature', featureSchema, 'feature');
export default featureModel;
