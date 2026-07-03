export interface EmailPayload {
  Name: string;
  Email: string;
  Message: string;
}

export const sendEmail = async (email: EmailPayload): Promise<{ message?: string; error?: string }> => {
  const response = await fetch(
    import.meta.env.VITE_API_URL || '/api/send',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(email),
    },
  );
  const data = await response.json();
  return data;
};
