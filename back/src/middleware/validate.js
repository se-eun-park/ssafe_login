import { clientError } from "../errors/errorHandling.js";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const pwRegex =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

const validateSignup = (req, res, next) => {
  const { email, pw, comparePw } = req.body;

  try {
    if (!emailRegex.test(email))
      throw new clientError("유효한 이메일이 아닙니다.", 400);
    if (!pwRegex.test(pw))
      throw new clientError("유효한 패스워드가 아닙니다.", 400);
    if (pw !== comparePw)
      throw new clientError("패스워드가 일치하지 않습니다.", 400);

    next();
  } catch (err) {
    console.error(err);
    res.status(err.status).json({ message: err.message });
  }
};

const validateLogin = (req, res, next) => {
  const { email, pw } = req.body;

  try {
    if (!emailRegex.test(email))
      throw new clientError("유효한 이메일이 아닙니다.", 400);
    if (!pwRegex.test(pw))
      throw new clientError("유효한 패스워드가 아닙니다.", 400);

    next();
  } catch (err) {
    console.error(err);
    res.status(err.status).json({ message: err.message });
  }
};

export { validateSignup, validateLogin };
