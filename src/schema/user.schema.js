import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";

const userSchema = yup.object().shape({
  id: yup.string().default(() => {
    return uuidv4();
  }),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default userSchema;
