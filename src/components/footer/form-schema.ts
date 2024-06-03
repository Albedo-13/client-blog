import * as yup from "yup";

import { EMAIL_REGEX } from "@/constants/constants";

export const schema = yup
  .object({
    email: yup.string().matches(EMAIL_REGEX, "Invalid Email"),
  })
  .required();
