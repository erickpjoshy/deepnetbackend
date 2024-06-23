import mongoose from 'mongoose';

mongoose
  .connect(
    'mongodb+srv://akhilakd5299:Cd0eezyVBfeGpXQO@elitebuildings.tydupe8.mongodb.net/?retryWrites=true&w=majority&appName=elitebuildings'
  )
  .then(() => {
    console.log('Db Connected');
  })
  .catch(e => console.log(e.message));
export default mongoose;
