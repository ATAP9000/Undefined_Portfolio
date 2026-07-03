import { useState, useCallback } from 'react';
import { sendEmail } from '../../services/mailer';

interface State {
  name: string;
  email: string;
  message: string;
  error: boolean;
}

export const useContactForm = () => {
  const [state, setState] = useState<State>({
    name: '',
    email: '',
    message: '',
    error: false,
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; severity: 'success' | 'error' } | null>(null);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setState((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const onFocus = useCallback(() => {
    setState((prev) => ({ ...prev, error: false }));
  }, []);

  const onClick = useCallback(async () => {
    if (!state.name || !state.email || !state.message) {
      setState((prev) => ({ ...prev, error: true }));
      return;
    }
    setLoading(true);
    try {
      const data = await sendEmail({
        Name: state.name,
        Email: state.email,
        Message: state.message,
      });
      setToast({ message: data.message || 'Message sent successfully', severity: 'success' });
      setState({ name: '', email: '', message: '', error: false });
    } catch (err) {
      setToast({
        message: err instanceof Error ? err.message : 'Failed to send',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  }, [state]);

  return { state, loading, toast, setToast, onChange, onFocus, onClick };
};
