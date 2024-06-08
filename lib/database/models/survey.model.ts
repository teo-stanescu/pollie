// import { Document, Schema, model, models } from "mongoose";

// export interface IImage extends Document {
//   title: string;
//   transformationType: string;
//   publicId: string;
//   secureURL: string; 
//   width?: number;
//   height?: number;
//   config?: object; 
//   transformationUrl?: string; 
//   aspectRatio?: string;
//   color?: string;
//   prompt?: string;
//   author: {
//     _id: string;
//     firstName: string;
//     lastName: string;
//   }
//   createdAt?: Date;
//   updatedAt?: Date;
// }

// const ImageSchema = new Schema({
//   title: { type: String, required: true },
//   transformationType: { type: String, required: true },
//   publicId: { type: String, required: true },
//   secureURL: { type: String, required: true },
//   width: { type: Number },
//   height: { type: Number },
//   config: { type: Object },
//   transformationUrl: { type: String },
//   aspectRatio: { type: String },
//   color: { type: String },
//   prompt: { type: String },
//   author: { type: Schema.Types.ObjectId, ref: 'User' },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now }
// });

// const Image = models?.Image || model('Image', ImageSchema);

// export default Image;



import { Document, Schema, model, models } from "mongoose";

export interface IAnswer {
  id: string;
  slug: string;
  status?: 'Active' | 'Inactive';
  text?: string;
  from?: number;
  to?: number;
}

export interface IQuestion {
  id: string;
  slug: string;
  status: 'Active' | 'Inactive';
  text: string;
  type: 'Rating' | 'Single-Answer' | 'Multiple-Answer' | 'TextArea'
  answers?: IAnswer[]
}

export interface ISurveyTemplate extends Document {
  title: string;
  slug: string;
  publicId: string;
  status: 'Active' | 'Inactive';
  questions: IQuestion[]
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt?: Date;
  updatedAt?: Date;
}

const SurveySchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  publicId: { type: String, required: true },
  status: { type: String, required: true },
  questions: { type: Object },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Survey = models?.Survey || model('Survey', SurveySchema);

export default Survey;