export const verifyRecaptcha = async (
  captchaValue: string,
): Promise<boolean> => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("reCAPTCHA secret key is missing");
    return false;
  }

  if (!captchaValue) {
    console.error("reCAPTCHA token is missing");
    return false;
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaValue}`,
      {
        method: "POST",
      },
    );

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("Error verifying reCAPTCHA: ", error);
    return false;
  }
};
