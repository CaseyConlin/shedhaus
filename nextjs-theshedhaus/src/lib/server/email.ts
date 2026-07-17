import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export const createSESClient = () => {
  const region = process.env.AWS_REGION;
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  if (!region || !accessKeyId || !secretAccessKey) {
    throw new Error("AWS SES configuration is missing");
  }

  return new SESClient({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
};

export const escapeHtml = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

interface SendEmailParams {
  to: string[];
  from: string;
  subject: string;
  htmlBody: string;
}

export const sendEmail = async (params: SendEmailParams): Promise<void> => {
  const sesClient = createSESClient();

  const emailParams = {
    Source: params.from,
    Destination: {
      ToAddresses: params.to,
    },
    Message: {
      Subject: { Data: params.subject },
      Body: { Html: { Data: params.htmlBody } },
    },
  };

  try {
    const command = new SendEmailCommand(emailParams);
    await sesClient.send(command);
  } catch (error) {
    console.error("Error sending email: ", error);
    throw error;
  }
};
