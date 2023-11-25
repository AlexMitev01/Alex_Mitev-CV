import emailjs from 'emailjs-com';
import {FC, memo, useCallback, useEffect, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData: FormData = {
    name: '',
    email: '',
    message: '',
  };

  const [data, setData] = useState<FormData>(defaultData);

  useEffect(() => {
    emailjs.init('OqzqMFFtBg6dZyZN6');
  }, []);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;
      setData(prevData => ({...prevData, [name]: value}));
    },
    [],
  );

  const handleSendMessage = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    try {
      const serviceID = 'service_xucebtn';
      const templateID = 'template_1nh9n5a';

      const emailData: Record<string, unknown> = {
        name: data.name,
        email: data.email,
        message: data.message,
      };

      const response = await emailjs.send(serviceID, templateID, emailData);
      console.log('Email sent:', response);

      alert('Your message sent successfully!');
      setData(defaultData);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" onSubmit={handleSendMessage}>
      <input
        className={inputClasses}
        name="name"
        onChange={onChange}
        placeholder="Name"
        required
        type="text"
        value={data.name}
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
        value={data.email}
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
        value={data.message}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
