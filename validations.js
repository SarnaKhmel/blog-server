import { body } from "express-validator";

export const registerValidation = [
  body("email", "bad email").isEmail(),
  body("password", "bad pass").isLength({ min: 6 }),
  body("fullName", "bad name").isLength({ min: 3 }),
  body("avatarUrl", "bad url").optional().isURL(),
];

export const loginValidation = [
  body("email", "bad email").isEmail(),
  body("password", "bad pass").isLength({ min: 6 }),
];

export const postCreateValidation = [
  body("title", "bad title").isLength({ min: 3 }).isString(),
  body("text", "bad text").isLength({ min: 3 }).isString(),
  body("tags", "bad tag").optional().isString(),
  body("imageUrl", "bad image url ").optional().isString(),
];
