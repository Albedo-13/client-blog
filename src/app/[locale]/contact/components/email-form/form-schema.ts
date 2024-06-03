import * as yup from "yup";

import { EMAIL_REGEX } from "@/constants/constants";

export const schema = yup
  .object({
    fullName: yup.string().min(3, "At least 3 symbols").max(35, "Max 35 symbols"),
    email: yup.string().matches(EMAIL_REGEX, "Invalid Email"),
    message: yup.string().min(10, "At least 10 symbols").max(255, "Max 255 symbols"),
  })
  .required();
