import mongoose from 'mongoose';

mongoose
  .connect(
    'mongodb+srv://erickpjoshy:HLLuUnwG2LoebG7b@deepnet.b1lddjy.mongodb.net/?retryWrites=true&w=majority&appName=deepnet'
  )
  .then(() => {
    console.log('Db Connected');
  })
  .catch(e => console.log(e.message));
export default mongoose;
