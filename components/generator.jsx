import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getCharacters = (options) => {
  let characters = '';
  if (options.uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (options.lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
  if (options.numbers) characters += '0123456789';
  if (options.symbols) characters += '!@#$%^&*()_+';
  return characters;
};

export default function Generator() {
  const [state, setState] = useState({
    password: '',
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  const { password, length, uppercase, lowercase, numbers, symbols } = state;

  const handleLengthChange = (e) => {
    setState({ ...state, length: e.target.value });
  };

  const handleCheckboxChange = (prop) => {
    setState({ ...state, [prop]: !state[prop] });
  };

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        toast.success('Password copied!');
      })
      .catch((error) => {
        toast.error('Failed to copy password!');
      });
  };

  const generatePassword = () => {
    const options = { uppercase, lowercase, numbers, symbols };
    const selectedOptions = Object.entries(options).filter(
      ([_, value]) => value
    );

    if (selectedOptions.length === 0) {
      setState({ ...state, password: '' });
      toast.warning('Please select at least one option');
      return;
    }

    const characters = getCharacters(options);
    let password = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    setState({ ...state, password });
  };

  return (
    <>
      <div className='mx-auto my-0 w-full p-4 md:max-w-[520px]'>
        <div className='flex flex-col gap-4 rounded-xl bg-zinc-900 p-4 shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)]'>
          <div className='flex items-center'>
            <input
              type='text'
              name='password'
              id='password'
              value={password}
              placeholder='Your password will appear here'
              className='block w-full appearance-none rounded-lg border-white/10 bg-white/5 px-3 py-2 font-[family-name:var(--font-geist-mono)] text-sm text-white hover:border-white/20 focus:outline-none'
              readOnly
            />
            <button
              onClick={handleCopyClick}
              disabled={!password}
              className='ml-2 inline-flex h-full items-center justify-center gap-x-2 rounded-lg border border-white/5 bg-zinc-600 px-3 py-2 text-sm font-semibold text-white hover:bg-zinc-500 focus-visible:outline disabled:bg-zinc-600 disabled:opacity-50 disabled:hover:bg-zinc-600'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='h-4 w-4'
              >
                <path d='M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z' />
                <path d='M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z' />
              </svg>
            </button>
          </div>
          <div>
            <label htmlFor='length' className=''>
              Password length: {length}
            </label>
            <input
              type='range'
              name='length'
              id='length'
              min={8}
              max={24}
              value={length}
              onChange={handleLengthChange}
              className='range-input'
            />
          </div>
          <div className='flex items-center justify-between'>
            <label htmlFor='uppercase'>Uppercase letters</label>
            <input
              type='checkbox'
              name='uppercase'
              id='uppercase'
              checked={uppercase}
              onChange={() => handleCheckboxChange('uppercase')}
              className='mt-0.5 rounded border-white/15 bg-white/5 text-zinc-600 focus:ring-current focus:ring-offset-zinc-900'
            />
          </div>
          <div className='flex items-center justify-between'>
            <label htmlFor='lowercase'>Lowercase letters</label>
            <input
              type='checkbox'
              name='lowercase'
              id='lowercase'
              checked={lowercase}
              onChange={() => handleCheckboxChange('lowercase')}
              className='mt-0.5 rounded border-white/15 bg-white/5 text-zinc-600 focus:ring-current focus:ring-offset-zinc-900'
            />
          </div>
          <div className='flex items-center justify-between'>
            <label htmlFor='numbers'>Numbers</label>
            <input
              type='checkbox'
              name='numbers'
              id='numbers'
              checked={numbers}
              onChange={() => handleCheckboxChange('numbers')}
              className='mt-0.5 rounded border-white/15 bg-white/5 text-zinc-600 focus:ring-current focus:ring-offset-zinc-900'
            />
          </div>
          <div className='flex items-center justify-between'>
            <label htmlFor='symbols'>Symbols</label>
            <input
              type='checkbox'
              name='symbols'
              id='symbols'
              checked={symbols}
              onChange={() => handleCheckboxChange('symbols')}
              className='mt-0.5 rounded border-white/15 bg-white/5 text-zinc-600 focus:ring-current focus:ring-offset-zinc-900'
            />
          </div>
          <button
            onClick={generatePassword}
            className='block w-full rounded-lg border border-white/5 bg-zinc-600 px-3 py-2 text-sm font-semibold text-white hover:bg-zinc-500 focus-visible:outline'
          >
            Generate
          </button>
        </div>
      </div>
      <ToastContainer
        autoClose={2500}
        bodyClassName={'font-sans text-sm'}
        closeOnClick
        hideProgressBar={true}
        position='top-right'
        theme='dark'
        toastClassName={'font-sans text-sm'}
      />
    </>
  );
}
